import React from 'react'
import Banner from '../components/Banner'
import cowImage from '../assets/cow.JPG'

const Home = () => {
  return (
    <div>
     <Banner
     head1="Welcome"
     head2="World"
     content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit fugit ipsam laboriosam, totam ab ducimus sint officia dolore nulla voluptatem, dignissimos ea explicabo! Velit vero deleniti saepe fugiat nulla labore.  "}
     image={cowImage}  
       /> 

    <Banner
     head1="Welcome"
     head2="World"
     content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit fugit ipsam laboriosam, totam ab ducimus sint officia dolore nulla voluptatem, dignissimos ea explicabo! Velit vero deleniti saepe fugiat nulla labore.  "}
     image={cowImage}  
       /> 
   </div>
  )
}

export default Home