import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
class App extends React.Component {

  state = {
    username: '',
    password: '',
    inputErros: []
  }

  handleFieldChange(event,errors) {
    this.setState({
      [event.target.name]: event.target.value,
      inputErros: errors
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
          onChange={(e,errors) => this.handleFieldChange(e,errors)}
          inputValidations = {[
            {
              name: 'minLengthError',
              params: {
                minLength: 3,
                message: 'Please enter minimum 3 letters'
              }
            }
          ]}
        />
      </div>
      <div>
        <button onClick={() => console.log(this.state)}>
          Submit
        </button>
      </div>
    </div>
    );
  }
}

export default App; 
