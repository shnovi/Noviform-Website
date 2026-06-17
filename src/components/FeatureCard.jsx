import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Props:
//   icon: element rendered at top (usually the service number)
//   title: card heading (h3)
//   tagline: italic subheading below title (optional)
//   description: main body copy
//   deliverables: string[] of scannable output chips (optional)
//   timeline: string badge e.g. "12 weeks" (optional)
export default function FeatureCard({ title, tagline, description, deliverables, timeline, icon }) {
  return (
    <motion.div
      className="feature-card card-glass"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* Number badge */}
      <div className="icon-wrapper">{icon}</div>

      {/* Title */}
      <h3 className="feature-title">{title}</h3>

      {/* Tagline, the "so what" hook */}
      {tagline && <p className="feature-tagline">{tagline}</p>}

      {/* Body copy */}
      <p className="feature-description">{description}</p>

      {/* Deliverable chips showing what the client actually receives */}
      {deliverables && deliverables.length > 0 && (
        <div className="feature-deliverables">
          {deliverables.map((d) => (
            <span className="deliverable-chip" key={d}>{d}</span>
          ))}
        </div>
      )}

      {/* Timeline badge */}
      {timeline && (
        <div className="feature-timeline">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
          </svg>
          {timeline}
        </div>
      )}
    </motion.div>
  );
}
