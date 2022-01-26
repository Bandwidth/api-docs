import React, { Component } from 'react';
import IframeResizer from 'iframe-resizer-react';
import { ReactDOM } from 'react';
import Iframe from 'react-iframe'

export default class NumbersIframe extends Component {

    state = { contentHeight: 1650};

    onLoad = () => {
        const frame = document.getElementById('numbersIframe');
        //console.log(frame.contentWindow.document);
        //this.container.contentWindow.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    componentDidMount() {
        //const obj = ReactDOM.findDOMNode(this);
        //this.setState({iFrameHeight:  obj.contentWindow.document.body.scrollHeight + 'px'});
    }

    handleResize = () => {
        //const { body, documentElement } = this.container.contentWindow.document;
        const frame = document.getElementById('numbersIframe');
        // const contentHeight = Math.max(
        //     body.clientHeight,
        //     body.offsetHeight,
        //     body.scrollHeight,
        //     documentElement.clientHeight,
        //     documentElement.offsetHeight,
        //     documentElement.scrollHeight
        // );
        // console.log("height: ", contentHeight)
        // if (contentHeight !== this.state.contentHeight) this.setState({ contentHeight });
      };

    render() {
        const { contentHeight } = this.state;
        return (
            // <Iframe url="https://dlea6y7touldw.cloudfront.net/numbers/apiRef.html"
            //     id="irisRaml"
            //     width="100%"
            //     display="inline"
            //     position="relative"
            //     frameBorder="0"
            //     onLoad={this.onLoad}/>
            <iframe src="https://dlea6y7touldw.cloudfront.net/numbers/apiRef.html"
            ref={(container) => { this.container = container; }}
            style={{ width: '100%', height: `${contentHeight}px` }}
            frameBorder="0"
            scrolling="yes"
            onLoad={this.onLoad}
            id="numbersIframe"
            />
            // <IframeResizer
            //     src="https://dlea6y7touldw.cloudfront.net/numbers/apiRef.html"
            //     heightCalculationMethod="lowestElement"
            //     style={{ width: '1px', minWidth: '100%'}}
            //     frameBorder="0"
            // />
        );
    }
}
