import Image from 'next/image';
import styles from '../styles/About.module.css';


const AboutPage = () => {
  return (
    <>    
      <h3>A Little Bit About Me</h3>
      <div>
        <div className={styles.container}>
          <div className={styles.card}>
            <Image src="/me.png" width="350%" height="400%"/>
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
            <h1>Overflow, Technology club</h1>
            <h3>Head of Tech</h3>
          </div>
          <div>
            April 2021 - April 2022
          </div>
        </div>
        <p>
          As the Head of Tech, I faciliate the backend of our activities. 
           From Coding Bootcamps to Competitive Programming Competitions, 
           I play an active part in ensuring that the tech side of things work out.
        </p>
        <br>
        </br>
        <p>
          Certain events we hold frequently are weekly workshops, where we teach our members about a certain technology. Other times, we also hold whole bootcamps over the holidays, going in-depth into things like Software Development and Artificial Intelligence
        </p>
        <br></br>
        <p>
          
        </p>
      </div>

      <div className={styles.card} >
        <div className={styles.container}>
          <div>
            <h1>Nullsec, Cybersecurity club</h1>
            <h3>Tech lead</h3>
          </div>
          <div>
            April 2021 - April 2022
          </div>
        </div>
        <p>
          Within NullSec, I am one of the Technology Leads, creating and teaching workshop materials, and also setting up the technology aspect of many of our events, such as sysadmin and docker management. 
        </p>
        <br></br>
        <p>
          Some of the events we have held include:
        </p>
        <br></br>
        <p>
          - Hack N' Flag
        </p>
        <p>
          HNF is part of the Youth Cyber Exploratory Programme (YCEP). In 2021, my batch of excos conducted 2 days of workshops for the participants, followed by a full day CTF competition. All materials were created and vetted by us.
        </p>
        <br></br>
        <p>
          - Cybersecurity Outreach Programmes
        </p>
        <p>
          Now and then, our school invites Secondary school students to take a tour of school amenities and to understand the courses we have better. Whenever there are students interested in Cybersec, NullSec would take them round the ICT block to get a feel for the course.
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
