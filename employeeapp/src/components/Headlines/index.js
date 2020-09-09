import React from "react";

function Headlines (props){
console.log(props)
console.log("this is props")
    return(
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th scope="col">Image</th>
            <th className="sortButton"scope="col"onClick={props.handleFormSubmit}>Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
    )
}
export default Headlines