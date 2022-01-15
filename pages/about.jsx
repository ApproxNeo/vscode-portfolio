import Image from 'next/image';
import styles from '../styles/About.module.css';


const AboutPage = () => {
  return (
    <>    
      <h3>A Little Bit About Me</h3>
      <div>
        <div className={styles.container}>
          <div className={styles.card}>
            <Image src="/me.png" width="150" height="350"/>
            <div className={styles.content}>
              <i>Me with Maybelline!</i>
            </div>
          </div>
          <div className={styles.c}>
            <h1>Clement Neo</h1>
            <br></br>
            <hr></hr>
            <br></br>
            <h4>A dedicated technophile pursuing Cybersecurity</h4>
          </div>
          <div className={styles.c}>
          </div>
          <div className={styles.c}>
          </div>
          <div className={styles.c}>
          </div>
          
        </div>
      </div>

      <h1>Experiences / Roles</h1>
      <hr></hr>
      <div className={styles.card} >
        <div className={styles.container}>
          <div>
            <h1>Overflow</h1>
            <h3>Head of Tech</h3>
          </div>
          <div>
            April 2021 - April 2022
          </div>
        </div>
        <p>As the Head of Tech, I faciliate the backend of our activities. 
           From Coding Bootcamps to Competitive Programming Competition, 
           I play an active part in
        </p>
       
      </div>

      <div className={styles.card} >
        <div className={styles.container}>
          <div>
            <h1>Nullsec</h1>
            <h3>Tech lead</h3>
          </div>
          <div>
            April 2021 - April 2022
          </div>
        </div>
        <p>
          placeholder
        </p>
       
      </div>

      <div className={styles.card} >
        <div className={styles.container}>
          <div>
            <h1>IMDA</h1>
            <h3>SG:D Scholar</h3>
          </div>
          <div>
            April 2020 - April 2023
          </div>
        </div>
        <p>
          placeholder
        </p>
       
      </div>
      
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
