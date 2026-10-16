import { getSkills } from "@/lib/data"

const fetchSkills = async () => ({
  skills: await getSkills(),
})

export default fetchSkills
