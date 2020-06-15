import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from "react-router-dom";
//import Page1 from "./Components/Page1";
//import Page2 from "./Components/Page2";

//const rootElement=document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <div>
    <Route component={App}/>
    <Route path='/task' render={()=><h1>hello</h1>}/>
  </div>
  </BrowserRouter>,
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  document.getElementById('root')
  /*<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Page1}/>
    <Route path="./Components/Page2" component={Page2}/>
  </Switch>
  </BrowserRouter>,rootElement*/
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
