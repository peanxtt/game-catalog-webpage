import { memo } from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Logo = () => {
  return (
    <div>
      <Image
        src="/assets/team17.png"
        alt="Website Logo"
        width={200}
        height={53}
        className={styles.themeLogo}
        priority
      />
    </div>
  )
}

export default memo(Logo)