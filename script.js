const players = (marker) => {
    return {marker}
}

const gameBoard = (() => {
    const board = ['', '', '',
                    '', '', '', 
                    '', '', '']


    const getBoard = (index) => {
        return board[index]
    }

    const fillBoard = (index, mark) => {
        board[index] = mark
    }

    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
    }

    const checkWinner = (boardIndex) => {
        const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ]
        

        // console.log(winningCombos.filter((combos) => combos.includes(parseInt(boardIndex))))
        
    return winningCombos
    .filter((combos) => combos.includes(parseInt(boardIndex)))
    .some((possibleCombination) => 
        // console.log(possibleCombination.every(
        //     (index) => gameBoard.getBoard(index) === players.marker
        // ))
        // console.log(players.marker)
        possibleCombination.every(
            (index) => getBoard(index) === players.marker
        )
    );
    }

    const stalemate = () => {
        return board.every(card => card != '')
    }

    const isFinished = () => {
        if(stalemate() == true || !checkWinner == true) {
            
        }
    }
    
    return {
        fillBoard,
        getBoard,
        checkWinner,
        stalemate,
        isFinished,
        reset,
    }

})();

// Display the marker on the board
const displayController = (() => {

    // display
    const displayResult = document.getElementById('result')
    const displayTurn = document.getElementById('turn')
    //start menu
    const menu = document.getElementById('menu-options')
    const xMarker = document.getElementById('x-marker')
    const oMarker = document.getElementById('o-marker')
    //ingame
    const cards = document.querySelectorAll('.card')
    const reset = document.getElementById('reset')

    // get the marker from the players choice
    xMarker.addEventListener('click', (e) => {
        players.marker = e.target.textContent
        menu.classList.add('close')
        displayTurn.textContent = `${players.marker} goes first, It\'s ${players.marker}\'s turn`
    })

    oMarker.addEventListener('click', (e) => {
        players.marker = 'X'
        menu.classList.add('close')
        displayTurn.textContent = `X goes first, It\'s X's turn`
    })

    function displayMarker() {
        if (players.marker === 'X') {
            players.marker = 'O'
            displayTurn.textContent = `It\'s ${players.marker}\'s turn`
        } else if(players.marker === 'O') {
            players.marker = 'X'
            displayTurn.textContent =`It\'s ${players.marker}\'s turn`
        }

    }

    // game board event listener
    cards.forEach(card => card.addEventListener('click', (e) => {
            const cardIndex = e.target.getAttribute('data-index');

            if (e.target.textContent !== '') {
                return
            } else if(e.target.textContent === '') {
                e.target.textContent = players.marker
                e.target.classList.remove('pointer')
                e.target.classList.add('not-allowed')
                e.target.removeEventListener('click', e.target)
                gameBoard.fillBoard(cardIndex, e.target.textContent)
            }

             // console.log(gameBoard.checkWinner(cardIndex))
            if(gameBoard.checkWinner(cardIndex)) {
                displayResult.classList.remove('close')
                displayResult.textContent = `Result: Player ${players.marker} won`
                displayTurn.classList.add('close')
                gameBoard.isFinished
            }

            if(gameBoard.stalemate() && !gameBoard.checkWinner(cardIndex)) {
                displayResult.classList.remove('close')
                displayResult.textContent = `Result: It\'s a tie`
                displayTurn.classList.add('close')
                gameBoard.isFinished
            }

            displayMarker()

        }))

    // reset game
    reset.addEventListener('click', () => {
        gameBoard.reset()
        menu.classList.remove('close')
        displayResult.classList.add('close')
        cards.forEach(card => {
            card.textContent = ''
            card.classList.add('pointer')
            card.classList.remove('not-allowed')
        })
                
    })

})();





