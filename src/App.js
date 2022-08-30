import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
constructor(){
  super();
  this.state= {
    name: 'Mike'
  }
}

  render(){
    return (
      <div className="App">
        {this.state.mosters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
    )
  }
}


export default App;
