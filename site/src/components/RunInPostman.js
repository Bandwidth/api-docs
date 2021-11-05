import React from 'react';
import styles from '../pages/index.module.css';

export default function RunInPostman(props) {
    return (
        <div className={styles.RunInPostman}>
            <div className={styles.RunInPostmanLeft}/>
            <a href="https://github.com/Bandwidth/postman" className={styles.RunInPostmanRight}>Run in Postman</a>
        </div>
    );
  }