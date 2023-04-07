import { memo } from 'react'

import styles from './Icons.module.css'

const Loader = () => {
  return(
    <div className={styles.loader}></div>
  )
}

export default memo(Loader);