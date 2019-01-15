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

import styles from './App.module.css'

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
      <div className={styles.container}>
        <Sheet
          className={styles.sheet}
          containerClass={styles.sheetContainer}
          topContainerChildren={() => (
            <div className={styles.sheetTopContainer}>
              <TranslationButton
                onClick={() =>
                  setLanguage(
                    language === Language.Spanish
                      ? Language.English
                      : Language.Spanish,
                  )
                }
                className={styles.hideWhenPrinting}
              />
              <PrintButton
                onClick={() => window.print()}
                className={styles.hideWhenPrinting}
              />
            </div>
          )}
        >
          <Header
            personName="Daniel Ramos"
            role="Full-stack Developer"
            className={styles.header}
          />
          <div>
            <div className={styles.hspacer} />
            <div className={styles.curriculumContainer}>
              <div className={styles.vspacer} />
              <Profile className={styles.profile} />
              <div className={styles.middleSpacer} />
              <Education className={styles.education} />
              <ProfessionalExperience
                className={styles.professionalExperience}
              />
              <Skills className={styles.skills} />
              <Contact className={styles.contact} />
            </div>
          </div>
        </Sheet>
      </div>
    </LanguageProvider>
  )
}

export default App
