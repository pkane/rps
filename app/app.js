import React from 'react';
import ReactDOM from 'react-dom';

import Rounds from './Rounds.js';
import Scores from './Scores.js';
import Selector from './Selector.js';
import History from './History.js';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import style from './game.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      numRounds: 1,
      computer: this.throwRandom(),
      rounds: [],
      games: [],
      set : [],
      tally : this.tally()
    };

    this.throwRandom = this.throwRandom.bind(this);
    this.throw = this.throw.bind(this);
    this.checkRounds = this.checkRounds.bind(this);
    this.tally = this.tally.bind(this);
  }

  tally() {
    return {
      total: 0,
      wins: 0,
      losses : 0
    };
  }

  throwRandom() {
    var options = ["Rock", "Paper", "Scissors"];
    var thisPick = options[Math.floor(Math.random() * 3)];
    return thisPick;
  }

  throw(option) {
    var round = {};
    var game = {};
    var rounds = this.state.rounds;
    var set = this.state.set;
    var games = this.state.games;    
    var tally = this.state.tally;

    if (set.length <= 0) {
      console.log('reset');
      this.setState({rounds : []});
    }

    if (this.state.computer === option) {
      // you tied
      round.result = 1;
      console.log('you tied the round.', "You: " + option, "PC: " + this.state.computer);
    } else if ( 
      // you won
      (this.state.computer === "Rock" && option === "Paper") || 
      (this.state.computer === "Paper" && option === "Scissors") ||
      (this.state.computer === "Scissors" && option === "Rock") ) {
      round.result = 2;
      tally.wins ++;
      console.log('you won the round.', "You: " + option, "PC: " + this.state.computer);
    } else {
      // you lost
      round.result = 0;
      tally.losses ++;      
      console.log('you lost the round.', "You: " + option, "PC: " + this.state.computer);
    }

    round.computer = this.state.computer;
    round.player = option;
    tally.total += round.result;

    set.push(round);
    rounds.push(round);

    console.log(set, tally.total);

    if (set.length > 0 && set.length == this.state.numRounds) {
      var result;
      console.log(tally.total);

      if (tally.total == set.length) {
        round.gameResult = result = 'Draw';
        game.result = 1;
      } else if (tally.total > set.length) {
        round.gameResult = result = 'Win'
        game.result = 2;
      } else {
        round.gameResult = result = 'Loss'
        game.result = 0;
      }

      game.total = tally;
      games.push(game);
      console.log(result);

      this.setState({games, games});
      this.setState({set : []});
      this.setState({tally : this.tally()});
    } else {
      this.setState({tally, tally});
    }

    this.setState({rounds, rounds});

    var random = this.throwRandom();
    this.setState({computer: random});
  }

  checkRounds(value) {
    this.setState({numRounds: value});
  }

  componentDidMount() {
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 49) {
        // pressing 1
        this.throw('Rock');
      } else if (e.keyCode === 50) {
        // pressing 2
        this.throw('Paper');
      } else if (e.keyCode === 51) {
        // pressing 3
        this.throw('Scissors');
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', (e) => {
      if (e.keyCode === 49) {
        this.throw('Rock');
      } else if (e.keyCode === 50) {
        this.throw('Paper');
      } else if (e.keyCode === 51) {
        this.throw('Scissors');
      }
    });
  }  

  render() {
    return (
      <div>
        <Rounds checkRounds={this.checkRounds} />
        <Selector throw={this.throw} />
        <Scores scores={this.state.games} />        
        <History rounds={this.state.rounds} games={this.state.games} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
