import React from 'react';

export function GInput(props) {
    return(
        <div className='form-group'>
            <input className='form-control' {...props} />
        </div>
    );
}