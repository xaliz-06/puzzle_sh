import Card from '../ui/Card';
import styles from './Guide.module.css';

const Guide = () => {
  return (
    <div className={styles.guide_container}>
      <div className={styles.guide_box}>
        <Card>
          <h3>OBJECTIVES:</h3>
          <ul className={styles.guides_list}>
            <li className={styles.guides_list_item}>
              <p className={styles.list_text}>
                There are <span className={styles.special}>5 Flags</span>. You
                have <span className={styles.special}>2 Hours</span>. Find as
                many as you can. Teams with most Flags in the least amount of
                time qualify.
              </p>
            </li>
          </ul>
        </Card>
      </div>
      <div className={styles.guide_box}>
        <Card>
          <h3>REMEMBER:</h3>
          <ul className={styles.guides_list}>
            <li className={styles.guides_list_item}>
              <p className={styles.list_text}>
                Only add the FLAG in the{' '}
                <span className={styles.special}>Google Form</span> provided.
                The Flags are{' '}
                <span className={styles.special}>CASE SENSITIVE</span> so make
                sure there aren&apos;t any typos or mistakes. Any mistake will
                not be considered.
              </p>
            </li>
            <li className={styles.guides_list_item}>
              <p className={styles.list_text}>
                Flags are followed by &apos;[x of 5]&apos;. The input text you
                enter in the boxes are NOT the Flags.
              </p>
            </li>
            <li className={styles.guides_list_item}>
              <p className={styles.list_text}>
                You can use any online tool or resource to find the flags.
                Remember{' '}
                <span className={styles.special}>
                  all clues are hidden in plain sight
                </span>
                . All the Flags have been mentioned in this page.
              </p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Guide;
