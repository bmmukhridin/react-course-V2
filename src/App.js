import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFild: '',
    };
    // console.log("1");
  }
  componentDidMount() {
    // console.log("3");
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },

          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchFild);
    });
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="Search Monsters"
          onChange={(event) => {
            const searchFild = event.target.value.toLowerCase()
            
            this.setState(() => {
              return { searchFild };
            });
          }}
        />
        {/* Map function to monsters API */}
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
