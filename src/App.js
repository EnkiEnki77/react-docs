
import './App.css';

import Game from './tic-tac-toe-components/Game';


function App() {
  // My tic tac toe game will require the following components:
  // A game component that encapsulates the game board, as well as information about the game such as; each players win
  // amount, who's turn it is, which is replaced by the announcment of the winner if conditions are met, Lastly, the ability
  // to travel back to previous moves.
  // A board component which acts as a grid for the different squares of the game
  // A square component that can be pressed by players to place their marker on it.

  // The game will have the following logic:
  // * The board will contain 9 squares in a grid of 3 x 3.
  // * The game winning condition is if someone gets 3 of their markers next to eachother, either horizontally, vertically,
  //   or diagonally. If all squares of the board are filled without a win, then the game results in a draw.
  // * The first player will always be X, second O and the player who's turn it currently is will be indicated above the
  //   board.
  // * When a player clicks on a square their marker will be placed on that square. Markers cannot be placed on a square
  //   which is already occupied. Or if a winner has been decided. After a player places their marker it goes to the next
  //   players turn, given the move wasn't game ending, and the next player will now be able to place their marker.
  // * The player who's turn it is will always be indicated at the top.
  // * Each time a player makes a move a button will appear in a list to the right of the board. The list of buttons will
  //   allow you to return to previous moves in the game. If a player goes back to a previous move the moves after are then
  //   purged from the list. The board should update to the state of the move that was chosen, the current player should also
  //   be changed to be what it was during that move.
  // * If a player wins or the board is filled with marks a modal should appear asking if the players would like to play again
  //   or exit the game. If they play again a point is added fo whichever player won the previous game. Player score is kept
  //   above current player tracker.

  

  return (
    <div className="App">
     <Game/>
    </div>
  );
}

export default App;
