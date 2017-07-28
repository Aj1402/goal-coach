import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleteGoals } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {

  componentDidMount(){
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title });
        this.props.setCompleteGoals(completeGoals);
      });
    });
  }


  render(){
    return(
      <div>
        {
          this.props.completeGoals.map((completeGoal, index) => {
              const { title, email } = completeGoal;
              return (
                <div key={index} style={{color:"#eee"}}>
                  <strong>{title}</strong> completed by <em>{email}</em>
                </div>
              )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return{
    completeGoals
  }
}
export default connect(mapStateToProps,{ setCompleteGoals })(CompleteGoalList);
