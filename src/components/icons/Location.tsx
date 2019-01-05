import React, { FC } from 'react'

import styles from './generic-icon.module.css'

interface LocationIconProps {
  size?: number
  color?: string
}

export const LocationIcon: FC<LocationIconProps> = ({ size, color }) => (
  <div className={styles.icon}>
    <svg width={size} aria-hidden="true" viewBox="0 0 512 512">
      <path
        fill={color}
        d="M236.268 501.67C90.97 291.031 64 269.413 64 192 64 85.961 149.961 0 256 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM256 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
      />
    </svg>
  </div>
)

LocationIcon.defaultProps = {
  color: 'var(--gray)',
  size: 20,
}
