import classNames from 'classnames'
import React, { SFC } from 'react'

import { SkillList } from '../../components/SkillList'
import { SkillListItem } from '../../components/SkillListItem'
import { UnderlinedTitle } from '../../components/UnderlinedTitle'

interface SkillsProps {
  className?: string
}

export const Skills: SFC<SkillsProps> = ({ className }) => (
  <section className={className}>
    <UnderlinedTitle>Skills</UnderlinedTitle>
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
