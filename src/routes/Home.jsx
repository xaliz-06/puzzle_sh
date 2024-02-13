import Button from '../components/ui/Button';

import logo from '../assets/images/techroyal_logo.png';
import cover_img from '../assets/images/cover_img.jpg';
import styles from './route-styles/Home.module.css';

import Hr from '../components/ui/Hr';

import QuoteCard from '../components/ui/QuoteCard';
import Guide from '../components/guide/Guide';
import Excerpt from '../components/excerpt/Excerpt';
import Hint from '../components/ui/Hint';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    const startSection = document.getElementById('start_section');
    console.log(startSection);
    startSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNext = () => {
    navigate('discover');
  };

  return (
    <>
      <div className={styles.landing_container}>
        <div className={styles.container_section}>
          <img src={logo} className={styles.logo} alt="techroyal_logo" />
        </div>
        <div className={styles.container_section}>
          <div className={styles.vertical_line}></div>
        </div>
        <div className={styles.container_section}>
          <p className={styles.landing_desc}>UNLEASH YOUR INNER</p>
          <h1>SHERLOCK</h1>
          <div className={styles.btn_container}>
            <Button handleClick={handleStart}>START</Button>
          </div>
        </div>
      </div>
      <Hr />
      <div className={styles.quote_container}>
        <div className={styles.img_container}>
          <img src={cover_img} className={styles.cover_img} alt="cover_img" />
          <p className={styles.img_caption}>
            <i>
              &quot;Holmes gave me a sketch of the events&quot;, The Adventure
              of Silver Blaze, Original Illustration by{' '}
              <span className={styles.special_text}>Sidney</span> Paget
            </i>
          </p>
        </div>
        <QuoteCard
          text={'The game is afoot.'}
          credit={'Sir Arthur Conan Doyle, Adventure of the Abbey Grange'}
        />
      </div>
      <Hr />
      <section className={styles.guidelines_section}>
        <Guide />
      </section>
      <section className={styles.excerpt_section}>
        <Excerpt />
      </section>
      <section className={styles.first_clue} id="start_section">
        <div className={styles.clue_container}>
          <h2>Are You Ready?</h2>
          <h5>
            Here&apos;s your first clue:{' '}
            <span className={styles.special}>szsasbhofm</span>
          </h5>
          <div className={styles.clue_message}>
            <p className={styles.clue_text}>
              The clue is encrypted by a specific{' '}
              <span className={styles.special}>CIPHER</span>. From the above
              excerpt, you will get a{' '}
              <span className={styles.special}>LINK</span> from where you can
              learn about the cipher. Once you decrypt the ciphertext, the
              plaintext will be your{' '}
              <span className={styles.special}>1st Flag [1 of 5]</span>. Read
              the text carefully and{' '}
              <span className={styles.special}>INSPECT</span>!
            </p>
          </div>
        </div>
        <Hint>Check the year of publishing for the key.</Hint>
      </section>
      <section className={styles.next_section}>
        <div className={styles.next_container}>
          <h4>Have you figured it out? There&apos;s more...</h4>
          <Button addClass="small" handleClick={handleNext}>
            ON TO THE NEXT!
          </Button>
        </div>
      </section>
      <Hr />
    </>
  );
};

export default Home;
