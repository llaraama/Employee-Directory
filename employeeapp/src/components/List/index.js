import React from "react";

function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }
  
function List (props){
    return(
        <tbody>
            {props.employees.map(employee=>(
            <tr>
                <td></td>
                <td></td>
                <img alt={employee.name}src={employee.picture.medium}/>
                <td>
                {employee.name.first} 
                {" "}
                {employee.name.last}
                </td>
                <td>{employee.phone}</td>
                <td><a href={employee.email}>{employee.email}</a></td>
                <td> {formatDate(employee.dob.date)} </td>
                </tr>  
            ))}       
        </tbody>
    );
}


export default List 
