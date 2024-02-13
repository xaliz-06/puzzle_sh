import styles from './QuoteCard.module.css';

const QuoteCard = ({ text, credit }) => {
  return (
    <div className={styles.quote_container}>
      <div className={styles.quote_box}>
        <p className={styles.quote_text}>{text}</p>
      </div>
      <div className={styles.credit_box}>
        <p className={styles.quote_credit}>- {credit}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
