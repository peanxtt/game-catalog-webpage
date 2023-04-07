import Link from 'next/link';
import { useState, ChangeEvent } from 'react';

import Logo from '../Icons/Logo';
import NavItem from './NavItem';

import styles from './Nav.module.css'

const navItems = [
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Login / Register',
    href: '/login'
  }
];

const Navbar = ({ ...props }) => {
  const [navActive, setNavActive] = useState(false);
  const [currActive, setCurrActive] = useState(-1);

  const handleToggleBar = () => {
    setNavActive(!navActive);
  }

  const handleReset = () => {
    setCurrActive(0);
  }

  return (
    <header>
      <nav className={styles.nav}>
        <Link href={'/'} onClick={handleReset}>
          <Logo />
        </Link>

        <div className={styles.toggleBar} onClick={handleToggleBar}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={navActive ? styles.navListActive : styles.navList}>
        <div className={styles.searchBar}>
            <input type='text' {...props} />
        </div>
          {
            navItems.map((item, curr) => {
              return (
                <div
                  key={item.text}
                  onClick={() => {
                    setCurrActive(curr);
                    setNavActive(false);
                  }}
                >
                  <NavItem {...item} active={currActive === curr} />
                </div>
              )
            })
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
