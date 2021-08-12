import React from 'react';
import clsx from 'clsx';
import styles from '../css/skds.module.css';

const GithubLogo = require('../../static/img/github.png').default;

const SdkList = [
  {
    title: 'Node',
    Svg: require('../../static/img/bw-node.svg').default,
    link: '/sdks/node',
    repoLink: 'https://github.com/search?o=desc&q=org%3ABandwidth+node-&s=updated&type=Repositories'
  },
  {
    title: 'Python',
    Svg: require('../../static/img/bw-python.svg').default,
    link: '/sdks/python',
    repoLink: 'https://github.com/Bandwidth/python-sdk'
  },
  {
    title: 'Ruby',
    Svg: require('../../static/img/bw-ruby.svg').default,
    link: '/sdks/ruby',
    repoLink: 'https://github.com/Bandwidth/python-sdk'
  },
  {
    title: 'Java',
    Svg: require('../../static/img/bw-java.svg').default,
    link: '/sdks/java',
    repoLink: 'https://github.com/Bandwidth/python-sdk'
  },
  {
    title: 'C#',
    Svg: require('../../static/img/bw-csharp.svg').default,
    link: '/sdks/csharp',
    repoLink: 'https://github.com/Bandwidth/python-sdk'
  },
  {
    title: 'PHP',
    Svg: require('../../static/img/bw-php.svg').default,
    link: '/sdks/php',
    repoLink: 'https://github.com/Bandwidth/python-sdk'
  },
];


function Sdk({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
      <div className="text--center">
        <Svg className={styles.sdkSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      </a>
    </div>
  );
}

export default function SdkLanguages() {
  return (
    <section className={styles.sdks}>
      <div className="container">
        <div className="row">
          {SdkList.map((props, idx) => (
            <Sdk key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
