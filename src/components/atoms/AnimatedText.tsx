"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

// Rotates through the designations with a short fade/slide.
const AnimatedTypingText = ({ designation }: { designation: string[] }) => {
  const [index, setIndex] = useState(0)
  const firstRender = index === 0

  useEffect(() => {
    if (designation.length < 2) return
    const id = setInterval(
      () => setIndex((i) => (i + 1) % designation.length),
      2800
    )
    return () => clearInterval(id)
  }, [designation])

  if (designation.length === 0) return null

  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={designation[index]}
          initial={firstRender ? false : { y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-gradient font-extrabold whitespace-nowrap"
        >
          {designation[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default AnimatedTypingText
