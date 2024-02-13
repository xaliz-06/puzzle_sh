import { useState } from 'react';

import styles from './Hint.module.css';

const Hint = (props) => {
  const [hint, setHint] = useState(false);

  return (
    <>
      <div className={styles.hint_container}>
        <i
          className="fa-regular fa-lightbulb"
          onClick={() => setHint((prevState) => !prevState)}
        ></i>{' '}
        Hint
      </div>
      {hint && (
        <div className={styles.hint_message}>
          <p className={styles.hint_message}>{props.children}</p>
        </div>
      )}
    </>
  );
};

export default Hint;
