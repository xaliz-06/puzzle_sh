import styles from './Hr.module.css';

const Hr = () => {
  return (
    <div className={styles.horizontal_rule_container}>
      <hr className={styles.horizontal_rule} />
    </div>
  );
};

export default Hr;
