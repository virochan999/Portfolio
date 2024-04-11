"use client"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

function CircularProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="w-[5rem] h-[5rem]">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
      />
    </div>
  )
}
export default CircularProgressBar
