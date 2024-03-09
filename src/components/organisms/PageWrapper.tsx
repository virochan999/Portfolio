"use client"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"

type PagePropTypes = {
  children: React.ReactNode
  className?: string
}

const PageWrapper = ({ children, className }: PagePropTypes) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageWrapper
