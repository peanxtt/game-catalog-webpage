import { ReactNode } from 'react'
import Link from 'next/link';

import Meta from '../Meta';
import Logo from '../Icons/Logo';

import styles from './Layout.module.css'

interface Props {
  title: string
  children: ReactNode
}

const Layout = ({ title, children }: Props) => {
  return (
    <div className={styles.container}>
      <Meta
      title={title}
      keywords={'Best, Games, Catalogs, Website'}
      description={'Hottest and Best Selling Games all around the world!'}
      ogTitle={'Best Selling Games | Every Latest Game You Need To Know!'}
      ogType={'website'}
      ogDescription={'Get to know some of the best games available in the market'}
      />
      <header>
        <Link href="/">
          <Logo />
        </Link>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout;