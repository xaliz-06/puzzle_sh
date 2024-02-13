import Card from '../components/ui/Card';
import Hr from '../components/ui/Hr';
import QuoteCard from '../components/ui/QuoteCard';
import styles from './route-styles/Decode.module.css';

import paget_1 from '../assets/images/paget_1.jpg';
import paget_2 from '../assets/images/paget_2.jpg';
import paget_3 from '../assets/images/paget_3.jpg';
import paget_4 from '../assets/images/paget_4.jpg';
import paget_5 from '../assets/images/paget_5.jpg';
import paget_6 from '../assets/images/paget_6.jpg';
import paget_7 from '../assets/images/paget_7.jpg';
import paget_8 from '../assets/images/paget_8.jpg';
import Hint from '../components/ui/Hint';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const img_arr = [
  paget_1,
  paget_2,
  paget_3,
  paget_4,
  paget_5,
  paget_6,
  paget_7,
  paget_8,
];
let url;

const Decode = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleGo = () => {
    let enterredValue = inputValue.toLowerCase();
    if (enterredValue === 'sidney') {
      url = '/final-problem';
    } else {
      url = 'https://www.dcode.fr/dancing-men-cipher';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      setErrorMessage('Please enter a word.');
      setInputValue('');
    } else {
      setErrorMessage('');
      setIsSubmit(true);
      handleGo();
    }
  };

  const handleReset = () => {
    setIsSubmit(false);
    setInputValue('');
    setErrorMessage('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNext = () => {
    navigate('/decipher');
  };
  return (
    <div className={styles.decode_page}>
      <div className={styles.decode_container}>
        <Card>
          <QuoteCard
            text={'There is nothing more deceptive than an obvious fact.'}
            credit={
              'Sherlock Holmes in "The Boscombe Valley Mystery (The Adventures of Sherlock Holmes)"'
            }
          />
          <Hr />
          <div className={styles.clue_details}>
            <h3>
              Get your magnifying glasses, look closer and think{' '}
              <span className={styles.special}>broader</span>
            </h3>
            <h5>
              The following is a gallery of images. Look closely into each of
              them. The images in this{' '}
              <span className={styles.special}>website</span> contain
              information for your next clue. Remember to think outside the box
              (or rather outside your view).
              <br /> Use any tool you may want and find information about the
              image. Enter the first name (CASE INSENSITIVE) of a{' '}
              <span className={styles.special}>specific individual</span>{' '}
              apppearing or mentioned in the image, in the box below to get the{' '}
              <span className={styles.special}>4th Flag [4 of 5]</span>
              <br />
            </h5>
            <p>The individual has been mentioned before.</p>
          </div>
          <div className={styles.gallery_container}>
            <ul className={styles.img_list}>
              {img_arr.map((img) => {
                return (
                  <li className={styles.img_list_item} key={img}>
                    <img src={img} className={styles.gallery_img} alt={img} />
                  </li>
                );
              })}
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_section}>
              <label className={styles.form_label} htmlFor="name">
                First Name:
                <input
                  type="text"
                  id="name"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </label>
              <div className={styles.hint_box}>
                <Hint>
                  The person does not physically appear in any of the images.
                </Hint>
              </div>
              {errorMessage && <p style={{ color: ' red' }}>{errorMessage}</p>}
            </div>

            <button type="button" onClick={handleReset}>
              Reset
            </button>
            {!isSubmit && <button type="submit">Submit</button>}
            {isSubmit && (
              <Link to={url} target="_blank" className={styles.link}>
                LET&apos;S GO
              </Link>
            )}
          </form>
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

export default Decode;
