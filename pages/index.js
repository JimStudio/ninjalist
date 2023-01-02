import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/footer'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
         <title>Ninja List | Home</title>
         <meta name='keywords' content='ninjas'/>
      </Head>
    <div>
       <h1 className={styles.title}>Home Page</h1>
       <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
       <Link href="/ninjas" className={styles.btn}> See Ninja Listing </Link>
    </div>
    </>
  )
}
