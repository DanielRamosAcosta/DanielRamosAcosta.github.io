import React, { FC } from 'react'

import { SkillList } from '../../components/SkillList/SkillList'
import { SkillListItem } from '../../components/SkillListItem/SkillListItem'
import { UnderlinedTitle } from '../../components/UnderlinedTitle/UnderlinedTitle'
import { useTranslation } from '../../hooks/useTranslation'

type SkillsProps = {
  className?: string
  skills: string[]
}

export const Skills: FC<SkillsProps> = ({ className, skills }) => {
  const { t } = useTranslation()

  return (
    <section className={className}>
      <UnderlinedTitle>{t.skills.title}</UnderlinedTitle>
      <SkillList title="Professional">
        <SkillListItem>Web Development</SkillListItem>
        <SkillListItem>Software Engineering</SkillListItem>
        <SkillListItem>Code Trainer</SkillListItem>
        <SkillListItem>Teamwork</SkillListItem>
      </SkillList>
      <SkillList title="Technical">
        {skills.map((skill) => (
          <SkillListItem>{skill}</SkillListItem>
        ))}
      </SkillList>
    </section>
  )
}
