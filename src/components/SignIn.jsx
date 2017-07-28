import React, { Component } from 'react';
import '../font-awesome/css/font-awesome.min.css';
import '../index.css';
import './style.css';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';
import AlertContainer from 'react-alert';

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state ={
      email: '',
      password: ''
    };
  }

  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'light',
    time: 5000,
    transition: 'scale'
  }

  signIn(){
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch((err) => {this.msg.error(err.message);});
  }

  render(){
      return(
        <div>
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
          <div className="top-content">
            <div className="inner-bg">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-sm-offset-3 form-box">
                    <div className="form-top">
                      <div className="form-top-left">
                        <h3>Sign In</h3>
                        <p>Enter your credentials to log in:</p>
                      </div>
                      <div className="form-top-right">
                        <i className="fa fa-lock"></i>
                      </div>
                    </div>
                    <div className="form-bottom">
                      <form role="form" action="" method="post" className="login-form">
                        <div className="form-group">
                          <label className="sr-only">E-mail</label>
                          <input type="text" name="form-username" placeholder="Email..."
                            className="form-username form-control" id="form-username"
                            onChange={event => this.setState({email: event.target.value})}
                          />
                        </div>
                        <div className="form-group">
                          <label className="sr-only">Password</label>
                          <input type="password" name="form-password" placeholder="Password..."
                            className="form-password form-control" id="form-password"
                            onChange={event => this.setState({password: event.target.value})}
                          />
                        </div>
                      </form>
                      <button className="btn btn1"
                      onClick={() => this.signIn()}  >
                          Sign In
                      </button>
                      <Link to={'/signup'}>Sign up here!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default SignIn;
