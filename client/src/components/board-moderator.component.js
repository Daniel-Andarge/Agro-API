import React, { Component, useState, useEffect  } from "react";

//import "./App.css"
import "../App.css";
import Axios from 'axios'
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

export default class BoardModerator extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
      content: ""
    };
   
  
  }

  

  componentDidMount() {
    UserService.getModeratorBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }
  


  render() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState('')
    const [bookList, setBookList] = useState([])
    useEffect(() => {
      Axios.get("http://localhost:3001/books").then((response) => {
        setBookList(response.data)
  
      })
    }, [])
  
    const submitReview = () => {
      Axios.post("http://localhost:3001/books", {
        title: title,
        author: author,
        pages: pages,
  
      }).then(() => {
        alert("success");
      });
  
    };
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          <div className='App'>
       <h1>Add New book to Databerase</h1>

       <div className="form">
          <label>Title</label>
          <input type="text" name="title" onChange={(e)=>{
            setTitle(e.target.value);
          }}/>
          <label>Author</label>
          <input type="text" name="author"  onChange={(e)=>{
            setAuthor(e.target.value);
          }}/>
          <label>Number of Pages</label>
          <input type="number" name="pages"  onChange={(e)=>{
            setPages(e.target.value);
          }}/>

          <button onClick={submitReview}>Submit</button>

          {bookList.map((val)=>{
            return <h3>ID: {val.id} | Title:{val.title} | Author: {val.author} | Page Size: {val.pages}</h3>
          })}

       </div>
    </div>
     
        </header>
      </div>
    );
  }
}
