import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap';
import BookSearch from './pages/bookSearch';
import ReadingList from './pages/readingList';

function App() {
	return (
		<Router>
			<div className="App">
                <Navbar expand='lg'>
                    <Navbar.Toggle aria-controls='basic-nav-bar' />
                    <Navbar.Collapse id='basic-nav-bar'>
                        <Nav>
                            <Nav.Link href='/' eventKey='1'>Book Search</Nav.Link>
                            <Nav.Link href='/reading' eventKey='2'>Reading List</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route exact path='/' component = { BookSearch } />
                <Route exact path='/reading' component = { ReadingList } />
			</div>
		</Router>
	);
}

export default App;