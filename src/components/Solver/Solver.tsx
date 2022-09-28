import React from 'react';

type Props = {};

const sampleBoard = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

const checkValid = (
  currentBoard: number[][],
  currentPosition: { x: number; y: number }
) => {
  let tmp: any = {};

  //check valid in a row
  for (let i = 0; i < 9; i++) {
    if (!currentBoard[currentPosition.x][i]) {
      continue;
    }
    if (tmp[currentBoard[currentPosition.x][i]]) {
      return false;
    }
    tmp[currentBoard[currentPosition.x][i]] = 1;
  }

  //reset checking object
  tmp = {};

  //check valid in a col
  for (let i = 0; i < 9; i++) {
    if (!currentBoard[i][currentPosition.y]) {
      continue;
    }
    if (tmp[currentBoard[i][currentPosition.y]]) {
      return false;
    }
    tmp[currentBoard[i][currentPosition.y]] = 1;
  }

  //reset checking object
  tmp = {};

  //check valid in square
  let rangeX: { from: number; to: number } = { from: 0, to: 0 };
  let rangeY: { from: number; to: number } = { from: 0, to: 0 };

  switch (currentPosition.x) {
    case 0:
    case 1:
    case 2:
      rangeX = { from: 0, to: 2 };
      break;

    case 3:
    case 4:
    case 5:
      rangeX = { from: 3, to: 5 };
      break;

    case 6:
    case 7:
    case 8:
      rangeX = { from: 6, to: 8 };
      break;

    default:
      break;
  }

  switch (currentPosition.y) {
    case 0:
    case 1:
    case 2:
      rangeY = { from: 0, to: 2 };
      break;

    case 3:
    case 4:
    case 5:
      rangeY = { from: 3, to: 5 };
      break;

    case 6:
    case 7:
    case 8:
      rangeY = { from: 6, to: 8 };
      break;

    default:
      alert('Invalid input!');
      return;
  }

  for (let i = rangeX.from; i <= rangeX.to; i++) {
    for (let j = rangeY.from; j <= rangeY.to; j++) {
      if (!currentBoard[i][j]) {
        continue;
      }
      if (tmp[currentBoard[i][j]]) {
        return false;
      }
      tmp[currentBoard[i][j]] = 1;
    }
  }

  return true;
};

const Solver = (props: Props) => {
  console.log(checkValid(sampleBoard, { x: 0, y: 1 }));

  return <div>Solver</div>;
};

export default Solver;
