import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
      <button className="square" onClick = {()=>{props.onClick()}}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={()=>{this.props.onClick(i)}}/>
  };
  render () {
  return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {
          squares : Array(9).fill(null)
        }
      ],
      xIsNext: true,
      stepNumber:0
    }
  }

  handleClick(i) {
   const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  calculateWinner(squares) {

    const winnerMatrix = [[0,1,2],
                          [6,7,8],
                          [0,3,6],
                          [3,4,5],
                          [1,4,7],
                          [2,5,8],
                          [0,4,8],
                          [2,4,6]
                         ];


   for(let i = 0; i < winnerMatrix.length;  i++ ){
    const [a,b,c] = winnerMatrix[i];
    //console.log("a", a, "b", b, "c", c);
    if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]) {
      return squares[a];
    }
   }
   return null;

  }

  renderHistoryList() {
    const moves = this.state.history.map((step, move) => {
    const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
    )});
    return moves;  
  }


  jumpTo(move) {
    this.setState({
      stepNumber: move,
      xIsNext: (move % 2) === 0,
    });

  }

  render() {
    const winner = this.calculateWinner(this.state.history[this.state.history.length-1].squares);
    let status;
    
    if(winner !==null) {
       status = 'Winner is :' + winner;
    }else{
       status = 'Next player:' + (this.state.xIsNext? 'X' : 'O');
    }


    return (
      <div className="game">
        <div className="game-board">
          <Board squares = {this.state.history[this.state.stepNumber].squares} onClick ={(i)=>{this.handleClick(i)}}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          
          <div>{this.renderHistoryList()}</div>
          
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);
