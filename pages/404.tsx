import Link from 'next/link';

import Error from '@/src/components/Icons/Error';
import Layout from '@/src/components/Layout';

import styles from '@/styles/Home.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <Layout title={"Welcome to Team 17 Game Store | Select and Preview your Favourite Game !"}>
        <div className={styles.notFound}>
          <Error />
          <div>
            <h1>Oh no</h1>
            <h2>The page cannot be found...</h2>
            <div className={styles.hoverEffect}><Link href={'/'}><p>Go back to Game Catalog</p></Link></div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default NotFoundPage;