import { getProjects } from "@/lib/data"

const fetchProjects = async () => ({
  projects: await getProjects(),
})

export default fetchProjects
