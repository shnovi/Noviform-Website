import React, { useMemo, useState } from 'react'

const questions = [
  {
    id: 'work',
    label: 'What are you trying to move?',
    options: [
      'AI use case',
      'Automation backlog',
      'Stuck delivery',
      'Operating model'
    ]
  },
  {
    id: 'blocker',
    label: 'Where is the work getting stuck?',
    options: [
      'Unclear ownership',
      'Data quality',
      'Governance delay',
      'Adoption risk'
    ]
  },
  {
    id: 'evidence',
    label: 'How clear is the evidence?',
    options: [
      'Mostly opinion',
      'Some signals',
      'Good delivery data',
      'Clear benefits view'
    ]
  },
  {
    id: 'control',
    label: 'How heavy are the controls?',
    options: [
      'Light',
      'Moderate',
      'Risk team involved',
      'Audit or regulator visible'
    ]
  },
  {
    id: 'pressure',
    label: 'What is the timeline pressure?',
    options: [
      'Exploring options',
      'Decision due soon',
      'Delivery already late',
      'Executive pressure'
    ]
  }
]

const blockerMap = {
  'Unclear ownership': {
    risk: 'Decision rights are unclear',
    action: 'Name the accountable owner and define who can say yes.',
    service: 'Product Operating Model Pack'
  },
  'Data quality': {
    risk: 'The data reality may not support the ambition',
    action: 'Run a data reality check before committing serious budget.',
    service: 'Adoption Readiness Snapshot'
  },
  'Governance delay': {
    risk: 'Governance is slowing the route to value',
    action: 'Clarify controls, release path and decision forums early.',
    service: 'Programme Health Check'
  },
  'Adoption risk': {
    risk: 'The change may go live without confident use',
    action: 'Design adoption, benefits tracking and ownership into the first sprint.',
    service: '90 Day Adoption Accelerator'
  }
}

const workMap = {
  'AI use case': 'Check whether the use case is valuable, governed and ready to move.',
  'Automation backlog': 'Separate useful automation from noise and prioritise the next slice.',
  'Stuck delivery': 'Find the real blocker behind the status report and reset the delivery path.',
  'Operating model': 'Turn isolated work into a managed capability with clear ownership.'
}

const evidenceWeight = {
  'Mostly opinion': 0,
  'Some signals': 1,
  'Good delivery data': 2,
  'Clear benefits view': 3
}

const controlWeight = {
  Light: 3,
  Moderate: 2,
  'Risk team involved': 1,
  'Audit or regulator visible': 0
}

const pressureWeight = {
  'Exploring options': 2,
  'Decision due soon': 2,
  'Delivery already late': 1,
  'Executive pressure': 1
}

const defaultAnswers = {
  work: 'AI use case',
  blocker: 'Unclear ownership',
  evidence: 'Some signals',
  control: 'Risk team involved',
  pressure: 'Decision due soon'
}

export default function Simulator() {
  const [answers, setAnswers] = useState(defaultAnswers)
  const [challenge, setChallenge] = useState('')
  const [copyStatus, setCopyStatus] = useState('idle')

  const result = useMemo(() => {
    const score =
      evidenceWeight[answers.evidence] +
      controlWeight[answers.control] +
      pressureWeight[answers.pressure]

    const blocker = blockerMap[answers.blocker]

    let readiness = 'Ready to sprint'
    if (score <= 3) readiness = 'Needs sharper control'
    if (answers.blocker === 'Unclear ownership') readiness = 'Needs decision clarity'
    if (answers.work === 'Operating model') readiness = 'Needs operating model'
    if (answers.pressure === 'Delivery already late') readiness = 'Needs recovery view'

    const firstMoves = [
      blocker.action,
      workMap[answers.work],
      'Agree the first useful slice, success measure and owner before delivery starts.'
    ]

    return {
      readiness,
      risk: blocker.risk,
      service: blocker.service,
      firstMoves
    }
  }, [answers])

  const updateAnswer = (id, value) => {
    setAnswers((current) => ({ ...current, [id]: value }))
  }

  const summaryText = [
    challenge ? `Challenge: ${challenge}` : null,
    `Readiness: ${result.readiness}`,
    `Primary risk: ${result.risk}`,
    `Suggested conversation: ${result.service}`,
    `First move: ${result.firstMoves[0]}`
  ].filter(Boolean).join('\n')

  const copyWithFallback = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(summaryText)
        return
      } catch {
        // Fall through to the textarea path for browsers that block clipboard permissions.
      }
    }

    const textArea = document.createElement('textarea')
    textArea.value = summaryText
    textArea.style.position = 'fixed'
    textArea.style.left = '-9999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }

  const copySummary = async () => {
    try {
      await copyWithFallback()
      setCopyStatus('copied')
      window.setTimeout(() => setCopyStatus('idle'), 2200)
    } catch {
      setCopyStatus('failed')
      window.setTimeout(() => setCopyStatus('idle'), 2800)
    }
  }

  return (
    <section id="simulator" className="readiness-section relative-container">
      <div className="container">
        <div className="readiness-header reveal-on-scroll">
          <span className="section-tag">Before You Call</span>
          <h2 className="section-title">AI Adoption Readiness Check</h2>
          <p className="section-desc">
            Answer a few practical questions and see where your AI or automation work is likely to stall, what needs attention first and which Noviform engagement fits best.
          </p>
        </div>

        <div className="readiness-shell reveal-on-scroll">
          <div className="diagnostic-panel">
            <div className="panel-heading">
              <span className="panel-kicker">Diagnostic</span>
              <h3>Build a sharper brief before the conversation</h3>
              <p>Use this to frame the current situation. It is not a scorecard. It is a practical way to find the first useful move.</p>
            </div>

            <div className="challenge-field">
              <label htmlFor="readiness-challenge">What is the challenge?</label>
              <textarea
                id="readiness-challenge"
                value={challenge}
                onChange={(event) => setChallenge(event.target.value)}
                placeholder="Example: Claims automation is live in one team but adoption, controls and ownership are unclear."
              />
            </div>

            <div className="question-stack">
              {questions.map((question, index) => (
                <div className="question-block" key={question.id}>
                  <div className="question-title-row">
                    <span>0{index + 1}</span>
                    <h4>{question.label}</h4>
                  </div>
                  <div className="option-grid">
                    {question.options.map((option) => (
                      <button
                        type="button"
                        className={answers[question.id] === option ? 'option-pill active' : 'option-pill'}
                        onClick={() => updateAnswer(question.id, option)}
                        key={option}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="summary-panel" aria-live="polite">
            <div className="summary-top">
              <span className="panel-kicker">Live summary</span>
              <h3>{result.readiness}</h3>
              <p>{result.risk}</p>
            </div>

            <div className="summary-card highlight">
              <span>Suggested Noviform conversation</span>
              <strong>{result.service}</strong>
            </div>

            <div className="summary-card">
              <span>Current situation</span>
              <strong>{answers.work}</strong>
              <p>{workMap[answers.work]}</p>
            </div>

            <div className="moves-list">
              <span className="moves-title">First useful moves</span>
              <ol>
                {result.firstMoves.map((move, index) => (
                  <li key={move}>
                    <span>0{index + 1}</span>
                    <p>{move}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="summary-actions">
              <a href="#contact" className="btn btn-accent">
                <span>Send This Brief</span>
              </a>
              <button type="button" className="btn btn-secondary" onClick={copySummary}>
                {copyStatus === 'copied' ? 'Copied' : 'Copy Summary'}
              </button>
            </div>
            <p className={copyStatus === 'idle' ? 'copy-note' : 'copy-note visible'} role="status" aria-live="polite">
              {copyStatus === 'failed' ? 'Copy failed. Please try again.' : 'Summary copied to clipboard.'}
            </p>
          </aside>
        </div>
      </div>

      <style jsx="true">{`
        .readiness-section {
          padding: 80px 0 0;
          background-color: var(--bg-secondary);
          transition: background-color 0.5s ease;
          position: relative;
        }

        .readiness-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4rem;
        }

        .readiness-shell {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
          gap: 1.5rem;
          align-items: start;
        }

        @media (max-width: 980px) {
          .readiness-shell {
            grid-template-columns: 1fr;
          }
        }

        .diagnostic-panel,
        .summary-panel {
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border-color);
          background-color: var(--bg-card);
          box-shadow: var(--glass-shadow);
        }

        .diagnostic-panel {
          padding: clamp(1.25rem, 3vw, 2rem);
        }

        .summary-panel {
          position: sticky;
          top: 96px;
          padding: clamp(1.25rem, 3vw, 1.75rem);
        }

        @media (max-width: 980px) {
          .summary-panel {
            position: static;
          }
        }

        .panel-heading {
          max-width: 680px;
          margin-bottom: 1.75rem;
        }

        .panel-kicker {
          display: inline-flex;
          width: max-content;
          margin-bottom: 0.75rem;
          border-radius: 999px;
          padding: 0.4rem 0.75rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--accent-gold);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .panel-heading h3,
        .summary-top h3 {
          color: var(--text-primary);
          font-size: clamp(1.45rem, 2.4vw, 2rem);
          margin-bottom: 0.6rem;
        }

        .panel-heading p,
        .summary-top p {
          color: var(--text-secondary);
          font-size: 0.96rem;
          line-height: 1.6;
        }

        .challenge-field {
          margin-bottom: 1.75rem;
        }

        .challenge-field label {
          display: block;
          margin-bottom: 0.65rem;
          color: var(--text-primary);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .challenge-field textarea {
          width: 100%;
          min-height: 112px;
          resize: vertical;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          padding: 1rem;
          font: inherit;
          line-height: 1.55;
          transition: var(--transition-fast);
        }

        .challenge-field textarea:focus {
          outline: none;
          border-color: var(--accent-gold);
          box-shadow: 0 0 0 4px var(--accent-gold-glow);
        }

        .question-stack {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .question-block {
          padding: 1rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
        }

        .question-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }

        .question-title-row span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--accent-gold);
          font-weight: 800;
          font-size: 0.78rem;
          flex-shrink: 0;
        }

        .question-title-row h4 {
          color: var(--text-primary);
          font-size: 1rem;
        }

        .option-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
        }

        @media (max-width: 560px) {
          .option-grid {
            grid-template-columns: 1fr;
          }
        }

        .option-pill {
          min-height: 44px;
          border-radius: 999px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-card);
          color: var(--text-secondary);
          padding: 0.65rem 0.9rem;
          font: inherit;
          font-size: 0.88rem;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .option-pill:hover {
          color: var(--text-primary);
          border-color: var(--accent-gold);
        }

        .option-pill.active {
          color: var(--text-primary);
          border-color: var(--accent-teal);
          background-color: var(--accent-teal-glow);
        }

        .summary-top {
          margin-bottom: 1.25rem;
        }

        .summary-card {
          padding: 1rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
          margin-bottom: 1rem;
        }

        .summary-card.highlight {
          border-color: var(--accent-gold);
        }

        .summary-card span,
        .moves-title {
          display: block;
          margin-bottom: 0.45rem;
          color: var(--text-secondary);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .summary-card strong {
          display: block;
          color: var(--text-primary);
          font-size: 1.08rem;
          line-height: 1.35;
        }

        .summary-card p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-top: 0.55rem;
        }

        .moves-list {
          margin-top: 1.25rem;
        }

        .moves-list ol {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin: 0;
          padding: 0;
        }

        .moves-list li {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.8rem;
          align-items: start;
        }

        .moves-list li span {
          color: var(--accent-gold);
          font-weight: 800;
          font-size: 0.82rem;
          padding-top: 0.15rem;
        }

        .moves-list li p {
          color: var(--text-primary);
          font-size: 0.9rem;
          line-height: 1.48;
          margin: 0;
        }

        .summary-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        @media (max-width: 520px) {
          .summary-actions {
            grid-template-columns: 1fr;
          }
        }

        .summary-actions .btn {
          width: 100%;
          justify-content: center;
          min-height: 46px;
        }

        .copy-note {
          min-height: 1.25rem;
          margin-top: 0.85rem;
          color: var(--accent-teal);
          font-size: 0.85rem;
          font-weight: 700;
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .copy-note.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
