import React, { FC } from 'react'

import { SkillList } from '../../components/SkillList'
import { SkillListItem } from '../../components/SkillListItem'
import { UnderlinedTitle } from '../../components/UnderlinedTitle'
import { LanguageConsumer } from '../IsSpanishContext'
import { i18n } from '../../i18n'

interface SkillsProps {
  className?: string
}

const englishLang = {
  skills: 'Skills',
}

const spanishLang: typeof englishLang = {
  skills: 'Habilidades',
}

export const Skills: FC<SkillsProps> = ({ className }) => (
  <LanguageConsumer>
    {language => {
      const getLabel = i18n(language, { englishLang, spanishLang })

      return (
        <section className={className}>
          <UnderlinedTitle>{getLabel('skills')}</UnderlinedTitle>
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
            <SkillListItem>Elixir</SkillListItem>
            <SkillListItem>Functional Programming</SkillListItem>
            <SkillListItem>Docker</SkillListItem>
            <SkillListItem>Kubernetes</SkillListItem>
            <SkillListItem>Tensorflow</SkillListItem>
          </SkillList>
        </section>
      )
    }}
  </LanguageConsumer>
)
