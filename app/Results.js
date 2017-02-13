import React from 'react';


export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    var rounds = this.props.rounds.map((round, i)=>{
      var roundResult;
      if (round.result === 0) {
        roundResult = 'Lost';
      } else if (game.result === 2) {
        roundResult = 'Won';
      } else {
        roundResult = 'Tie';
      }
      return (
        <tr key={i}>
          <td>{round.player}</td>
          <td>{round.computer}</td>
          <td>{roundResult}</td>
        </tr>
      )
    }).reverse();

    return (
      <table className="table table-striped history">
        <thead>
          <tr>
            <th className="score">Player</th>
            <th className="date">Computer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {rounds}
        </tbody>
      </table>
    )
  }
}
