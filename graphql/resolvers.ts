import { PrismaClient } from "@prisma/client"

export const resolvers = {
  Query: {
    profile: async (
      _parent: unknown,
      _args: unknown,
      context: { prisma: PrismaClient }
    ) => {
      const { prisma } = context

      const profile = await prisma.profile.findMany()

      return profile
    },
  },

  Profile: {
    experiences: async (
      _parent: unknown,
      _args: unknown,
      context: { prisma: PrismaClient }
    ) => {
      const { prisma } = context

      const profile = await prisma.experience.findMany()

      return profile
    },

    skills: async (
      _parent: { id: string },
      _args: unknown,
      context: { prisma: PrismaClient }
    ) => {
      const { prisma } = context

      const skills = await prisma.skill.findUnique({
        where: { profileId: _parent.id },
        include: {
          professional: {
            orderBy: { name: "asc" },
          },
          technical: {
            orderBy: { order: "asc" },
          },
          other: true,
        },
      })
      return skills
    },

    projects: async (
      _parent: unknown,
      _args: unknown,
      context: { prisma: PrismaClient }
    ) => {
      const { prisma } = context

      const projects = await prisma.project.findMany({
        orderBy: { order: "desc" },
      })

      return projects
    },

    education: async (
      _parent: unknown,
      _args: unknown,
      context: { prisma: PrismaClient }
    ) => {
      const { prisma } = context

      const education = await prisma.education.findMany()

      return education
    },

    contact: async (
      _parent: { id: string },
      _args: unknown,
      context: { prisma: PrismaClient }
    ) => {
      const { prisma } = context

      const contact = await prisma.contact.findUnique({
        where: {
          profileId: _parent.id,
        },
      })

      return contact
    },
  },
}
