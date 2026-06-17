import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

// Thin top bar that reflects reading progress. Decorative only (aria-hidden);
// it mirrors scroll position rather than animating on its own, so it stays
// appropriate even with reduced motion.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
