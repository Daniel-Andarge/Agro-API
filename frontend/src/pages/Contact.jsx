import React, { useState, useEffect } from 'react'
//import "./App.css"
import "../assets/App.css"
import Axios from 'axios'
//const bodyParser = require('body-parser')


const Contact = () => {
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

    <div className='App'>
       <h1>Add New book to Database</h1>

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
     
  /* <div>
      <Banner
     head1="Welcome"
     head2="World"
     content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit fugit ipsam laboriosam, totam ab ducimus sint officia dolore nulla voluptatem, dignissimos ea explicabo! Velit vero deleniti saepe fugiat nulla labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit fugit ipsam laboriosam, totam ab ducimus sint officia dolore nulla voluptatem, dignissimos ea explicabo! Velit vero deleniti saepe fugiat nulla labore.  "}
     image={cowImage}  
       /> 
    </div> */
  )
}

export default Contact