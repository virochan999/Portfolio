import { fetchGraphQL } from "./fetchGraphql"

const fetchProfile = async () => {
  const query = `
  query Profile {
    profile {
      id
      name
      email
      image
      resume
      description
      designation
    }
  }`
  const { data } = await fetchGraphQL(query)

  return {
    profile: data?.profile || null,
  }
}

export default fetchProfile
