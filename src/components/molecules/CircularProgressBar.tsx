"use client"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

function CircularProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="h-[4.5rem] w-[4.5rem]">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: "#6366f1",
          textColor: "currentColor",
          trailColor: "rgba(148, 163, 184, 0.25)",
          textSize: "24px",
        })}
      />
    </div>
  )
}
export default CircularProgressBar
