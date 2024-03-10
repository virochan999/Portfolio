"use client"
import { useEffect, useRef } from "react"

const AnimatedTypingText = ({ designation }: { designation: string[] }) => {
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    let arrayIndex = 0
    const changeText = () => {
      if (arrayIndex < designation.length) {
        ref!.current!.innerHTML = designation[arrayIndex]
        arrayIndex += 1
      } else {
        arrayIndex = 0
        ref!.current!.innerHTML = designation[arrayIndex]
        arrayIndex += 1
      }
    }
    changeText()
    ref!.current!.classList.add(
      "before:animate-[animate-text_5s_steps(40)_infinite]"
    )
    const intervalId = setInterval(changeText, 5000)

    return () => clearInterval(intervalId)
  }, [designation])

  return (
    <span
      ref={ref}
      className="font-extrabold inline-block text-[#a53860] relative before:top-0 overflow-hidden
        dark:before:bg-[hsl(222.2_84%_4.9%)] before:bg-white before:absolute before:border-l-4
        before:left-0 before:w-full before:h-full"
    ></span>
  )
}

export default AnimatedTypingText
