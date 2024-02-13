import Card from '../components/ui/Card';
import moriarty_gif from '../assets/images/moriarty_gif.gif';

import styles from './route-styles/MissMe.module.css';
import { useEffect, useState } from 'react';

const MissMe = () => {
  const [showContainer, setShowContainer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContainer(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.miss_me_page}>
      <div
        className={`${styles.miss_me_container} ${
          showContainer ? styles.show : ''
        }`}
      >
        <Card>
          <div className={styles.miss_me_details}>
            <h2>
              <span className={styles.special}>You are missing something!</span>
            </h2>
            <h4>
              You haven&apos;t solved{' '}
              <span className={styles.special}>The Final Problem</span> yet!
            </h4>
            <img src={moriarty_gif} alt="moriarty" />
            <h4>
              Here&apos;s your final clue:{' '}
              <span className={styles.special}>FIND X</span>
            </h4>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MissMe;
