import React, { useState } from "react";
// import List from "./List";
import "../components/projects/styles/searchBox.css";

function SearchBox() {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <div className="search">
        <input
          type="text"
          id="outlined-basic"
          onChange={inputHandler}
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default SearchBox;


























// import { React, useState } from "react";
// // import TextField from "@mui/material/TextField";
// // import TextField from "@mui/material/TextField";
// // import List from "./Components/List";
// import clsx from 'clsx';
// import List from "./List";
// import "../components/projects/styles/searchBox.css";

// function SearchBox() {
//   const [inputText, setInputText] = useState("");
//   let inputHandler = (e) => {
//     //convert input text to lower case
//     var lowerCase = e.target.value.toLowerCase();
//     setInputText(lowerCase);
//   };

//   return (
//     <div className="main">
//       <h1>React Search</h1>
//       <div className="search">
//         <TextField
//           id="outlined-basic"
//           onChange={inputHandler}
//           variant="outlined"
//           // fullWidth
//           label="Search"
//         />
//       </div>
//       <List input={inputText} />
//     </div>
//   );
// }

// export default SearchBox;

