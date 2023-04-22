import React from 'react'
//import '../assets/App.css'
//import '../assets/ap.json'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


/* const listBooks = [
  {Endpoint: "https://yts.mx/api/v2/movie_details.json", Description: "Returns the information about a specific movie" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male"},
] */

 function ApiDoc() {
  return (

    <SwaggerUI url="https://json.extendsclass.com/bin/6cff574e0884" />
    /*  <div className="Tab">
      <table>
        <tr>
          <th>Endpoint</th>
          <th>Description</th>
       
        </tr>
        {listBooks.map((val, key) => {
          return (
            <tr key={key}>
              <td className='tdd'>{val.Endpoint}</td>
              <td>{val.Description}</td>
        
            </tr>
          )
        })}
      </table>
    </div>  */
  );
}
  
export default ApiDoc; 