type Query = string

export const fetchGraphQL = async (query: Query) => {
  let url =
    "https://portfolio-l0dfnbwgo-virochan-sharmas-projects.vercel.app/api/profile"
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
