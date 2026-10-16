import { getProfile } from "@/lib/data"

const fetchProfile = async () => ({
  profile: await getProfile(),
})

export default fetchProfile
