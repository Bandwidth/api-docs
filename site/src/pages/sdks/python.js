import React from 'react';
import Layout from '@theme/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';    // returns whether or not the theme is light or dark
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../../components/skds.module.css';

const Title = 'Python';
const Svg = require('../../../static/img/bw-python.svg').default;
const GithubSvg = require('../../../static/img/github.svg').default;
const GithubDarkSvg = require('../../../static/img/github-dark.svg').default;

const GithubImageSwitcher = () => {
  const { isDarkTheme } = useThemeContext();
  if (isDarkTheme) {
    return (
      <GithubDarkSvg className={styles.githubSvg} alt="Github" />
    );
  } else {
    return (
      <GithubSvg className={styles.githubSvg} alt="Github" />
    );
  }
}

const LinksList = [
  {
    label: "bandwidth-sdk",
    link: "https://pypi.org/project/bandwidth-sdk/",
    description: "Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages",
    githubLink: "https://github.com/Bandwidth/python-sdk"
  }, {
    label: "Code Samples",
    link: "",
    description: "Code Samples showing how to utilize the Bandwidth Python SDK",
    githubLink: "https://github.com/orgs/Bandwidth-Samples/repositories?language=python"
  }
]

function TableRows({label, link, description, githubLink}) {
  if(link !="") {
    return (
      <tr>
        <td><a href={link}><code>{label}</code></a></td><td>{description}</td><td><a href={githubLink}><GithubImageSwitcher/></a></td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{label}</td><td>{description}</td><td><a href={githubLink}><GithubImageSwitcher/></a></td>
      </tr>
    );
  }
}

export default function SdkPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
          <div className="text--center">
            <Svg className={styles.sdkSvg} alt={Title} />
          </div>
          <center>
            <div className='Table'>
              <table className="Table">
                <thead>
                <tr>
                <th>Link</th>
                <th>Description</th>
                <th>Github</th>
                </tr>
                </thead>
                <tbody>
                {LinksList.map((props, idx) => (
                  <TableRows key={idx} {...props} />
                ))}
                </tbody>
              </table>
            </div>
          </center>
        </Layout>
    );
  }
