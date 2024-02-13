import { useState } from 'react';
import Card from '../components/ui/Card';
import Hr from '../components/ui/Hr';
import QuoteCard from '../components/ui/QuoteCard';

import styles from './route-styles/FinalProblem.module.css';
import { useNavigate } from 'react-router-dom';
import Hint from '../components/ui/Hint';
import { Link } from 'react-router-dom';

let url;
let missMeUrl;

const FinalProblem = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const [isCorrect, setIsCorrect] = useState(false);
  const [gotFinal, setGotFinal] = useState(false);

  const navigate = useNavigate();

  const handleGo = () => {
    let enterredValue = inputValue.toLowerCase();
    if (enterredValue === 'sidney') {
      setIsCorrect(true);
      url = '/decipher';
    } else {
      setIsCorrect(false);
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
    setIsCorrect(false);
    setGotFinal(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleGoToFinal = () => {
    setGotFinal(true);
  };

  const handleGetPassword = () => {
    navigate('/miss-me');
  };

  return (
    <div className={styles.final_page}>
      <div className={styles.final_container}>
        <Card>
          <QuoteCard
            text={
              '"You have probably never heard of Professor Moriarty?" said he.'
            }
            credit={
              'Sherlock Holmes in "The Final Problem (The Memoirs of Sherlock Holmes)"'
            }
          />
          <Hr />
          <div className={styles.clue_details}>
            <h3>
              Solve <span className={styles.special}>The Final Problem</span>
            </h3>
            <h5>
              Given below is a <span className={styles.special}>binary</span>{' '}
              stream. There is a message encoded. Find out the message and enter
              it in the box below.
            </h5>
            <p>1101010100101001010101010</p>
            <h5>
              {' '}
              Solve <span className={styles.special}>The Final Problem</span>,
              and you&apos;ll have the{' '}
              <span className={styles.special}>5th Flag [5 of 5]</span>. Beware,
              this is not going to be easy. But if you do find it, the
              satisfaction will be worth it. Make sure you&apos;re not{' '}
              <span className={styles.special}>missing something</span>.
            </h5>
            <h5>
              To solve <span className={styles.special}>The Final Problem</span>{' '}
              you&apos;ll need to find the ghost of a{' '}
              <span className={styles.special}>blue bird</span>
            </h5>
            <h5>
              Since you have come so far, here&apos;s a clue to help you
              further:{' '}
              <span className={styles.special}>
                <i>
                  Listen closely to the silent chatter, in patterns, dots, and
                  dashes scatter.
                </i>
              </span>
            </h5>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_section}>
              <label className={styles.form_label} htmlFor="final">
                <span className={styles.special}>Enter the word</span>:
                <input
                  type="text"
                  id="final"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </label>
              <div className={styles.hint_box}>
                <Hint>
                  During World War II, encrypted messages often traveled through
                  the airwaves. These messages played a crucial role in
                  communication, espionage, and military operations due to their
                  simplicity, reliability, secrecy, and versatility and was an
                  indispensable tool for military communication, contributing
                  significantly to the success of Allied forces in various
                  theaters of war.
                </Hint>
              </div>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>

            <button type="button" onClick={handleReset}>
              Reset
            </button>
            {!isSubmit && <button type="submit">Submit</button>}
            {isSubmit && (
              <div className={styles.check_container}>
                <div className={styles.check_box}>
                  {!isCorrect ? 'WRONG ❌' : 'YOU GOT IT 🔥'}
                </div>
              </div>
            )}
            {isCorrect && isSubmit && (
              <div className={styles.clue_details}>
                {!gotFinal && (
                  <>
                    <h5>
                      Congratulations! You&apos;ve found it! Now get the{' '}
                      <span className={styles.special}>FINAL FLAG</span>
                    </h5>

                    <div className={styles.go_to}>
                      <Link
                        to={url}
                        target="_blank"
                        className={styles.link}
                        onClick={handleGoToFinal}
                      >
                        GO TO THE FINAL FLAG
                      </Link>
                    </div>
                  </>
                )}
                {gotFinal && (
                  <div className={styles.clue_details}>
                    <h5>Looking for a password?</h5>
                    <div className={styles.go_to}>
                      <div className={styles.link} onClick={handleGetPassword}>
                        GET IT HERE
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
};

export default FinalProblem;
