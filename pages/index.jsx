import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h2>If only</h2>
          <h2>I have</h2>
          <h2>opposable</h2>
          <h2>thumbs</h2>
          <h2>.</h2>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Clement Neo</h1>
            <h6 className={styles.bio}>Workin' on it now!</h6>
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
