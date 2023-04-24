import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import axios from './axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const SERVER = process.env.REACT_APP_SERVER

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      books:[]
    }
  }

  getBooks = async () =>{
    try {
    // TODO: build URL for AXIOS to hit server

    let url = `${SERVER}/books`;
    
    // TODO: pass url into axios.get and store in variable
    let bookData = await axios.get(url)

    // TODO: take in return and set books state
    this.setState({
      books: bookData.data
    })

    } catch (error) {
      console.log(error)
    }
  }

  // *** REACT LIFECYCLE METHOD - 
  // componentDidMount is moment when app is rendered, it will run code below
  componentDidMount(){
    this.getBooks();
  } 


  //{this.state.books.length > 0 &&
  // <>
  //  {this.state.books.map(book => <p>{book.title} <em>{book.status}</em>: {book.description} </p>}
  // </>


  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route path="/about">
              <h1>About Page Here</h1>
            </Route> 

          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
