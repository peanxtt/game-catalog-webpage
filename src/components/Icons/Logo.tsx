import { memo } from 'react'
import Image from 'next/image'

import styles from './Icons.module.css'

//? Website Main Logo
const Logo = () => {
  return (
    <div>
      <Image
        src="/assets/logo.png"
        alt="Peanut Game Store - Website Logo"
        width={100}
        height={100}
        className={styles.themeLogo}
        priority
      />
    </div>
  )
}

export default memo(Logo)