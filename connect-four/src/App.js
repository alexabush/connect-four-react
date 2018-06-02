import React, { Component } from 'react';
import Board from './Board';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: false,
      isPlayer1Turn: true,
      board: Array.from({ length: 3 }, val => {
        return Array.from({ length: 3 }, val => 0);
      })
    };
  }

  squareClicked = position => {
    console.log('position: ', position);
    const [targetRow, targetColumn] = position;
    this.setState(prevState => {
      const newState = { ...prevState };
      if (newState.board[targetRow][targetColumn] === 0) {
        if (newState.isPlayer1Turn) {
          newState.board[targetRow][targetColumn] = 1;
        } else {
          newState.board[targetRow][targetColumn] = 2;
        }
        newState.isPlayer1Turn = !newState.isPlayer1Turn;
      }
      return newState;
    });
    this.checkWin();
  };

  checkWin = () => {
    this.setState(prevState => {
      const newState = { ...prevState };
      const currentBoard = newState.board;
      let p1Wins,
        p2Wins = false;
      currentBoard.map((row, rowIndex) => {
        //find way to map columns
        //find way to map each diagonal
        if (row.every(square => square === 1)) p1Wins = true;
        if (row.every(square => square === 2)) p2Wins = true;
      });

      //need way to get all 1s and all 2s from a column
      currentBoard.reduce((row, rowIndex) => {
        debugger;
        row.map((value, column) => {
          debugger;
        });
      });

      return newState;
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Connect Four</h1>
        <Board
          board={this.state.board}
          squareClicked={this.squareClicked}
          currentTurn={this.state.isPlayer1Turn}
        />
      </div>
    );
  }
}

export default App;
