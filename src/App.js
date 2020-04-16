import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import NavBarComp from "./Comp/NavBar/Header";
import MainComp from "./Comp/Main/Container";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

const FancyColoursApp = (props) => {
  return (
    <>
      <NavBarComp />
      <DndProvider backend={Backend}>
        <MainComp />
      </DndProvider>
    </>
  );
};
export default FancyColoursApp;

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
