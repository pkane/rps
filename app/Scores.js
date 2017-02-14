import React from 'react';

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    var stats = this.props.scores.reduce((stats, game) => {
      if (game.result === 2) {
        stats.won++;
      } else if (game.result === 1) {
        stats.tie++;
      } else if (game.result === 0) {
        stats.lost++
      }
      return stats
    }, {won:0, lost: 0, tie: 0});

    var message = 'Make your choice above!';
    var alertClass = '';
    if (this.props.scores.length) {
      
      var game = this.props.scores[this.props.scores.length - 1];
      if (game.result === 1) {
        message = 'You tied. Try again!';
      } else if (game.result === 2) {
        message = 'You Won: '+ game.total.wins + ' beat ' + game.total.losses + '!';
        alertClass = 'won';
      } else {  
        message = 'You Lost: '+ game.total.losses + ' to ' + game.total.wins + '!';
        alertClass = 'lost'
      }
    }
    
    return (
      <div>
        <div className="text-center">
          <h4 className="caps">Results</h4>
        </div>            
        <nav className="navbar navbar-default">
          <div className="container-fluid gameInfo">
            <div className="row">
              <div className="col-sm-6">
                <h4 className={alertClass}><span><strong>{message}</strong></span></h4>
              </div>
              <div className="col-sm-2 text-right-large">
                <h4>Won: <span><strong>{stats.won}</strong></span></h4>
              </div>
              <div className="col-sm-2 text-right-large">
                <h4>Lost: <span><strong>{stats.lost}</strong></span></h4>
              </div>
              <div className="col-sm-2 text-right-large">
                <h4>Tie: <span><strong>{stats.tie}</strong></span></h4>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
