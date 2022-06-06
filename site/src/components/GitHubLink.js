import React from 'react';
import styles from './css/GitHubLink.module.css';

export default function GitHubLink(props) {
    return (
        <div className={styles.GitHubLink}><a href={props.GHLink}></a></div>
    );
  }