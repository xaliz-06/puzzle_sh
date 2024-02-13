import Card from '../components/ui/Card';
import Hr from '../components/ui/Hr';
import QuoteCard from '../components/ui/QuoteCard';

import cipher_img from '../assets/images/cipher_3.png';

import styles from './route-styles/Decipher.module.css';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import Hint from '../components/ui/Hint';

const Decipher = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/decode');
  };

  return (
    <div className={styles.decipher_page}>
      <div className={styles.decipher_container}>
        <Card>
          <QuoteCard
            text={
              'Education never ends, Watson. It is a series of lessons, with the greatest for the last.'
            }
            credit={
              'Sherlock Holmes in "The Adventure of the Red Circle (His Last Bow)"'
            }
          />
          <Hr />
          <div className={styles.clue_details}>
            <h3>Gear up to find the next flag</h3>
            <h5>
              The following image is a{' '}
              <span className={styles.special}>CIPHER</span>. The cipher has
              already been referenced in the home page. Go through all the
              details and materials provided, research everything and make sure
              you aren&apos;t missing something. The Flag is{' '}
              <span className={styles.special}>NOT CASE SENSITIVE</span>. Crack
              the code to reveal the hidden message and you will find the{' '}
              <span className={styles.special}>3rd Flag [3 of 5]</span>. Good
              luck, detective!
            </h5>
            <img
              src={cipher_img}
              className={styles.cipher_img}
              alt="cipher_img"
            />
            <div className={styles.hint_box}>
              <Hint>Read and research about the excerpt</Hint>
            </div>
          </div>
        </Card>
      </div>
      <section className={styles.next_section}>
        <div className={styles.next_container}>
          <h4>Have you figured it out? There&apos;s more...</h4>
          <Button addClass="small" handleClick={handleNext}>
            ON TO THE NEXT!
          </Button>
        </div>
      </section>
      <Hr />
    </div>
  );
};

export default Decipher;
