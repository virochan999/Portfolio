import React from "react"

const loading = () => {
  return (
    <div className="flex justify-center w-screen h-screen items-center">
      <span className="circle animate-loader"></span>
      <span className="circle animate-loader animation-delay-200"></span>
      <span className="circle animate-loader animation-delay-400"></span>
    </div>
  )
}

export default loading
