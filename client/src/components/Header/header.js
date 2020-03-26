import React from 'react';
import Jumbo from 'react-bootstrap/Jumbotron';

function BookHeader( {children} ) {
    return (
        <Jumbo>
            <h1 className='text-center '>React Book App</h1>
            {children}
        </Jumbo>
    );
}

export default BookHeader;