type Query = string

export const fetchGraphQL = async (query: Query) => {
  const response = await fetch(process.env.PROFILE_API_URL as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
    next: { revalidate: 0 },
  })

  const data = await response.json()

  return data
}
