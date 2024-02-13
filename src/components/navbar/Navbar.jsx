import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.nav_links_container_mobile}>
        <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
      </div>
      <nav className={styles.nav_links_container}>
        <ul
          className={`${styles.nav_links_list} ${
            isMenuOpen ? styles.active : ''
          }`}
        >
          <li className={styles.nav_link_item}>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              Home
            </NavLink>
          </li>
          <li className={styles.nav_link_item}>
            <NavLink
              to="discover"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              Discover
            </NavLink>
          </li>
          <li className={styles.nav_link_item}>
            <NavLink
              to="decipher"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              Decipher
            </NavLink>
          </li>
          <li className={styles.nav_link_item}>
            <NavLink
              to="decode"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              Decode
            </NavLink>
          </li>
          <li className={styles.nav_link_item}>
            <NavLink
              to="final-problem"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              The Final Problem
            </NavLink>
          </li>
          <li className={styles.nav_link_item}>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : styles.nav_link
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
