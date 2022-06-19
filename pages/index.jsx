import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Beep Boop</h1>
          <h5>01001000 01100001 01101101 01110011</h5>
          <h5>01110100 01100101 01110010 01110011</h5>
          <h1>Boop Beep</h1>

        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Clement Neo J.K.</h1>
            <h6 className={styles.bio}>~Workin' on it now!</h6>
            <Link href="/projects">
              <button className={styles.button}>My Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Get in touch</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>

      
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
