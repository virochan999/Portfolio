import React from "react"
import Avatar from "@/app/icon.png"
import Image from "next/image"

const Profile = () => {
  return (
    <div>
      <Image
        src={Avatar}
        alt="image"
      />
    </div>
  )
}

export default Profile
