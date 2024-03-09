import { GraphQLDateTime } from "graphql-scalars"

export const typeDefs = `#graphql
  scalar DateTime

  type Profile {
    id: ID!
    email: String!
    name: String!
    image: String
    resume: String
    designation: [String]
    description: String
    skills: Skill
    projects: [Project!]!
    experiences: [Experience!]!
    education: [Education!]!
    contact: Contact
  }

  type Project {
    id: ID!
    name: String!
    description: String!
    image: String
    hostedLink: String
    githubLink: String
    technologies: [String!]
  }

  type Skill {
    id: ID!
    professional: [Professional!]!
    technical: [Technical!]!
    other: [Other!]!
  }

  type Professional {
    id: ID!
    name: String!
    proficiency: String!
    logo: String
    level: Int!
  }

  type Technical {
    id: ID!
    name: String!
    proficiency: String!
    logo: String
    level: Int!
  }

  type Other {
    id: ID!
    name: String!
    proficiency: String!
    logo: String
    level: Int!
  }

  type Experience {
    id: ID!
    title: String!
    company: String!
    description: String!
    startDate: String!
    endDate: String!
  }

  type Education {
    id: ID!
    name: String!
    college: String!
    description: String!
    startDate: String!
    endDate: String!
  }

  type Contact {
    id: ID!
    email: String!
    phone: String
    address: String
  }

  type Query {
    profile: [Profile]
  }
`
