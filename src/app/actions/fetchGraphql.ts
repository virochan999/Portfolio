type Query = string

export const fetchGraphQL = async (query: Query) => {
  const response = await fetch(
    "https://portfolio-l0dfnbwgo-virochan-sharmas-projects.vercel.app/api/profile",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
      next: { revalidate: 0 },
    }
  )
  console.log(response)
  const data = await response.json()

  return data
}
