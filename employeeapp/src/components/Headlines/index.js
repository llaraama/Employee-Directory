import React from "react";

function Headlines (props){

    return(
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th scope="col">Image</th>
            <th scope="col">Name<button onClick={props.handleFormSubmit} class="arrow-down"></button></th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
    )
}
export default Headlines