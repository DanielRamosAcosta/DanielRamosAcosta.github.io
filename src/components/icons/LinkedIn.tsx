import React, { FC } from 'react'

import classes from './generic-icon.module.css'

type LinkedInIconProps = {
  size?: number
  color?: string
}

export const LinkedInIcon: FC<LinkedInIconProps> = ({ size, color }) => (
  <svg
    className={classes.container}
    aria-hidden="true"
    width={size}
    viewBox="0 0 448 448"
  >
    <path
      d="M416 0H31.9C14.3 0 0 14.5 0 32.3v383.4C0 433.5 14.3 448 31.9 448H416c17.6 0 32-14.5 32-32.3V32.3C448 14.5 433.6 0 416 0zM135.4 384H69V170.2h66.5V384zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 64 102.2 64c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V280c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V384h-66.4V170.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9z"
      fill={color}
    />
  </svg>
)

LinkedInIcon.defaultProps = {
  color: 'var(--gray-800)',
  size: 20,
}
