import React from 'react';

const TURNS = {
  X: 'x',
  O: '0'
}


const Square = ({children, updateBoard, index}) => {
  return (
    <div className="square">
      {children}
    </div>
  )
}

export function TicTacToe() {
const board = Array(9).fill(null);

  return (
    
      <main className="board">
      <h1 className="text-center">Tic-Tac-Toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return(
              <Square key={index} index={index}>
                {/* {index} */}
              </Square>
            )
          })
        }
      </section>
      </main>
  );
}
