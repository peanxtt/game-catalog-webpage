import { memo } from 'react'
import Image from 'next/image'

import styles from './Icons.module.css'

//? Steam Logo
const Steam = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/assets/steamlogo.png"
        alt="Video Game Platform - Steam Icon"
        width={200}
        height={200}
      />
    </div>
  )
}

export default memo(Steam)