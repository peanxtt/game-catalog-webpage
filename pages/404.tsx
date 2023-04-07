import Link from 'next/link';

import Error from '@/src/components/Icons/Error';
import Layout from '@/src/components/Layout';

import styles from '@/styles/Home.module.css'

//? Mock 404 Page
const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <Layout title={"404 | Error | Select and Preview your Favourite Game !"}>
        <div className={styles.notFound}>
          <Error />
          <div>
            <h1>Oops...</h1>
            <h2>Page Not Found</h2>
            <h2>We Will Be Back</h2>
            <div className={styles.hoverEffect}><Link href={'/'}><p>Go back to Game Catalog</p></Link></div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default NotFoundPage;