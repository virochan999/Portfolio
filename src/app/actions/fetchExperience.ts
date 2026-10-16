import { getExperiences } from "@/lib/data"

const fetchExperiences = async () => ({
  experiences: await getExperiences(),
})

export default fetchExperiences
