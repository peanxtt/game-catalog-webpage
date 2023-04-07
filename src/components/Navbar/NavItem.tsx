import Link from 'next/link'

import styles from './Nav.module.css'

interface Props {
  href: string,
  text: string,
  active: boolean
}

const NavItem = ({ href, text, active }: Props) => {
  return (
    <Link href={href}>
      <div className={active ? styles.navLinkActive : styles.navLink}>
        <h3> {text} </h3>
      </div>
    </Link>
  )
}

export default NavItem;