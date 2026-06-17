import React, { useState } from 'react'

export default function Simulator() {
  const [goal, setGoal] = useState('')
  const [truth, setTruth] = useState('Outcomes over optics')
  const [packageType, setPackageType] = useState('90 Day AI + Automation Adoption Accelerator')
  const [simStatus, setSimStatus] = useState('idle') // idle, step1, step2, step3, completed
  const [progressMsg, setProgressMsg] = useState('')
  const [result, setResult] = useState(null)

  const runSimulation = (e) => {
    e.preventDefault()
    if (!goal.trim()) return

    setSimStatus('step1')
    setProgressMsg(`Reading the target and looking for the decision points behind: "${goal.substring(0, 32)}..."`)

    // Step 1 Cycle
    setTimeout(() => {
      setSimStatus('step2')
      setProgressMsg(`Testing the work against the principle: "${truth}".`)
      
      // Step 2 Cycle
      setTimeout(() => {
        setSimStatus('step3')
        setProgressMsg(`Shaping a practical first sprint around: "${packageType}".`)
        
        // Step 3 Cycle
        setTimeout(() => {
          setSimStatus('completed')
          setProgressMsg('')
          
          const cleanGoal = goal.trim()
          setResult({
            score: "Clear",
            savings: "Scoped",
            roi: "Ready",
            steps: [
              `Name the real operational target: "${cleanGoal}".`,
              `Decide what success has to prove under the principle "${truth}".`,
              `Set the boundaries for "${packageType}" so scope is useful and controlled.`,
              `Build risk, ownership, benefits tracking and adoption into the first delivery slice.`
            ]
          })
        }, 1200)
      }, 1200)
    }, 1200)
  }

  const resetSimulator = () => {
    setGoal('')
    setSimStatus('idle')
    setResult(null)
  }

  return (
    <section id="simulator" className="simulator-section relative-container">
      <div className="container">
        
        {/* Section Header */}
        <div className="simulator-header reveal-on-scroll">
          <span className="section-tag">Try It Before You Call</span>
          <h2 className="section-title">The Challenge Brief Builder</h2>
          <p className="section-desc">
            Drop in a real challenge from your organisation. Pick the principle that should govern it, then see how we would frame the first useful slice of work. No inflated savings. No theatre.
          </p>
        </div>

        {/* Console Box Grid */}
        <div className="grid-2 console-grid">
          
          {/* Left Column: Inputs Form */}
          <div className="card-glass console-inputs-card reveal-on-scroll">
            <h3 className="console-card-title">Give Us a Real Challenge</h3>
            <p className="console-card-desc">Use a problem your team is actually sitting on. The output is a sharper brief, not an inflated business case.</p>
            
            <form onSubmit={runSimulation} className="simulator-form">
              <div className="form-group">
                <label className="form-label" htmlFor="sim-goal">Operational Target</label>
                <input 
                  type="text" 
                  id="sim-goal"
                  className="form-control"
                  placeholder="e.g. Unblock insurance claims auditing queues"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  disabled={simStatus !== 'idle'}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="sim-truth">Governing Brand Truth</label>
                <select 
                  id="sim-truth"
                  className="form-control"
                  value={truth}
                  onChange={(e) => setTruth(e.target.value)}
                  disabled={simStatus !== 'idle'}
                >
                  <option value="Outcomes over optics">Outcomes over optics (Move Metrics, Reject Theatre)</option>
                  <option value="Clarity is a delivery tool">Clarity is a delivery tool (Clear delivery language)</option>
                  <option value="Adoption is the finish line">Adoption is the finish line (Real user confidence)</option>
                  <option value="Controls are not the enemy">Controls are not the enemy (Regulator approved bounds)</option>
                  <option value="Respect capacity">Respect capacity (Teams, Politics &amp; Deadlines)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="sim-package">Target Service Pillar</label>
                <select 
                  id="sim-package"
                  className="form-control"
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                  disabled={simStatus !== 'idle'}
                >
                  <option value="AI + Automation Adoption Readiness Snapshot">Adoption Readiness Snapshot (Phase 1 Audit)</option>
                  <option value="90 Day AI + Automation Adoption Accelerator">90 Day Adoption Accelerator (Phase 2 Speed)</option>
                  <option value="In Flight AI + Automation Programme Health Check">Programme Health Check (Unblock Stuck AI)</option>
                  <option value="AI + Automation Product Operating Model Starter Pack">Product Operating Model Pack (Steering Prep)</option>
                </select>
              </div>

              {simStatus === 'idle' ? (
                <button type="submit" className="btn btn-accent btn-full-width">
                  <span>Build Brief</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z" fill="currentColor"/>
                  </svg>
                </button>
              ) : (
                <button type="button" className="btn btn-secondary btn-full-width cursor-wait" disabled>
                  <span className="spinner-mini"></span>
                  <span>Building Brief...</span>
                </button>
              )}
            </form>
          </div>

          {/* Right Column: Simulated Terminal Screen */}
          <div className="console-display reveal-on-scroll">
            <div className="terminal-frame">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="terminal-title">noviform brief builder</span>
              </div>
              
              <div className="terminal-body">
                {simStatus === 'idle' && (
                  <div className="terminal-welcome">
                    <span className="terminal-prompt">$ noviform brief</span>
                    <p className="terminal-log">Awaiting operational instructions...</p>
                    <p className="terminal-log-dim">Input a target and principle to shape a first delivery brief.</p>
                  </div>
                )}

                {simStatus !== 'idle' && simStatus !== 'completed' && (
                  <div className="terminal-processing">
                    <span className="terminal-prompt">$ noviform frame</span>
                    <div className="terminal-steps-log">
                      <p className={`step-log ${simStatus === 'step1' || simStatus === 'step2' || simStatus === 'step3' ? 'active' : ''}`}>
                        ✓ Phase 1: Target clarified
                      </p>
                      <p className={`step-log ${simStatus === 'step2' || simStatus === 'step3' ? 'active' : ''}`}>
                        ✓ Phase 2: Principle applied ({truth})
                      </p>
                      <p className={`step-log ${simStatus === 'step3' ? 'active' : ''}`}>
                        ✓ Phase 3: Boundaries set for {packageType}
                      </p>
                    </div>
                    <div className="terminal-spinner-row">
                      <span className="spinner-pulse"></span>
                      <p className="progress-message-text">{progressMsg}</p>
                    </div>
                  </div>
                )}

                {simStatus === 'completed' && result && (
                  <div className="terminal-results animate-fade-in">
                    <div className="results-header-block">
                      <h4 className="results-badge">Noviform Brief Ready</h4>
                      <button className="reset-btn" onClick={resetSimulator}>Reset Console</button>
                    </div>

                    {/* Results Metrics Dashboard */}
                    <div className="results-metrics-grid">
                      <div className="result-metric-box">
                        <span className="metric-box-val val-green">{result.score}</span>
                        <span className="metric-box-lbl">Target</span>
                      </div>
                      <div className="result-metric-box">
                        <span className="metric-box-val val-gold">{result.roi}</span>
                        <span className="metric-box-lbl">Scope</span>
                      </div>
                      <div className="result-metric-box">
                        <span className="metric-box-val">{result.savings}</span>
                        <span className="metric-box-lbl">Next Step</span>
                      </div>
                    </div>

                    {/* Blueprint Pipeline Steps */}
                    <div className="blueprint-pipeline-steps">
                      <h5 className="pipeline-title">First Useful Moves</h5>
                      <ol className="pipeline-list">
                        {result.steps.map((step, idx) => (
                          <li key={idx} className="pipeline-step-item">
                            <span className="pipeline-num">0{idx + 1}</span>
                            <span className="pipeline-text">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>

      <style jsx="true">{`
        .simulator-section {
          padding: 80px 0 0 0;
          background-color: var(--bg-secondary);
          transition: background-color 0.5s ease;
          position: relative;
        }

        .simulator-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4.5rem;
        }

        .console-grid {
          gap: 3.5rem;
          align-items: stretch;
        }

        @media (max-width: 992px) {
          .console-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .console-inputs-card {
          padding: 3rem;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 480px) {
          .console-inputs-card {
            padding: 2rem 1.25rem;
          }
        }

        .console-card-title {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .console-card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .simulator-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .btn-full-width {
          width: 100%;
          margin-top: 1rem;
        }

        .cursor-wait {
          cursor: wait;
        }

        .spinner-mini {
          width: 16px;
          height: 16px;
          border: 2.5px solid var(--border-color);
          border-top-color: var(--text-primary);
          border-radius: 50%;
          display: inline-block;
          animation: spin 1s infinite linear;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Simulated Terminal styling */
        .console-display {
          display: flex;
          flex-direction: column;
        }

        .terminal-frame {
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border-color);
          background-color: #0c0e12;
          box-shadow: var(--glass-shadow), 0 20px 40px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 480px;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          padding: 0.8rem 1.25rem;
          background-color: #161a22;
          border-bottom: 1px solid #232a36;
        }

        .terminal-buttons {
          display: flex;
          gap: 6px;
          margin-right: 1.5rem;
        }

        .terminal-title {
          color: #8c9ba5;
          font-family: monospace;
          font-size: 0.75rem;
        }

        .terminal-body {
          padding: 2.5rem;
          color: #cbd5e1;
          font-family: monospace;
          font-size: 0.9rem;
          line-height: 1.6;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 480px) {
          .terminal-body {
            padding: 1.5rem 1rem;
          }
        }

        .terminal-prompt {
          color: #e5ba73;
          display: block;
          margin-bottom: 0.75rem;
        }

        .terminal-log {
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }

        .terminal-log-dim {
          color: #475569;
        }

        .terminal-steps-log {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .step-log {
          color: #475569;
          transition: var(--transition-fast);
        }

        .step-log.active {
          color: #38bdf8;
        }

        .terminal-spinner-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
          padding: 0.75rem 1rem;
          background-color: #161a22;
          border-radius: 8px;
          border-left: 3px solid #e5ba73;
        }

        .spinner-pulse {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #e5ba73;
          box-shadow: 0 0 10px #e5ba73;
          animation: pulse-glow 1.5s infinite ease-in-out;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        .progress-message-text {
          font-size: 0.8rem;
          color: #cbd5e1;
        }

        /* Results Panel styling */
        .terminal-results {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          width: 100%;
        }

        .results-header-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #232a36;
          padding-bottom: 0.75rem;
        }

        .results-badge {
          color: #18d8d8;
          font-size: 0.95rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .reset-btn {
          background: transparent;
          color: #94a3b8;
          border: 1px solid #232a36;
          padding: 0.35rem 0.85rem;
          border-radius: 4px;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.75rem;
          transition: var(--transition-fast);
        }

        .reset-btn:hover {
          color: #fff;
          border-color: #475569;
          background-color: #161a22;
        }

        .results-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .results-metrics-grid {
            grid-template-columns: 1fr;
          }
        }

        .result-metric-box {
          background-color: #161a22;
          border: 1px solid #232a36;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          display: flex;
          flex-direction: column;
        }

        .metric-box-val {
          font-size: 1.4rem;
          font-weight: 700;
          color: #cbd5e1;
        }

        .metric-box-val.val-green { color: #22c55e; }
        .metric-box-val.val-gold { color: #e5ba73; }

        .metric-box-lbl {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
          margin-top: 0.25rem;
        }

        .blueprint-pipeline-steps {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .pipeline-title {
          font-size: 0.8rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .pipeline-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .pipeline-step-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .pipeline-num {
          color: #e5ba73;
          font-weight: 700;
          font-size: 0.85rem;
          background-color: #161a22;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          border: 1px solid #232a36;
        }

        .pipeline-text {
          font-size: 0.85rem;
          color: #cbd5e1;
          line-height: 1.4;
        }

        .animate-fade-in {
          animation: terminalFadeIn 0.5s ease-out forwards;
        }

        @keyframes terminalFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
