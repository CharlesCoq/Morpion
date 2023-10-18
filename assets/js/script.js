const grid = document.getElementsByClassName('cases'); // Get cases from html 
let currentPlayer = true; // set current player 
let victory = false; // set victory status

for (let i = 0; i < grid.length; i++) {
	grid[i].addEventListener('click', () => {  // add event on click

		if (grid[i].textContent == '') {  // you can play if case is empty so you can't play 2 times on same case

			if (currentPlayer == true) {  // set first player
				grid[i].textContent = 'X'; // first player is X
				currentPlayer = false; // switch turn on second player

			} else {
				grid[i].textContent = 'O';  // set second player on O
				currentPlayer = true; // switch to first player
			}
			check()  // use function below to verify victory 
		}
	});
}

function check() { 			// Victory's condition

	if (victory == false) {

		if (grid[0].textContent == 'X' && grid[1].textContent == 'X' && grid[2].textContent == 'X' ||
			grid[3].textContent == 'X' && grid[4].textContent == 'X' && grid[5].textContent == 'X' ||
			grid[6].textContent == 'X' && grid[7].textContent == 'X' && grid[8].textContent == 'X' ||

			grid[0].textContent == 'X' && grid[3].textContent == 'X' && grid[6].textContent == 'X' ||
			grid[1].textContent == 'X' && grid[4].textContent == 'X' && grid[7].textContent == 'X' ||
			grid[2].textContent == 'X' && grid[5].textContent == 'X' && grid[8].textContent == 'X' ||

			grid[0].textContent == 'X' && grid[4].textContent == 'X' && grid[8].textContent == 'X' ||
			grid[2].textContent == 'X' && grid[4].textContent == 'X' && grid[6].textContent == 'X') {

			victory = true;
			console.log(victory)
			alert('Player 1 you win')

		} else if (
			grid[0].textContent == 'O' && grid[1].textContent == 'O' && grid[2].textContent == 'O' ||
			grid[3].textContent == 'O' && grid[4].textContent == 'O' && grid[5].textContent == 'O' ||
			grid[6].textContent == 'O' && grid[7].textContent == 'O' && grid[8].textContent == 'O' ||

			grid[0].textContent == 'O' && grid[3].textContent == 'O' && grid[6].textContent == 'O' ||
			grid[1].textContent == 'O' && grid[4].textContent == 'O' && grid[7].textContent == 'O' ||
			grid[2].textContent == 'O' && grid[5].textContent == 'O' && grid[8].textContent == 'O' ||

			grid[0].textContent == 'O' && grid[4].textContent == 'O' && grid[8].textContent == 'O' ||
			grid[2].textContent == 'O' && grid[4].textContent == 'O' && grid[6].textContent == 'O') {

			victory = true;
			alert('Player 2 you win');

		} else if (
			grid[0].textContent != '' && grid[1].textContent != '' && grid[2].textContent != '' &&
			grid[3].textContent != '' && grid[4].textContent != '' && grid[5].textContent != '' &&
			grid[6].textContent != '' && grid[7].textContent != '' && grid[8].textContent != '') {

			victory = true;
			alert('Null ! Reload page to play again') // 
		}
	}
};