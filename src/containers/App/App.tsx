import * as React from 'react'

import { Contact } from '../Contact'
import { Education } from '../Education'
import { ProfessionalExperience } from '../ProfessionalExperience'
import { Profile } from '../Profile'
import { Skills } from '../Skills'

import { Header } from '../../components/Header'
import { Sheet } from '../../components/Sheet'

import '../../assets/styles/reset.css'

import '../../assets/fonts/Open_Sans/open-sans.css'
import '../../assets/fonts/Raleway/raleway.css'
import '../../assets/styles/global.css'
import styles from './App.css'

class App extends React.Component {
  public render() {
    return (
      <div className={styles.container}>
        <Sheet className={styles.sheet} containerClass={styles.sheetContainer}>
          <Header
            personName="Daniel Ramos"
            role="Full-stack Developer"
            className={styles.header}
          />
          <div>
            <div className={styles.hspacer} />
            <div className={styles.curriculumContainer}>
              <div className={styles.vspacer} />
              <Contact className={styles.contact} />
              <Profile className={styles.profile} />
              <div className={styles.middleSpacer} />
              <Education className={styles.education} />
              <ProfessionalExperience
                className={styles.professionalExperience}
              />
              <Skills className={styles.skills} />
            </div>
          </div>
        </Sheet>
      </div>
    )
  }
}

export default App
