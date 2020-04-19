import React, { FC, useState } from 'react'

import { Contact } from '../Contact/Contact'
import { Education } from '../Education/Education'
import { ProfessionalExperience } from '../ProfessionalExperience/ProfessionalExperience'
import { Profile } from '../Profile/Profile'
import { Skills } from '../Skills/Skills'

import { LanguageProvider, isSpanishContextDefaultValue } from '../../context/IsSpanishContext'

import { Header } from '../../components/Header/Header'
import { Sheet } from '../../components/Sheet/Sheet'

import classes from './App.module.css'
import { ButtonHeader } from '../ButtonsHeader/ButtonsHeader'

const App: FC = () => {
  const [language, setLanguage] = useState(isSpanishContextDefaultValue)

  return (
    <LanguageProvider value={language}>
      <div className={classes.container}>
        <Sheet
          className={classes.sheet}
          containerClass={classes.sheetContainer}
          topContainerChildren={() => <ButtonHeader setLanguage={setLanguage} />}
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
              <Profile className={classes.profile} />
              <div className={classes.middleSpacer} />
              <Education className={classes.education} />
              <ProfessionalExperience className={classes.professionalExperience} />
              <Skills className={classes.skills} />
              <Contact className={classes.contact} />
            </div>
          </div>
        </Sheet>
      </div>
    </LanguageProvider>
  )
}

export default App
