import React from 'react';


export default class extends React.Component {
  constructor() {
    super()
  }

  render() {

    var rounds = this.props.rounds.map((round, i)=>{
      var roundResult, gameResultClass;
      if (round.result === 0) {
        roundResult = 'Lost';
      } else if (round.result === 2) {
        roundResult = 'Won';
      } else {
        roundResult = 'Tie';
      }

      if (round.gameResult) {
        gameResultClass = round.gameResult.toLowerCase();
      }

      return (
        <tr className="text-right" key={i}>
          <td className={gameResultClass}><b>{round.gameResult}</b></td>
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
            <th></th>
            <th className="score text-right">Player</th>
            <th className="date text-right">Computer</th>
            <th className="text-right">Result</th>
          </tr>
        </thead>
        <tbody>
          {rounds}
        </tbody>
      </table>
    )
  }
}
