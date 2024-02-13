import { useState } from 'react';
import Card from '../components/ui/Card';
import styles from './route-styles/Hunt.module.css';
import QuoteCard from '../components/ui/QuoteCard';
import Hr from '../components/ui/Hr';
import { Link, useNavigate } from 'react-router-dom';
import Hint from '../components/ui/Hint';
import Button from '../components/ui/Button';

let url;

const Hunt = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleGo = () => {
    let enterredValue = inputValue.toLowerCase();
    if (enterredValue === 'conan') {
      url =
        'https://drive.google.com/drive/folders/1zmpQ_ZQbE-X1k46RjkD660qAijTJHkAu';
    } else {
      url = '/check';
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
    <div className={styles.hunt_page}>
      <div className={styles.hunt_container}>
        <Card>
          <QuoteCard
            text={'The little things are infinitely the most important.'}
            credit={`Sherlock Holmes in "A Case of Identity"`}
          />
          <Hr />

          <div className={styles.hunt_details}>
            <h3>Ready for the next challenge?</h3>
            <h5>
              Read the following text and enter the answer in the box below. The
              answer is a WORD (noun). Make sure there aren&apos;t any typos. If
              you answer it correctly, you will get closer to the{' '}
              <span className={styles.special}>2nd Flag [2 of 5]</span>. The
              game is on!
            </h5>
            <p>
              What word is associated with both a prolific mystery writer and as
              well as a comic book character who is a mighty Cimmerian barbarian
              in fiction?
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_section}>
              <label className={styles.form_label} htmlFor="name">
                Name:
                <input
                  type="text"
                  id="name"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </label>
              <div className={styles.hint_box}>
                <Hint>
                  This word is also associated with a famous Japanese manga
                  series featuring a child detective, as well as a well-known
                  American television host and comedian. REMEMBER: Hidden in
                  Plain Sight.
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

export default Hunt;
