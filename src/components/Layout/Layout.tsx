import { ReactNode, useState, useEffect } from 'react'

import Meta from '../Meta';

import styles from './Layout.module.css'

interface Props {
  title: string
  children: ReactNode
}

const Layout = ({ title, children }: Props) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div>
      <Meta
      title={title}
      keywords={'Best, Latest, Popular, Games, Catalogs, Website, Webpage'}
      description={'Hottest and Best Selling Games all around the world!'}
      ogTitle={'Best Selling Games | Every Latest Game You Need To Know!'}
      ogType={'website'}
      ogDescription={'Get to know some of the best games available in the market'}
      />
      <div
        className={`${styles.content} ${styles[transitionStage]}`}
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
      >
        <main className={styles.main}>
          {displayChildren}
        </main>
      </div>
    </div>
  )
}

export default Layout;