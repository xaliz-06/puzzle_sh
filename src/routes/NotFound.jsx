import { useNavigate } from 'react-router-dom';
import watson from '../assets/images/watson_no.gif';
import Button from '../components/ui/Button';

import Card from '../components/ui/Card';
import styles from './route-styles/NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.not_found_page}>
      <div className={styles.not_found_container}>
        <Card>
          <div className={styles.not_found_details}>
            <h2>There&apos;s No Such Place!</h2>
            <img src={watson} className={styles.watson_img} alt="not_found" />
            <div className={styles.btn_container}>
              <Button handleClick={handleBack} addClass="small">
                GO BACK
              </Button>
              <Button handleClick={handleHome} addClass="small">
                GO TO HOME
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
