import React from 'react';
import request from 'superagent';
import { Router, Route, browserHistory } from 'react-router';


let options = {
  userID: '00',
  currency: 'BTC'
}

//create function renderLanding
  //if the showLanding property is false
    //return null
  //otherwise return the stuff I want to render (Need to figure out some way to handle the this value)


//create showLanding property in state defaulted to true


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      correct: true,
      visibility: ''
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentWillMount() {
    const userJWT = window.localStorage.cryptocracy;
      if (userJWT) {
        this.setState({
          visibility: 'hidden'
        })
      } else {
        this.setState({
          visibility: 'visible'
        })
      }
    this.props.checkAuth();
  }
  
  updateUsername(e) {
    this.setState({
        username: e.target.value
      })
  }

  updatePassword(e) {
    this.setState({
        password: e.target.value
      })
  }  

  submitHandler(e) {
    e.preventDefault();
    //sign in
    this.props.deep.login({
      role: 'user',
      username: this.state.username,
      password: this.state.password
    }, (success, data) => {
      console.log('success is: ', success, 'data is: ', data);
      if (success) {
        // data = {userID: 'harry'};
        data = data;
        window.localStorage.cryptocracy = data.token;
        this.props.getUserData(data);
        this.props.router.push('/dashboard');
      } else {
        this.setState({
          username: '',
          password: '',
          correct: false
        })
      }
    });
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.router.push('/signup');
  }


  render() {
    let usernameLength = this.state.username.length;
    let passwordLength = this.state.password.length;
    console.log('this.props.shouldRender is: ', this.props.shouldRender);
    if (this.props.shouldRender) {
      return (
        <div className='landing'>
          <div>
          <img src='/img/whiteCrypt.svg' className='landingBanner'></img>
          </div>
          <div className='loginForm'>
            <form onSubmit={(e) => this.submitHandler(e)}>
              <label>
                <input type="text" value={this.state.username} onChange={(e) => this.updateUsername(e)} placeholder="username" name="name" />
                <br /><br />
                <input type="text" value={this.state.password} onChange={(e) => this.updatePassword(e)} placeholder="password" name="name" />
              </label>
              <br /><br />
              {!this.state.correct && usernameLength === 0 && passwordLength === 0 && <p>Invalid login</p>}
              <input type="submit" onClick={(e) => this.submitHandler(e)} value="Log In" />&nbsp;&nbsp;
              <button onClick={(e) => this.clickHandler(e)}> Sign Up </button>
            </form>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default Landing;
