import styles from './Button.module.css';

const Button = ({ children, handleClick, addClass }) => {
  return (
    <button
      className={`${styles.btn} ${addClass ? styles.width : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
