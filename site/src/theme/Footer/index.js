import React from 'react';
import footerStyles from '@site/src/css/footer.module.css';
import FooterColumn from '@site/src/components/FooterColumn';

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
                          label: 'Release Notes',
                            to: 'https://www.bandwidth.com/release-notes/'
                        }, {
                            label: 'Sandbox',
                            to: 'https://sandbox.bandwidth.com'
                          }, {
                            label: 'Status',
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
    copyright: `© ${new Date().getFullYear()} Bandwidth Inc. Built with Docusaurus.`,
  }

  const Clouds = require('@site/static/img/footer-clouds.svg').default;
  const Wave = require('@site/static/img/footer-wave.svg').default;
  const LinkedIn = require('@site/static/img/linkedin.svg').default;
  const Twitter = require('@site/static/img/twitter.svg').default;
  const YouTube = require('@site/static/img/youtube.svg').default;
  const GitHub = require('@site/static/img/github-dark.svg').default;

  return (
    <div className={footerStyles.footer}>

      <div className={footerStyles.graphics}>
        <Clouds className={footerStyles.cloudsSvg}/>
        <Wave className={footerStyles.waveSvg}/>
      </div>

      <div className={footerStyles.contentContainer}>
        <div className={footerStyles.content}>

          <div className={footerStyles.socialRow}>
            <div className={footerStyles.logo}/>
            <div className={footerStyles.socialLinks}>
              <a class={footerStyles.socialLink} href="https://www.linkedin.com/company/bandwidth-inc" target="_blank" rel="noopener"><LinkedIn/></a>
              <a class={footerStyles.socialLink} href="https://twitter.com/bandwidth" target="_blank" rel="noopener"><Twitter/></a>
              <a class={footerStyles.socialLink} href="https://www.youtube.com/user/bandwidth" target="_blank" rel="noopener"><YouTube/></a>
              <a class={footerStyles.socialLink} href="https://github.com/Bandwidth" target="_blank" rel="noopener"><GitHub/></a>
            </div>
          </div>

          <div className={footerStyles.columns}>
            {footer.columns.map((props, idx) => (
              <FooterColumn key={idx} {...props}/>
            ))}
            <div className={footerStyles.column}>
              <div className={footerStyles.menu}>
                <div className={footerStyles.menuTitle}>Let's Chat</div>
                <div className={footerStyles.callToAction}>
                  Have a support question? Want to add SMS to your app? Need to talk to legal? Have a great minestrone soup recipe?
                  Whatever the reason you need to chat, let us know and we'll give you a call.
                </div>
                <div className={footerStyles.callToActionButton}>
                  <a href="https://www.bandwidth.com/contact/" target="_blank" rel="noopener">GET IN TOUCH</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default React.memo(Footer);
