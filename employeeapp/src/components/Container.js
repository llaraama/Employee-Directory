import React, { Component } from "react";
import Table from "./Table"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SearchForm from "./SearchForm";
import List from "../components/List/index"
import Headlines from "./Headlines"
import API from "../utils/API";
// import Moment from 'react-moment';


class Container extends Component {
  state = {
    result: [],
    search: "",
    employees: []
  };

//   When this component mounts, search for the employee
  componentDidMount() {
    API.search()
    .then(res => {console.log(res)
        this.setState({ employees: res.data.results})
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
    let names = event.target.name;
    let values = event.target.value;
    let sortEmp=this.state.employees.sort((a, b) => (a.employees.name.first > b.employees.name.first) ? 1 : -1)
  
  this.setState({
    [names]: values,
    result:sortEmp
  });
};


  render() {
    
    return (
    <div>
    <Navbar />
    <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
    <Table>
    <Headlines /> 
    {/* <Moment format="YYYY/MM/DD">{this.state.employees.date}</Moment> */}
    { this.state.result.length > 0 ? 
    <List employees={this.state.result} />
    :
    <List employees={this.state.employees} />
    
    }
    </Table>
    <Footer />
    </div> 
    );
  }
}

export default Container;

