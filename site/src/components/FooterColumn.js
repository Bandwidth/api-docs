import React from 'react';
import footerStyles from '@site/src/css/footer.module.css';

export default function FooterColumn({menus}) {
    return (
        <div className={footerStyles.column}>
            {menus.map((props, idx) => (
                <div key= {idx} className={footerStyles.menu}>
                    <div className={footerStyles.menuTitle}>{props.title}</div>
                        {props.items.map((props, idx) => (
                            <div key={idx} className={footerStyles.menuLink}><a href={props.to}>{props.label}</a></div>
                        ))}
                </div>
            ))}
        </div>
    )
}