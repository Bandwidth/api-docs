import React from 'react';
import GitHubLink from '@site/src/components/GitHubLink';

export default function SdkPage({Svg, title, repoLinks, samplesLink, migrationGuides}) {
    return (
        <div className="sdk-page">
            <div className="sdk-image">
                <Svg className="sdk-svg" alt={title} />
            </div>
            <div className="sdk-product-table">
                <div className="table-holder">
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
                            { migrationGuides == true &&
                                <tr className='sdk-migration-guides'>
                                    <td />
                                    <td><a href={"/migration-guides/" + title.toLowerCase() + "/"}>Migration Guide</a></td>
                                    <td />
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
      </div>
    );
}
