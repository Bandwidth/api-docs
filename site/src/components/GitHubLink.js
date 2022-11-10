import React from 'react';
import githubLinkStyles from '@site/src/components/css/GitHubLink.module.scss';

export default function GitHubLink(props) {
    return (
        <div className={githubLinkStyles.GitHubLink}><a href={props.GHLink}></a></div>
    );
}
