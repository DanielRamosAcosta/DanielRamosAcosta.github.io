import React, { FC, useEffect, useState } from 'react'
import useSWR from 'swr'
import { Contact } from '../Contact/Contact'
import { Education } from '../Education/Education'
import { ProfessionalExperience } from '../ProfessionalExperience/ProfessionalExperience'
import { Profile } from '../Profile/Profile'
import { Skills } from '../Skills/Skills'
import { Header } from '../../components/Header/Header'
import { Sheet } from '../../components/Sheet/Sheet'
import { ButtonHeader } from '../ButtonsHeader/ButtonsHeader'
import { JobPhase } from '../../models/JobPhase'
import { PersonalData } from '../../models/PersonalData'
import { useTranslation } from '../../hooks/useTranslation'
import { CreateFetchPersonalData } from '../../repository/http/CreateFetchPersonalData'
import classes from './App.module.css'
import { Language } from '../../context/IsSpanishContext'
import { usePersonalData } from '../../hooks/queries/usePersonalData'

type AppProps = {
  initialJobPhases: JobPhase[]
  initialPersonalData: PersonalData
}

export const App: FC<AppProps> = ({ initialJobPhases, initialPersonalData }) => {
  const { language } = useTranslation()
  const { personalData } = usePersonalData(initialPersonalData, language)

  return (
    <div className={classes.container}>
      <Sheet
        className={classes.sheet}
        containerClass={classes.sheetContainer}
        topContainerChildren={() => <ButtonHeader />}
      >
        <Header
          personName="Daniel Ramos"
          role="Lead Software Developer"
          className={classes.header}
        />
        <div>
          <div className={classes.hspacer} />
          <div className={classes.curriculumContainer}>
            <div className={classes.vspacer} />
            <Profile className={classes.profile} profile={personalData.profile} />
            <div className={classes.middleSpacer} />
            <Education className={classes.education} />
            <ProfessionalExperience
              className={classes.professionalExperience}
              initialJobPhases={initialJobPhases}
            />
            <Skills
              className={classes.skills}
              technicalSkills={personalData.technicalSkills}
              professionalSkills={personalData.professionalSkills}
            />
            <Contact className={classes.contact} />
          </div>
        </div>
      </Sheet>
    </div>
  )
}
