import "./search-box.styles.css";
import React, { Component } from "react";

/////////////////  functional Components  ///////////////////////
function SearchBox(props) {
  return (
    <div>
      <input
        type="search"
        className="search-box"
        placeholder="Search Monsters"
        onChange={props.filter}
      />
    </div>
  );
}

/////////////////  Class Components  ///////////////////////
// class SearchBox extends Component {
//   render() {
//     const { filter } = this.props;
//     return (
//       <div>
//         <input
//           type="search"
//           className="search-box"
//           placeholder="Search Monsters"
//           onChange={filter}
//         />
//       </div>
//     );
//   }
// }

export default SearchBox;
