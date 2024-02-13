import { useNavigate } from 'react-router-dom';
import watson from '../assets/images/watson_no.gif';
import Button from '../components/ui/Button';

import Card from '../components/ui/Card';
import styles from './route-styles/NotFound.module.css';
import { useEffect, useState } from 'react';

let gif = watson;
let text = <p>There&apos;s No Such Place!</p>;

const NotFound = (props) => {
  const [wrong, setWrong] = useState(false);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (props?.text === 'wrong') {
      setWrong(true);
      gif = props.gif;
      text = 'WRONG ❌';
    }
  }, [props.text]);

  return (
    <div className={styles.not_found_page}>
      <div className={styles.not_found_container}>
        <Card>
          <div className={styles.not_found_details}>
            <h2>{text}</h2>
            <img src={gif} className={styles.watson_img} alt="not_found" />
            {!wrong && (
              <div className={styles.btn_container}>
                <Button handleClick={handleBack} addClass="small">
                  GO BACK
                </Button>
                <Button handleClick={handleHome} addClass="small">
                  GO TO HOME
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
