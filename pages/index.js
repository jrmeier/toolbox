import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RandomStringGenerator from './Toolbox/RandomStringGenerator'
import PassphraseGenerator from './Toolbox/PassphraseGenerator'
import DateTimeMachine from './Toolbox/DateTimeMachine'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toolbox</title>
        <meta name="description" content="Little tools and scripts for JavaScript and Python devs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        Toolbox
      </h1>
      <main className={styles.main}>
        <RandomStringGenerator />
        <PassphraseGenerator />
        <DateTimeMachine />
      </main>
    </div>
  )
}
