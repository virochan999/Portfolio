import { ApolloServer } from "@apollo/server"
import { typeDefs } from "../../../../graphql/schema"
import { resolvers } from "../../../../graphql/resolvers"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import prisma from "../../../../prisma/seed"

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
})

export const GET = handler
export const POST = handler
