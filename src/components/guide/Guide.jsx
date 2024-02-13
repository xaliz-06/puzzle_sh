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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            <li className={styles.guides_list_item}>
              <p className={styles.list_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            <li className={styles.guides_list_item}>
              <p className={styles.list_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            <li className={styles.guides_list_item}>
              <p className={styles.list_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            <li className={styles.guides_list_item}>
              <p className={styles.list_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Guide;
