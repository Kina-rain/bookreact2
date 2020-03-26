import React from 'react';

export function BtnSubmit(props) {
    return(
        <button className='mx-3 btn btn-primary' {...props} variant='primary'>
            {props.children}
        </button>
    )
}