import { PrismaClient } from "@prisma/client"
// const prisma = new PrismaClient()
const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma

// const profiles = [
//   {
//     email: "virochan999@gmail.com",
//     image: "profile_image_url",
//     name: "Virochan Sharma",
//     designation: ["Frontend Developer", "Software Engineer"],
//     description:
//       "Experienced Frontend Developer with 2.6+ years of expertise in crafting visually stunning and intuitive web applications. Proficient in HTML, CSS, JavaScript, Typescript, React, Vue, and adept at debugging for seamless functionality. I thrive on transforming design concepts into engaging, responsive, secure and accessible web experiences. Collaborative team player, known for optimizing user journeys and delivering cutting-edge, secure web solutions that exceed client expectations.",
//     skills: {
//       create: [
//         {
//           name: "HTML",
//           proficiency: "Intermediate",
//           level: 3,
//         },
//         {
//           name: "CSS",
//           proficiency: "Intermediate",
//           level: 3,
//         },
//         {
//           name: "JavaScript",
//           proficiency: "Intermediate",
//           level: 3,
//         },
//         {
//           name: "Typescript",
//           proficiency: "Intermediate",
//           level: 3,
//         },
//         {
//           name: "ReactJs",
//           proficiency: "Intermediate",
//           level: 3,
//         },
//         {
//           name: "NextJs",
//           proficiency: "Intermediate",
//           level: 3,
//         },
//         {
//           name: "VueJs",
//           proficiency: "Intermediate",
//           level: 3,
//         },
//         {
//           name: "NodeJs",
//           proficiency: "Expert",
//           level: 2,
//         },
//         {
//           name: "PostgreSQL",
//           proficiency: "Intermediate",
//           level: 3,
//         },
//         {
//           name: "MongoDB",
//           proficiency: "Intermediate",
//           level: 3,
//         },
//         {
//           name: "Prisma",
//           proficiency: "Expert",
//           level: 2,
//         },
//       ],
//     },
//     experience: {
//       create: [
//         {
//           title: "Software Engineer Intern",
//           description:
//             "Completed an internship as a Software Engineer, Gained proﬁciency in frontend technologies, including HTML, CSS, JavaScript, and relevant  frameworks, through practical application.",
//           startDate: new Date("2021-07-01"),
//           endDate: new Date("2021-08-22"),
//           location: "Remote",
//         },
//         {
//           title: "Trainee Software Engineer",
//           description:
//             "Joined the company as a Trainee Software Engineer, eager to learn and contribute to real-world software development projects and participated in hands-on training sessions, gaining practical experience in various aspects of software development, including frontend  technologies. Collaborated closely with senior developers, actively seeking mentorship and guidance to enhance technical skills.\n Trained as a trainee, focusing on skill development and hands-on learning under the guidance of senior developers. \n Gained insights into the software development lifecycle and industry processes.",
//           startDate: new Date("2021-08-23"),
//           endDate: new Date("2022-03-30"),
//           location: "Remote",
//         },
//         {
//           title: "Associate Software Engineer",
//           description:
//             "Played a key role in the initial development and architecture of multiple internal projects.\n Implemented new features, identified and fixed existing bugs in projects like Timesheets, Incentive portal, Jira sync utility and contributed in Magento project.\n Collaborated closely with senior developers and gradually expanded my responsibilities as my skills improved.\n Independently executed key aspects of projects, actively contributing to their successful completion.",
//           startDate: new Date("2022-04-01"),
//           endDate: new Date("2023-03-30"),
//           location: "Remote",
//         },
//         {
//           title: "Software Engineer",
//           description:
//             "Led the development of multiple company projects, implementing systematic code optimization techniques that significantly enhanced web application performance and improved maintainability by reducing redundant code through engineered reusable components which improved overall loading time and responsiveness for the applications by a effective percentage.\n Timesheets Portal: Designed and implemented a user-friendly timesheet management system, enhancing employee productivity and accuracy in time tracking. Responsible for creating new components, features and optimizing the existing code the improve the web app loading time.\n Incentive Portal: Created dynamic UI components and developed functionalities within the portal to enhance user engagement and real-time incentive tracking, resulting in improved overall employee satisfaction and productivity. Built end to end responsive and dynamic forms with validations for tracking user data.\n Leveraged Vue.js, React.js, Redux, VueX, and TypeScript to create interactive and high-performance web applications.\n Independently managed and proactively taking ownership of projects from start to finish, ensuring successful deliver.",
//           startDate: new Date("2023-04-01"),
//           endDate: null,
//           location: "Remote",
//         },
//       ],
//     },
//   },
// ]

// const contactData = {
//   email: "virochan999@gmail.com",
//   phone: "7018405294",
//   address: "Bilaspur, Himachal Pradesh, India",
// }

// async function main() {
//   const { skills, experience, ...profile } = profiles[0]

//   const createdProfile = await prisma.profile.create({
//     data: {
//       ...profile,
//       skills: {
//         create: skills.create,
//       },
//       experience: {
//         create: experience.create,
//       },
//       contact: {
//         create: contactData,
//       },
//     },
//     include: {
//       skills: true,
//       experience: true,
//       contact: true,
//     },
//   })

//   console.log(`Created profile with ID: ${createdProfile.id}`)
//   await prisma.$disconnect()
// }

// main()
//   .catch((e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
