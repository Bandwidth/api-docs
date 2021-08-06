import React from 'react';
import Layout from '@theme/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';    // returns whether or not the theme is light or dark
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './skds.module.css';

const GithubSvg = require('../../static/img/github.svg').default;
const GithubDarkSvg = require('../../static/img/github-dark.svg').default;

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

export default class Table extends React.Component {
    constructor(props){
      super(props);
      this.getHeader = this.getHeader.bind(this);
      this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);
    }

    getKeys = function(){
      return Object.keys(this.props.data[0]);
    }

    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
      })
    }

    getRowsData = function(){
      var items = this.props.data;
      var keys = this.getKeys();
      return items.map((row, index)=>{
          if(row.link !="") {
            return (
              <tr>
                <td><a href={row.link}><code>{row.label}</code></a></td><td>{row.description}</td><td><a href={row.githubLink}><GithubImageSwitcher/></a></td>
              </tr>
            );
          } else {
            return (
              <tr>
                <td>{row.label}</td><td>{row.description}</td><td><a href={row.githubLink}><GithubImageSwitcher/></a></td>
              </tr>
            );
          }
      })
    }

    render() {
        return (
          <div>
            <table>
            <thead>
            <tr>
            <th>Link</th>
            <th>Description</th>
            <th>Github</th>
            </tr>
            </thead>
            <tbody>
              {this.getRowsData()}
            </tbody>
            </table>
          </div>

        );
    }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
}
