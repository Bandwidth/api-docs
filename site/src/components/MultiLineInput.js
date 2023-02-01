import React from 'react';

export default function MultiLineInput ({label, changeFunction, placeholder, value, note}) {
    return(
        <div className='multi-line-input-container'>
            <div className="input-box-label">{label}</div>
            <textarea className="multi-line-input" onChange={changeFunction} placeholder={placeholder} value={value} rows={3}></textarea>
            {note && <div className='input-box-note'>{note}</div>}
        </div>
    )
}
