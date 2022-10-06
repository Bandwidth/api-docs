import React from 'react';

export default function LTSVersions({versions}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>LTS Version</th>
                    <th>Release Date</th>
                    <th>Sunset Date</th>
                    <th>Hosted Link</th>
                    <th>Github Release</th>
                </tr>
            </thead>
            <tbody>
                {versions.map((version, idx) => {
                    const s3Version = version.replaceAll(/[^a-z0-9]/g, '-');
                    const splitVer = version.split('.');
                    const relDate = new Date(splitVer[0].substring(1), splitVer[1] - 1, splitVer[2]);
                    var sunDate = new Date();
                    sunDate.setDate(relDate.getDate() + 180);
                    return (
                        <tr key={idx}>
                            <td>{version}</td>
                            <td>{relDate.toDateString()}</td>
                            <td>{sunDate.toDateString()}</td>
                            <td><a href={`http://bandwidth-api-docs-${s3Version}.s3-website-us-east-1.amazonaws.com/`}>{version}</a></td>
                            <td><a href={`https://github.com/Bandwidth/api-docs/releases/tag/${version}`}>{version}</a></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}