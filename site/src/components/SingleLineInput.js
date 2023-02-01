import React from 'react';

export default function SingleLineInput ({label, changeFunction, placeholder, value, note}) {
    return(
        <div className='single-line-input-container'>
            <div className='input-box-label'>{label}</div>
            <textarea className="single-line-input" onChange={changeFunction} placeholder={placeholder} value={value} rows={1} wrap={'off'}></textarea>
            {note && <div className='input-box-note'>{note}</div>}
        </div>
    )
}
