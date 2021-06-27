import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <div >
      <h1 className={styles.title}>CRIMINALS LIST</h1>
      <Link href="/criminals">
        <a className={styles.btn}>see criminals list</a>
      </Link>

    </div>
  )
}
