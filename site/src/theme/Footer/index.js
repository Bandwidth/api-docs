import React from 'react';
import FooterColumn from '@site/src/components/FooterColumn';
import BlueButton from '@site/src/components/BlueButton.js';

function Footer() {
  const footer = {
    columns: [
        {
            menus: [
                {
                    title: 'Get Started',
                    items: [{
                        label: 'Voice',
                        to: 'https://www.bandwidth.com/voice/',
                    }, {
                        label: 'Messaging',
                        to: 'https://www.bandwidth.com/messaging/'
                    }, {
                        label: 'Enterprise 911',
                        to: 'https://www.bandwidth.com/911/'
                    }, {
                        label: 'Phone Number Management',
                        to: 'https://www.bandwidth.com/phone-numbers/'
                    }, {
                        label: 'Try the APIs',
                        to: 'https://www.bandwidth.com/free-trial/'
                    }]
                }
            ]
        },
        {
            menus: [
                {
                    title: 'Company',
                    items: [{
                        label: 'About Us',
                        to: 'https://www.bandwidth.com/company/',
                    }, {
                        label: 'Contact',
                        to: 'https://www.bandwidth.com/contact/',
                    }, {
                        label: 'Newsroom',
                        to: 'https://www.bandwidth.com/newsroom/',
                    }, {
                        label: 'Careers',
                        to: 'https://www.bandwidth.com/careers/',
                    }, {
                        label: 'Investor Relations',
                        to: 'https://investors.bandwidth.com/',
                    }, {
                        label: 'Leadership',
                        to: 'https://www.bandwidth.com/leadership/',
                    }]
                }
              ]
            },
            {
              menus: [
                {
                  title: 'More',
                    items: [
                      {
                        label: 'Glossary',
                        to: 'https://www.bandwidth.com/glossary/'
                      }, {
                        label: 'Release Notes',
                        to: 'https://www.bandwidth.com/release-notes/'
                      }, {
                        label: 'Resources',
                        to: 'https://www.bandwidth.com/resources/'
                      }, {
                        label: 'Sandbox',
                        to: 'https://sandbox.bandwidth.com'
                      }, {
                        label: 'Service Status',
                        to: 'https://status.bandwidth.com/'
                      }, {
                        label: 'Support',
                        to: 'https://support.bandwidth.com'
                      }
                    ]
                },
                {
                    title: 'Community',
                    items: [{
                        label: 'Blog',
                        to: 'https://www.bandwidth.com/blog/',
                    }, {
                        label: 'GitHub',
                        to: 'https://github.com/Bandwidth'
                    }, {
                        label: 'Postman',
                        to: 'https://www.postman.com/bandwidth'
                    }],
                }
              ]
        }
      ],
    copyright: ` CLEC, LLC is a wholly owned subsidiary of Bandwidth Inc. ©${new Date().getFullYear()}. Built with Docusaurus.`,
  };

  const getInTouch = {
    text: 'Get In Touch',
    link: 'https://www.bandwidth.com/contact/'
  }

  const Clouds = require('@site/static/img/footer-clouds.svg').default;
  const Wave = require('@site/static/img/footer-wave.svg').default;
  const LinkedIn = require('@site/static/img/linkedin.svg').default;
  const Twitter = require('@site/static/img/twitter.svg').default;
  const YouTube = require('@site/static/img/youtube.svg').default;
  const GitHub = require('@site/static/img/github-dark.svg').default;

  return (
    <div className="footer-container">

      <div className="graphics">
        <Clouds className="clouds-svg"/>
        <Wave className="wave-svg"/>
      </div>

      <div className="content-container">
        <div className="content">

          <div className="social-row">
            <a href="https://www.bandwidth.com/" target="_blank" rel="external" className="logo"></a>
            <div className="social-links" data-cy="socialLinks">
              <a className="social-link" href="https://www.linkedin.com/company/bandwidth-inc" target="_blank" rel="noopener"><LinkedIn/></a>
              <a className="social-link" href="https://twitter.com/bandwidth" target="_blank" rel="noopener"><Twitter/></a>
              <a className="social-link" href="https://www.youtube.com/user/bandwidth" target="_blank" rel="noopener"><YouTube/></a>
              <a className="social-link" href="https://github.com/Bandwidth" target="_blank" rel="noopener"><GitHub/></a>
            </div>
          </div>

          <div className="columns">
            {footer.columns.map((props, idx) => (
              <FooterColumn key={idx} {...props}/>
            ))}
            <div className="column">
              <div className="menu">
                <div className="menu-title">Let's Chat</div>
                <div className="call-to-action" data-cy="callToAction">
                  Have a support question? Want to add SMS to your app? Need to talk to legal? Have a great minestrone soup recipe?
                  Whatever the reason you need to chat, let us know and we'll give you a call.
                </div>
                <BlueButton {...getInTouch}/>
              </div>
            </div>
          </div>
          
        </div>
        <div className="copyright"><a href="https://www.bandwidth.com/">Bandwidth.com</a>{footer.copyright}</div>
      </div>

    </div>
  );
}
export default React.memo(Footer);
