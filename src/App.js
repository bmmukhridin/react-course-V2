import { Component } from "react";
import "./App.css";
import CardList from "./componets/card-list/card-list";
import SearchBox from "./componets/search-box/search-box";
////////////

function App(){
  return(
    <div className="App">
    {/* Search Box input */}
    <SearchBox filter={onSearchChange} />
    {/* Map function to monsters API */}
    <CardList monsters={filteredMonsters} />
  </div>
  )
}

////////  Class Components  ////////////////
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchFild: "",
//     };
//   }
//   componentDidMount() {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }
//   onSearchChange = (event) => {
//     const searchFild = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchFild };
//     });
//   };
//   render() {
//     const { searchFild, monsters } = this.state;
//     const { onSearchChange } = this;
//     console.log("Render");
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchFild);
//     });
//     return (
//       <div className="App">
//         {/* Search Box input */}
//         <SearchBox filter={onSearchChange} />
//         {/* Map function to monsters API */}
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
