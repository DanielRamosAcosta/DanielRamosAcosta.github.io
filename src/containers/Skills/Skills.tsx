import React, { FC } from 'react'

import { SkillList } from '../../components/SkillList/SkillList'
import { SkillListItem } from '../../components/SkillListItem/SkillListItem'
import { UnderlinedTitle } from '../../components/UnderlinedTitle/UnderlinedTitle'
import { useTranslation } from '../../hooks/useTranslation'

type SkillsProps = {
  className?: string
  technicalSkills: string[]
  professionalSkills: string[]
}

export const Skills: FC<SkillsProps> = ({ className, professionalSkills, technicalSkills }) => {
  const { t } = useTranslation()

  return (
    <section className={className}>
      <UnderlinedTitle>{t.skills.title}</UnderlinedTitle>
      <SkillList title="Professional">
        {professionalSkills.map((skill => (
          <SkillListItem key={skill}>{skill}</SkillListItem>
        )))}
      </SkillList>
      <SkillList title="Technical">
        {technicalSkills.map((skill) => (
          <SkillListItem key={skill}>{skill}</SkillListItem>
        ))}
      </SkillList>
    </section>
  )
}
