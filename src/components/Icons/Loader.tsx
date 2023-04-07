import { memo } from 'react'

import styles from './Icons.module.css'

//? Loader - Circle div with spinning animation
const Loader = () => {
  return(
    <div className={styles.loader}></div>
  )
}

export default memo(Loader);