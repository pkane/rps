import React from 'react';

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="component selector" roleName="group">
        <h4>Then select your weapon. You can click or press a number!</h4>      
        <button className="rps-option rock" roleName="group" typeName="button" onClick={this.props.throw.bind(this, 'Rock')}>Rock</button>
        <button className="rps-option paper" roleName="group" typeName="button" onClick={this.props.throw.bind(this, 'Paper')}>Paper</button>
        <button className="rps-option scissors" roleName="group" typeName="button" onClick={this.props.throw.bind(this, 'Scissors')}>Scissors</button>
      </div>
    )
  }
}