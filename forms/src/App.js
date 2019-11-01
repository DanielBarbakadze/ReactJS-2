import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
class App extends React.Component {

  state = {
    username: '',
    password: '',
    inputErros: [],
    showErrors: []
  }

  handleFieldChange(event,errors,formatter) {
    console.log(errors,formatter)
    this.setState({
      [event.target.name]: event.target.value,
      inputErros: errors
    })
  };

  handleShowErrors(){
    this.setState({
      showErrors: this.state.inputErros
    })
    console.log(this.state.showErrors,this.state.inputErros);
  };

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
          onChange={(e,errors,formatter) => this.handleFieldChange(e,errors,formatter)}
          inputValidations = {[
            {
              name: 'minLengthError',
              params: {
                minLength: 3,
                message: 'Please enter minimum 3 letters'
              }
            }
          ]}
          formatterValidations = {[
            {
              name: 'onlyNumber'
            }
          ]}
        />
      </div>
      <div>
        <button onClick={() => this.handleShowErrors()}>
          Submit
        </button>
      </div>
      <div>
        <span>{this.state.showErrors}</span>
      </div>
    </div>
    );
  }
}

export default App; 
