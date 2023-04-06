import { memo } from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Steam = () => {
  return (
    <div>
      <Image
        src="/assets/steamlogo.png"
        alt="Steam Logo"
        width={200}
        height={200}
        className={styles.themeLogo}
      />
    </div>
  )
}

export default memo(Steam)