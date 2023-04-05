import React from 'react';
import Loader from './Loader';

export default function SecondaryButton ({type, onClick, isLoading, isDisabled, text}) {
    return(
        <button onClick={onClick} className={`${type}-button${isDisabled ? `-disabled` : ``}`} disabled={isDisabled}>
            {isLoading ? <Loader ringSize='18'/> : text}
        </button>
    )
}
