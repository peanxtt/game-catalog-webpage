import { memo } from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Error = () => {
  return (
    <div>
      <Image
        src="/assets/404-icon.png"
        alt="Website Logo"
        width={588}
        height={537}
        className={styles.themeLogo}
      />
    </div>
  )
}

export default memo(Error)