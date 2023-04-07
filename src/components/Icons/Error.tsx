import { memo } from 'react'
import Image from 'next/image'

import styles from './Icons.module.css'

//? Error 404 Image
const Error = () => {
  return (
    <div>
      <Image
        src="/assets/404-icon.png"
        alt="404 Not Found - Error Icon"
        width={588}
        height={537}
        className={styles.themeLogo}
      />
    </div>
  )
}

export default memo(Error)