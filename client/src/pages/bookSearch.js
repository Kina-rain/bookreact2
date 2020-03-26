import React, {useState} from 'react';
import Jumbo from '../components/Header';
import Contianer from 'react-bootstrap/Container';
import { Card, CardColumns } from 'react-bootstrap';
import {GInput, BtnSubmit} from '../components/SearchBox'
import API from '../utils/API'

function Books() {
    const[books, setBooks] = useState([]);
    const[formObj, setFormObj] = useState({
        searchText: ''
    });

    function searchForBook(name) {
        API.searchBooks(name)
            .then((res) => {
                setBooks(res.data.items)
            })
            .catch((err) => {console.log(err)})
    };

    function handleInputChange(event) {
        const {name, value} = event.target;
        setFormObj({...formObj, [name]: value});
    };

    function handleSearchSubmit(event) {
        event.preventDefault();
        searchForBook(formObj.searchText);
    }

    function saveBook(title, author, description, imageLink, bookLink) {
        let bookData = {
            title: title,
            author: author,
            description: description,
            imageLink: imageLink,
            bookLink: bookLink
        };
        API.saveBook(bookData)
            .then(() => searchForBook(formObj.searchText))
            .catch(err => console.log(err));
    }

    return(
        <Contianer>
            <Jumbo />
            <GInput
                placeholder='What do you want to read today?'
                onChange={handleInputChange}
                name='searchText'
                value={formObj.searchText}
            />
            <BtnSubmit onClick={handleSearchSubmit}>Search Google</BtnSubmit>
            <CardColumns className='mt-3'>
                {books.map(book => (
                    <Card className='p-3' key={book.id}>
                        <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} style={{height:250, width: 200}} />
                        <Card.Body>
                            <Card.Title>{book.volumeInfo.title}</Card.Title>
                            <Card.Text>{book.searchInfo.textSnippet}</Card.Text>
                            <Card.Link href='#' onClick={() => 
                                saveBook(book.volumeInfo.title, 
                                book.volumeInfo.authors[0], 
                                book.searchInfo.textSnippet, 
                                book.volumeInfo.imageLinks.thumbnail, 
                                book.volumeInfo.previewLink)}>Add to Reading List</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </CardColumns>
        </Contianer>
    )
}

export default Books;