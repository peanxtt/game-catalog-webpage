import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import Layout from '@/src/components/Layout'
import Loader from '@/src/components/Icons/Loader'

import type { NextPage } from 'next'
import{ accountSchema, type account } from '@/src/types/models'

import styles from './Login.module.css'

const errorMessage = 'Invalid Username or Password, Please try again.';

//? Mock Login Page
const Login: NextPage = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [credential, setCredential] = useState<account>({
    username: '',
    password: ''
  });

  const handleLogin = async() => {
    setSubmitting(true);

    //? Mock API auth scenario
    await new Promise(resolve => setTimeout(resolve, 2000));

    const validation = accountSchema.safeParse(credential);
    if(validation.success) {
      console.log('Login success, redirect to main page.');
      setSubmitting(false);
      router.push('/');
    } else {
      console.log('invalid username or password, please try again');
    }

    setSubmitting(false);
  }

  return (
    <div className={styles.container}>
      <Layout title={"Login or Register | Team 17 Game Store | Select and Preview your Favourite Game !"}>
        <div className={styles.center}>
          <h1>Login</h1>
          <div className={styles.form}>
            <div className={styles.formGroup}>
                <label>Username</label>
                <input name="username" type="text" placeholder={'Username'} required />
            </div>
            <div className={styles.formGroup}>
                <label>Password</label>
                <input name="password" type="password" placeholder={'Password'} required />
            </div>
            <div className={styles.formButton}>
              <button disabled={submitting} onClick={handleLogin}>
                {
                  submitting ? (<Loader />) : ('Login')
                }
              </button>
              <Link href={'/register'}>
                <div className={styles.hoverEffect}>
                  Not a member? Register today
                </div>
              </Link>
              <div className={error ? styles.feedbackActive : styles.feedback}>
                {errorMessage}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
 )
}

export default Login;
