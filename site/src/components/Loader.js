import React from 'react';

export default function Loader ({ringSize}) {

    var ringStyle = {
        width: `${ringSize}px`,
        height: `${ringSize}px`
    }
  
    return (
      <div className='loader'>
        <div className='ring' style={ringStyle}/>
        <div className='ring' style={ringStyle}/>
        <div className='ring' style={ringStyle}/>
      </div>
    );
}

