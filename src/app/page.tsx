import HomeProfile from "@/components/organisms/Profile"
import SkeletonProfile from "@/components/organisms/SkeletonProfile"
import Await from "@/lib/await"
import { Suspense } from "react"
import fetchProfile from "./actions/fetchProfile"
export const dynamic = "force-dynamic"

export default function Home() {
  const promise = fetchProfile()

  return (
    <>
      <Suspense fallback={<SkeletonProfile />}>
        <Await promise={promise}>
          {({ profile }) => <HomeProfile profile={profile} />}
        </Await>
      </Suspense>
    </>
  )
}
