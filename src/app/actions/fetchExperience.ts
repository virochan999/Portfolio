import { fetchGraphQL } from "./fetchGraphql"

const fetchExperiences = async () => {
  const query = `
  query Query {
    profile {
      experiences {
        description
        endDate
        id
        startDate
        title
        company
      }
    }
  }
  `
  const { data } = await fetchGraphQL(query)

  return {
    experiences: data?.profile[0].experiences || null,
  }
}

export default fetchExperiences
