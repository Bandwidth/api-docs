import React from 'react';
import githubLinkStyles from '@site/src/components/css/GitHubLink.module.css';

export default function GitHubLink(props) {
    return (
        <div className={githubLinkStyles.GitHubLink}><a href={props.GHLink}></a></div>
    );
}
