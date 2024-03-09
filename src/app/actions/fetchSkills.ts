import { fetchGraphQL } from "./fetchGraphql"

const fetchSkills = async () => {
  const query = `
    query Query {
      profile {
        skills {
          id
          other {
            id
            level
            name
            logo
            proficiency
          }
          professional {
            id
            level
            name
            logo
            proficiency
          }
          technical {
            id
            level
            name
            logo
            proficiency
          }
        }
      }
    }
  `
  const { data } = await fetchGraphQL(query)

  return {
    skills: data?.profile[0].skills || null,
  }
}

export default fetchSkills
