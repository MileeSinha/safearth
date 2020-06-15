import React from 'react';
export default class Form extends React.Component{
    state={
        firstName:"",
        lastName: "",
        username: "",
        email: "",
        password: ""
    }
    onSubmit=e=>{
        e.preventDefault();
        this.props.onSubmit(this.state);
      this.setState(
        {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        }
        )
    }
    change=e=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
      
      render() {
        
      return (
        <div>
         <form>
           <br></br>
           <br></br>
           <br></br>
    <input type='text'placeholder='first name' value={this.state.firstName} name='firstName'
           onChange={e=>this.change(e)}/>
    <br></br>
    <input type='text'placeholder='last name' value={this.state.lastName} name='lastName'
           onChange={e=>this.change(e)}/>
    <br></br>
    <input type='text'placeholder='user name' value={this.state.username} name='username'
           onChange={e=>this.change(e)}/>
    <br></br>
    <input type='email' placeholder='email' value={this.state.email} name='email'
           onChange={e=>this.change(e)}/>
    <br></br>
    <input type='password' placeholder='password' value={this.state.password} name='password'
           onChange={e=>this.change(e)}/>
           <br></br>
           <button onClick={this.onSubmit}>submit</button>
         </form>
        </div>    
      );
    }
    }


    