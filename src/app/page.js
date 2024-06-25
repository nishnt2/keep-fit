'use client';
import styles from './page.module.css';
import bg from '../../public/assets/gym-bg.webp'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logo.webp'
import Clock from './components/Clock/Clock'
export default function Home() {
  return (
  <main className={styles.main} style={{
    backgroundImage: `url(${bg.src})`, 
    backgroundSize: "cover",
  }} >
    <Clock/>
    <Image className={styles.logo} src={logo} alt='logo' quality={100}></Image>
    <div className={styles.container}>
      
      <Link href={'/registration'}>
        <div>
        New Member Registration
        </div>
      </Link>
      <Link href={'/enrollment'}>
        <div>
          Create Plan for Memeber
        </div>
      </Link>

    </div>
    
  </main>);
}
