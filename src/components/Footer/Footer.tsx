import Link from 'next/link'

import styles from './Footer.module.css'

//? Responsive footer
const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <h3> Peanut Game Catalog </h3>
          <p>
            Peanut Game Catalog is a game catalog where you will find tons of great games available on the internet.
            This website is operated and maintained by Peanut Game Inc., a Registered Online Store.
          </p>
          <p>
            Game Information provided on this site is just for display purposes only.
          </p>
        </div>
        <div className={styles.footerBottom}>
          <p>Copyright &copy;2023 <Link href={'/'}>Peanut Game Catalog</Link>  </p>
        </div>
        <div className={styles.footerMenu}>
          <ul>
              <li><Link href={'/'}>Home</Link></li>
              <li><Link href={'/about'}>About</Link></li>
              <li><Link href={'/login'}>Login / Register</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;