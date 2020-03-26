import React, { useEffect, useState} from 'react';
import Jumbo from '../components/Header';
import Contianer from 'react-bootstrap/Container';
import { Card, CardColumns } from 'react-bootstrap';
import API from '../utils/API';

function ReadingList() {
    const[books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, [])

    function loadBooks() {
        API.getBooks()
            .then(res => {
                setBooks(res.data)
            })
            .catch(err => console.log(err))
    };

    function removeBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return(
        <Contianer>
            <Jumbo />
            <h1 className='p-4 text-center'>Reading List</h1>
            <CardColumns className='mt-3'>
                {books.map(book => (
                    <Card className='p-3' key={book._id}>
                        <Card.Img variant="top" src={book.imageLink} style={{height:300, width:250}} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Title>{book.author}</Card.Title>
                            <Card.Text>{book.description}</Card.Text>
                            <Card.Link href={book.bookLink}>Link to Book</Card.Link>
                            <Card.Link href='#' onClick={() => removeBook(book._id)}>Remove Book from List</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </CardColumns>
        </Contianer>
    )
}

export default ReadingList;