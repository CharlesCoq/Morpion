
const grid = document.getElementsByClassName('cases'); // récupérer les div 

let currentPlayer = true;

let victory = false;

for (let i = 0; i < grid.length; i++) {
	grid[i].addEventListener('click', () => {

		if (grid[i].textContent == '') {

			if (currentPlayer == true) {
				grid[i].textContent = 'X';
				currentPlayer = false;

			} else {

				grid[i].textContent = 'O';
				currentPlayer = true;
			}

		}
		check()
	});
}

console.log(grid);

function check() {

	for (let i = 0; i < grid.length; i++) {

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
				alert('Null ! Reload page to play again')
			}
		}
	}
};

console.log(victory);

// else if ()

// victory = 'X'
// victory = 'O'
// victory = 'Try again'

// victory = false

// if (grid[0 ; 1 ; 2] = 'X') {

// 	victory = true

// }


// if 0, 1, 2 = victory
// if 3, 4, 5 = victory
// if 6, 7, 8 = victory


// if 0, 3, 6 = victory
// if 1, 4, 7 = victory
// if 2, 5, 8 = victory

// if 0, 4, 8 = victory
// if 2, 4, 6 = victory

//if

