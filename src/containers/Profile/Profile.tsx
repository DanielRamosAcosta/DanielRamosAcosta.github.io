import React, { FC } from 'react'
import { UnderlinedTitle } from '../../components/UnderlinedTitle/UnderlinedTitle'
import { useTranslation } from '../../hooks/useTranslation'
import { Formatted } from '../../components/Formatted/Formatted'

type ProfileProps = {
  className?: string
  profile: string
}

export const Profile: FC<ProfileProps> = ({ className, profile }) => {
  const { t } = useTranslation()

  return (
    <section className={className}>
      <UnderlinedTitle>{t.profile}</UnderlinedTitle>
      <Formatted html={profile} />
    </section>
  )
}
