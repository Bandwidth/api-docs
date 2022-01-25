import React from 'react';
import styles from '../css/sdks.module.css';

export default function GitHubLink(props) {
    return (
        <div className={styles.GitHubLink}><a href={props.GHLink}></a></div>
    );
  }