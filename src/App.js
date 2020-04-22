import React from 'react';
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import Error from "./pages/Error"
import Covid_19 from "./pages/COVID-19" 
import SingleRoom from "./pages/SingleRoom"
import './App.css';
import {Route,Switch} from 'react-router-dom';
import NavBar from "./components/NavBar"


function App() {
  return (
   <>
<NavBar/>
   <Switch>
   <Route exact path="/" component={Home}></Route>
   <Route exact path="/rooms/" component={Rooms}></Route>
   <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
   <Route exact path="/covid-19" component={Covid_19}></Route>
  <Route component={Error}/>
   </Switch>
   

   </>
  );
}

export default App;
