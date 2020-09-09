import React, { Component } from "react";
import Table from "./Table"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SearchForm from "./SearchForm";
import List from "../components/List/index"
import Headlines from "./Headlines"
import API from "../utils/API";




class Container extends Component {
  state = {
    result: [],
    search: "",
    direction:"descending",
    employees: []
  };

//   When this component mounts, search for the employee
  componentDidMount() {
    API.search()
    .then(res => {console.log(res)
        this.setState({ employees: res.data.results})
        this.setState({result:this.state.employees})
    }).catch(err => console.log(err));
  }


  handleInputChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    let filteredEmp = this.state.employees.filter(user => {
      //   return user.name.last.indexOf(value.toLowerCase()) !== -1;
        return user.name.first.toLowerCase().indexOf(value.toLowerCase()) === 0;
      });
    this.setState({
      [name]: value,
      result:filteredEmp
    });
  };
  

// sorting component
  handleFormSubmit = event => {
    event.preventDefault();

    let sortedEmployees =this.state.result.sort((a,b)=>{

      if(this.state.direction === "descending"){
       
        this.setState({
          direction:"ascending"
        })
          return (a.name.first > b.name.first)? 1:-1;

      }else if(this.state.direction === "ascending"){
        this.setState({
          direction:"descending"
        })
        return (a.name.first < b.name.first)? 1:-1;
       
      }
    })
this.setState({
  result:sortedEmployees
})
  };




  render() {
    
    return (
    <div>

    <Navbar />
    <SearchForm
          search={this.state.search}
          
          handleInputChange={this.handleInputChange}
        />
        
    <Table>
    <Headlines handleFormSubmit={this.handleFormSubmit}/> 
 

    <List employees={this.state.result} />
   
    </Table>
    <Footer />
    </div> 
    );
  }
}

export default Container;

