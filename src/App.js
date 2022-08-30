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
      <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     <p>Hi {this.state.name}</p>
     <button onClick={()=>{
      this.setState({name: "Home"})
     }}>click</button>
      </header>
      </div>
    )
  }
}


export default App;
