import { fetchGraphQL } from "./fetchGraphql"

const fetchProjects = async () => {
  const query = `
    query Query {
      profile {
        projects {
          githubLink
          description
          hostedLink
          id
          image
          name
          technologies
        }
      }
    }
  `
  const { data } = await fetchGraphQL(query)

  return {
    projects: data?.profile[0].projects || null,
  }
}

export default fetchProjects
