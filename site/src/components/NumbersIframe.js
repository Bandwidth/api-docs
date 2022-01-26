import React, { Component } from 'react';

export default class NumbersIframe extends Component {

    render() {
        return (
            <iframe src="https://dlea6y7touldw.cloudfront.net/numbers/apiRef.html"
            ref={(container) => { this.container = container; }}
            style={{ width: '100%', height: '100%'}}
            frameBorder="0"
            />
        );
    }
}
