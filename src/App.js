import './App.css';
import React, { Component } from 'react';
import { CardList} from './components/card-list/card.component';
import { SearchBox} from './components/searchbox/searchbox.component';


class App extends Component{
  constructor(){
    super();
    this.state={
      monsters : [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }
  handleChange = e =>{
    this.setState({searchField : e.target.value});
  };

  render(){
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
    
      <div className="App">
          <h1 className="app-title">Monster Cardex</h1>
          <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}/>

         <CardList monsters={filteredMonsters}/>
      </div>
    );
  }

}

export default App;