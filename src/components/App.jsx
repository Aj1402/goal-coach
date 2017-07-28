import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component{
  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){
    return(
      <div style={{margin: "5px"}}>
        <h3 style = {{color: "white"}}>Goal Coach</h3>
        <AddGoal />
        <hr />
        <h4 style = {{color: "#eee"}}>Goals</h4>
        <GoalList />
        <hr />
        <h4 style = {{color: "#eee"}}>Completed Goals</h4>
        <CompleteGoalList />
        <hr />
        <button
          className="btn btn-danger"
          onClick = {() => this.signOut()}>Sign Out</button>
      </div>
    );
  }
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, null)(App);
