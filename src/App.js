import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import NavBarComp from "./Comp/NavBar/Header";
import MainComp from "./Comp/Main/Container";
// import CreatePanelComp from "./Comp/CreatePanel";
// import ColorPanelComp from "./Comp/ColorPanel";
// import SideBarComp from "./Comp/SideBar";
import ColorPicker from "./Comp/ColorPicker/ColorPicker";
import ColorRangeGroup from "./Comp/ColorPicker/ColorRangeGroup";
import TabsHeader from "./Comp/ColorPicker/TabsHeader";
const FancyColoursApp = (props) => {
  return (
    <>
      {/* <NavBarComp />
      <MainComp /> */}
      <TabsHeader />
      <ColorRangeGroup label="Hue" />
    </>
  );
};
export default FancyColoursApp;

// const ColorPaletteApp = props => {
//   //Function to generate random alphanumeric string, length 6
//   const generateRandomString = () => {
//     let output = "",
//       i = 6;
//     while (i) {
//       let arr = [
//         String.fromCharCode(Math.floor(Math.random() * 9 + 48)),
//         String.fromCharCode(Math.floor(Math.random() * 25 + 97)),
//         String.fromCharCode(Math.floor(Math.random() * 25 + 65))
//       ];
//       output += arr[Math.floor(Math.random() * 3)];
//       i--;
//     }
//     return output;
//   };
//   //State of user
//   const [loggedIn, setLoggedIn] = useState(false);

//   //State of the current panels
//   const [colorPanelCollection, setColorPanelCollection] = useState([
//     { ID: generateRandomString() },
//     { ID: generateRandomString() },
//     { ID: generateRandomString() },
//     { ID: generateRandomString() },
//     { ID: generateRandomString() }
//   ]);

//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `${colorPanelCollection.length} panels`;
//   }, [colorPanelCollection]);

//   const addColorPanelHandler = () => {
//     setColorPanelCollection([
//       ...colorPanelCollection,
//       { ID: generateRandomString() }
//     ]);
//   };

//   const removeColorPanelHandler = ID => {
//     setColorPanelCollection(
//       colorPanelCollection.filter(itemObj => itemObj.ID !== ID)
//     );
//   };

//   return (
//     <Router>
//       <div className="App">
//         <NavBarComp loggedIn={loggedIn} />
//         <div className="container">
//           <div id="feed">
//             <Route path="/new" component={CreatePanelComp} />
//             <Route path="/palettes">
//               {colorPanelCollection.map((panel, index) => {
//                 return (
//                   <ColorPanelComp
//                     key={panel.ID}
//                     uniqueID={panel.ID}
//                     scheme={panel}
//                     remove={removeColorPanelHandler}
//                   />
//                 );
//               })}
//             </Route>
//           </div>
//           <SideBarComp />
//         </div>
//         {/* <button className="feeling-lucky" onClick={addColorPanelHandler}>
//         Feeling Lucky
//       </button> */}
//       </div>
//     </Router>
//   );
// };

// export default ColorPaletteApp;
