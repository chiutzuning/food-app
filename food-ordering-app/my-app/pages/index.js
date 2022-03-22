import Head from 'next/head'
import Image from 'next/image'
import Featured from "../components/Featured";
import FoodList from "../components/FoodList";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hirugohan</title>
        <meta name="description" content="best japanese restaurant in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured/>
      <FoodList/>
    </div>
  );
}
