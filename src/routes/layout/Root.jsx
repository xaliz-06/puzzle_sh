import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

import styles from '../route-styles/Root.module.css';

const Root = () => {
  return (
    <div className={styles.root}>
      <Navbar />

      <div className={styles.root_container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
