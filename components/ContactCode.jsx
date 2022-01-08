import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'approxneo.me',
    href: 'https://www.approxneo.me',
  },
  {
    social: 'email',
    link: 'clementnjk@gmail.com',
    href: 'mailto:clementnjk@gmail.com',
  },
  {
    social: 'github',
    link: 'approxneo',
    href: 'https://github.com/approxneo',
  },
  {
    social: 'linkedin',
    link: 'clement-neo-0015',
    href: 'https://www.linkedin.com/in/clement-neo-0015',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
