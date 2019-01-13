import classNames from 'classnames'
import React, { FC } from 'react'

import { Profile as ProfileSpanish } from './Profile.es'
import { Profile as ProfileEnglish } from './Profile.en'
import { LanguageConsumer } from '../IsSpanishContext'

interface ProfileProps {
  className?: string
}

export const Profile: FC<ProfileProps> = ({ className }) => (
  <LanguageConsumer>
    {isSpanish => {
      if (isSpanish) {
        return <ProfileSpanish />
      } else {
        return <ProfileEnglish />
      }
    }}
  </LanguageConsumer>
)
