import React from 'react';

export default function Alert({type, text}) {
    const icons = new Map([
        ['success', 'check_circle'],
        ['info', 'info'],
        ['warning', 'report_problem'],
        ['error', 'error_outline']
    ])

    return(
        <div className='alert-container'>
            <div className={`alert${`-${type}`}`}>
                <div className='icon'>{icons.get(type)}</div>
                <div className='text'>{text}</div>
            </div>
        </div>
    )
}
