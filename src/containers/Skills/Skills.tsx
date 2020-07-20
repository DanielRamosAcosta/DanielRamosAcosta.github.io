import React, { FC } from 'react'

import { SkillList } from '../../components/SkillList/SkillList'
import { SkillListItem } from '../../components/SkillListItem/SkillListItem'
import { UnderlinedTitle } from '../../components/UnderlinedTitle/UnderlinedTitle'
import { LanguageConsumer } from '../../context/IsSpanishContext'
import { i18n } from '../../i18n'
import { useTranslation } from '../../hooks/useTranslation'

type SkillsProps = {
  className?: string
}

export const Skills: FC<SkillsProps> = ({ className }) => {
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
        <SkillListItem>Javacript</SkillListItem>
        <SkillListItem>Scala</SkillListItem>
        <SkillListItem>Go</SkillListItem>
        <SkillListItem>C#</SkillListItem>
        <SkillListItem>Elixir</SkillListItem>
        <SkillListItem>Functional Programming</SkillListItem>
        <SkillListItem>Docker</SkillListItem>
        <SkillListItem>Kubernetes</SkillListItem>
        <SkillListItem>Tensorflow</SkillListItem>
      </SkillList>
    </section>
  )
}
