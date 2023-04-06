import Link from 'next/link'
import { useState, ChangeEvent } from 'react'

import Layout from '@/src/components/Layout'
import Loader from '@/src/components/Icons/Loader'

import type { NextPage } from 'next'
import  type{ account } from '@/src/types/models'
import { accountSchema } from '@/src/types/models'

import styles from './Login.module.css'

const errorMessage = 'Invalid Username or Password, Please try again.';

//? Mock Login Page
const Login: NextPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [credential, setCredential] = useState<account>({
    username: '',
    password: ''
  });

  const handleCredential = (event: ChangeEvent<HTMLInputElement>) => {
    setCredential({
      ...credential,
      [event.target.name]: event.target.value.toLowerCase()
    })
  }

  const handleLogin = async() => {
    setSubmitting(true);
    const inputGuard = accountSchema.safeParse(credential);
    if(!inputGuard.success) setError(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitting(false);
  }

  return (
    <div className={styles.container}>
      <Layout title={"Login or Register Today | Team 17 Game Store | Select and Preview your Favourite Game !"}>
        <div className={styles.center}>
          <h1>Login</h1>
          <div className={styles.form}>
              <div className={styles.formGroup}>
                  <label>Username</label>
                  <input name="username" type="text" value={credential.username} onChange={handleCredential} placeholder={'Username'} required />
              </div>
              <div className={styles.formGroup}>
                  <label>Password</label>
                  <input name="password" type="password" value={credential.password} onChange={handleCredential} placeholder={'Password'} required />
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
