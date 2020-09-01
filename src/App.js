import React, { Component } from 'react';
import Cell from './components/Cell'
import ArrowButtons from './components/ArrowButtons'
import './App.css';
import { Game, Wrapper } from './GlobalStyles'

class App extends Component {
  constructor() {
    super();
    this.state = {
      makeBoard: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 2],
        [0, 0, 0, 1, 2, 2],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]
    }
  }

  placePiece = (column) => {
    // pass in associated column
    // replace the last 0 with associated color for the player
    // 
  }

  render() {
    return (
      <Game>
        <ArrowButtons board={this.state.makeBoard} />
        <Wrapper>
          {this.state.makeBoard.map((column, index1) => (
            <div key={index1}>
              {column.map((cell, index2) => (
                <Cell num={cell} key={`${index1}-${index2}`} />
              ))}
            </div>
          )
          )}
        </Wrapper>
      </Game >
    );
  }
}

export default App;

