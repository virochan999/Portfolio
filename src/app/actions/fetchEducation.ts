import { getEducation } from "@/lib/data"

const fetchEducation = async () => ({
  education: await getEducation(),
})

export default fetchEducation
