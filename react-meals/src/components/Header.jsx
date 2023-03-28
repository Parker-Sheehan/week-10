import React from "react";
import styles from './Header.module.css'

const Header = () => {
  return (
    <nav>
      <h2 className={styles.item}>The food Place</h2>
      <div>
        <h3 className={styles.item}>Your Cart</h3>
      </div>
    </nav>
  );
};

export default Header;
