import React, { Component } from 'react';
import Board from './Board';
import { createBoard, checkForCompletion, playSound } from '../utils';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      board: null,
      gameOver: false,
      message: null
    };
    
    this.move = this.move.bind(this);
  }
  
  startGame() {
    this.setState({
      board: createBoard(),
      gameOver: false,
      message: null
    });
  }

  move(r, c) {
    playSound('click');
    const { board } = this.state;
    
    if (board[r - 1] && board[r - 1][c] === 0) {
      [board[r - 1][c], board[r][c]] = [board[r][c], board[r - 1][c]]; // Move up
    } else if (board[r][c + 1] === 0) {
      [board[r][c + 1], board[r][c]] = [board[r][c], board[r][c + 1]]; // Move right
    } else if (board[r + 1] && board[r + 1][c] === 0) {
      [board[r + 1][c], board[r][c]] = [board[r][c], board[r + 1][c]]; // Move down
    } else if (board[r][c - 1] === 0) {
      [board[r][c - 1], board[r][c]] = [board[r][c], board[r][c - 1]]; // Move left
    }
    
    if (checkForCompletion(board)) {
      this.setState({ board, gameOver: true, message: 'You win!' });
    } else {
      this.setState({ board });
    }
  }

  componentWillMount() {
    this.startGame();
  }
  
  render() {
    return (
      <div>
        <h1 className="animated fadeInRightBig">Slide Puzzle</h1>
        <div className="button" onClick={() => {this.startGame()}}>New Game</div>
        <Board board={this.state.board} move={this.move}/>
        <p>{ this.state.message }</p>
      </div>
    );
  }
};
