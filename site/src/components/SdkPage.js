import React from 'react';
import GitHubLink from '@site/src/components/GitHubLink';

export default function SdkPage({Svg, title, repoLinks, samplesLink}) {
    return (
        <div className={'sdkPage'}>
            <div className={'sdkImage'}>
                <Svg className={'sdkSvg'} alt={title} />
            </div>
            <div className={'sdkProductTable'}>
                <div className={'tableHolder'}>
                    <table>
                        <thead>
                            <tr>
                                <th>Resource</th>
                                <th>Description</th>
                                <th>Github</th>
                            </tr>
                        </thead>
                        <tbody>
                            {repoLinks.map((props, idx) => (
                                <tr key={idx}>
                                    <td><a href={props.packageLink}><code>{props.title}</code></a></td>
                                    <td>{props.description}</td>
                                    <td><GitHubLink GHLink={props.ghLink} /></td>
                                </tr>
                            ))}
                            <tr>
                                <td>Code Samples</td>
                                <td>Code Samples showing how to utilize the Bandwidth {title} SDK</td>
                                <td><GitHubLink GHLink={samplesLink}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
      </div>
    );
}
