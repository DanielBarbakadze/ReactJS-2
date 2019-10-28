import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
class App extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render (){
    return(
    <div>
      <div>
        <label>Username</label>
        <Input
          name='username'
          value={this.state.username}
          onChange={(e) => this.handleFieldChange(e)}
        />
      </div>
      <div>
        <label>Password</label>
        <Input 
          name='password'
          value={this.state.password}
          type='password' 
          onChange={(e) => this.handleFieldChange(e)}
        />
      </div>
      <div>
        <button onClick={() => console.log(this.state.username,this.state.password)}>
          Submit
        </button>
      </div>
    </div>
    );
  }
}

export default App; 
