export type SkillTypes = {
  id: string
  other: Skill[]
  professional: Skill[]
  technical: Skill[]
}

export type Skill = {
  id: string
  level: number
  name: string
  proficiency: string
  logo: string
}
