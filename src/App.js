import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Form from './Components/form';
import Task from './Components/task';
import {Link} from 'react-router-dom';


class App extends Component {
  state={
    fields:{}
  }
onSubmit=fields=>{
this.setState({fields});
};
render(){
  return(
  <BrowserRouter>
    <div className="App">
      <Link to='/task'>task</Link>
    <Form onSubmit={fields=>this.onSubmit(fields)}/>
    <p>{JSON.stringify(this.state.fields,null,2)}</p>
    </div>
    </BrowserRouter>
  )
}
}
 export default App;
