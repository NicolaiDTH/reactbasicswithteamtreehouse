var PLAYERS = [
 {
  name: 'Nicolai DTH',
  score: 420,
  id: 1,
 },
 {
  name: 'Pichael',
  score: 200,
  id: 2,
 },
 {
  name: 'Lemon',
  score: 10,
  id: 3,
 },
 {
  name: 'RuPaul',
  score: 100,
  id: 4,
 },
];

function Header (props) {
 return (
  <div className="header">
   <h1> {props.title} </h1>
  </div>
  );
}

Header.propTypes = {
 title: React.PropTypes.string.isRequired,
};

var Counter = React.createClass({
 propTypes: {},

 getInitialState: function() {
  return {
   score: this.props.initialScore,
  }
 },

 incrementScore: function(e) {
  this.setState({
   score: (this.state.score + 1),
  });
 },

 decrementScore: function(e) {
  this.setState({
   score: (this.state.score - 1),
  });
 },

 render: function() {
 }
});

function Counter (props) {
 return (
  <div className="counter">
   <button className="counter-action decrement" onClick = {this.decrementScore}> - </button>
   <div className="counter-score"> {props.score} </div>
   <button className="counter-action increment" onClick = {this.incrementScore}> + </button>
  </div>
 );
}

Counter.propTypes = {
 score: React.propTypes.number.isRequired,
}

function Player (props) {
 return (
  <div className="player">
   <div className="player-name">
    {props.name}
   </div>
   <div className="player-score">
    <Counter initialScore = {props.score} />
   </div>
  </div>
  )
}

Player.proptypes = {
 name: React.PropTypes.string.isRequired,
 score: React.PropTypes.number.isRequired,
};

function Application (props) {
 return (
  <div className="scoreboard">
   <Header title = {props.title}/>
   <div className="players">
   {props.players.map(function(player) {
    return <Player name = {player.name} score = {player.score} key = {player.id} />
   })}
   </div>
  </div>
  );
}

Application.propTypes = {
 title: React.PropTypes.string,
 players: React.PropTypes.arrayOf(React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  id: React.PropTypes.number.isRequired,
 })).isRequired,
};

Application.defaultProps = {
 title: "Scoreboard",
};

ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));