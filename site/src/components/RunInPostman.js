import React from 'react';
import styles from '../pages/index.module.css';

export default function RunInPostman(props) {
    return (
        <a href="https://github.com/Bandwidth/postman" className={styles.RunInPostman}>Postman Collection</a>
    );
  }