
const grid = document.getElementsByClassName('cases'); // récupérer les div 

let currentPlayer = true;

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
	});
}

console.log(grid);

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



