import React, { FC, useState } from 'react'

import { Contact } from '../Contact'
import { Education } from '../Education'
import { ProfessionalExperience } from '../ProfessionalExperience'
import { Profile } from '../Profile'
import { Skills } from '../Skills'

import { Header } from '../../components/Header'
import { Sheet } from '../../components/Sheet'

import '../../assets/styles/reset.css'

import '../../assets/fonts/OpenSans/open-sans.css'
import '../../assets/fonts/Raleway/raleway.css'
import '../../assets/styles/global.css'

import classes from './App.module.css'

import {
  LanguageProvider,
  isSpanishContextDefaultValue,
  Language,
} from '../IsSpanishContext'
import { TranslationButton } from '../../components/TranslationButton'
import { PrintButton } from '../../components/PrintButton'

const App: FC<{}> = () => {
  const [language, setLanguage] = useState(isSpanishContextDefaultValue)

  return (
    <LanguageProvider value={language}>
      <div className={classes.container}>
        <Sheet
          className={classes.sheet}
          containerClass={classes.sheetContainer}
          topContainerChildren={() => (
            <div className={classes.sheetTopContainer}>
              <TranslationButton
                onClick={() =>
                  setLanguage(
                    language === Language.Spanish
                      ? Language.English
                      : Language.Spanish,
                  )
                }
                className={classes.hideWhenPrinting}
              />
              <PrintButton
                onClick={() => window.print()}
                className={classes.hideWhenPrinting}
              />
            </div>
          )}
        >
          <Header
            personName="Daniel Ramos"
            role="Full-stack Developer"
            className={classes.header}
          />
          <div>
            <div className={classes.hspacer} />
            <div className={classes.curriculumContainer}>
              <div className={classes.vspacer} />
              <Profile className={classes.profile} />
              <div className={classes.middleSpacer} />
              <Education className={classes.education} />
              <ProfessionalExperience
                className={classes.professionalExperience}
              />
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
