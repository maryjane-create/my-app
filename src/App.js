
import Budget from "./Budget";
import  "./App.css"
import Authentication from "./components/Authentication";


function  App(){
    return(
       <div className="app-container">
           <Router>
               <Switch>
                   <Route exact.path="/">
                       <Authentication/>
                   </Route>
                   <Route path="/dashboard/:identity">
                       <Budget/>
                   </Route>
               </Switch>
           </Router>

       </div>
    )
}
export  default App





















































































































































// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
