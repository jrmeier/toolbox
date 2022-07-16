import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RandomStringGenerator from './Toolbox/RandomStringGenerator'
import PassphraseGenerator from './Toolbox/PassphraseGenerator'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tools for Devs</title>
        <meta name="description" content="Little tools and scripts for JavaScript and Python devs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <RandomStringGenerator />
        <PassphraseGenerator />
      </main>
    </div>
  )
}
