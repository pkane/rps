import React from 'react';

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="component rounds-selector" roleName="group">
        <h4>First, choose a number of rounds in the game.</h4>
        <input className="rounds-select" type="radio" name="numRounds" value="1" defaultChecked onClick={this.props.checkRounds.bind(this, '1')}/> 1
        <input className="rounds-select" type="radio" name="numRounds" value="3" onClick={this.props.checkRounds.bind(this, '3')} /> 3
        <input className="rounds-select" type="radio" name="numRounds" value="5" onClick={this.props.checkRounds.bind(this, '5')}/> 5
      </div>
    )
  }
}