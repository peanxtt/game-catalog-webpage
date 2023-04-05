import { memo } from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Logo = () => {
  return (
    <div>
      <Image
        src="/assets/team17logo.png"
        alt="Website Logo"
        width={107}
        height={72}
        className={styles.themeLogo}
      />
      {/* component="i"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: 'url("/assets/logo.png")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: 106,
        height: 72,
      }} */}
    </div>
  )
}

export default memo(Logo)