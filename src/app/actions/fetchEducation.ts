import { fetchGraphQL } from "./fetchGraphql"

const fetchEducation = async () => {
  const query = `
    query Query {
      profile {
        education {
          college
          description
          endDate
          id
          name
          startDate
        }
      }
    }
  `
  const { data } = await fetchGraphQL(query)

  return {
    education: data?.profile[0].education || null,
  }
}

export default fetchEducation
