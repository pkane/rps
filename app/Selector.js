import React from 'react';

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="selector" roleName="group">
        <button className="rps-option rock" roleName="group" typeName="button" onClick={this.props.throw.bind(this, 'Rock')}>R</button>
        <button className="rps-option paper" roleName="group" typeName="button" onClick={this.props.throw.bind(this, 'Paper')}>P</button>
        <button className="rps-option scissors" roleName="group" typeName="button" onClick={this.props.throw.bind(this, 'Scissors')}>S</button>
      </div>
    )
  }
}