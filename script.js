
const gameBoard = (() => {
    const board = ['', '', '',
                    '', '', '', 
                    '', '', '']

    const fillBoard = (index, mark) => {
        board[index] = mark
        console.log(board)
    }

    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
            console.log(board)
        }
    }
    
    return {
        fillBoard,
        reset
    }

})();

// Display the marker on the board
const displayController = (() => {

    const menu = document.getElementById('menu-options')
    const displayResult = document.getElementById('result')
    const displayTurn = document.getElementById('turn')
    const cards = document.querySelectorAll('.card')
    const reset = document.getElementById('reset')

    cards.forEach(card => card.addEventListener('click', (e) => {

            if(e.target.textContent !== '') {
                return
            } else if(e.target.textContent === '') {
                e.target.textContent = players.marker
                e.target.classList.remove('pointer')
                e.target.classList.add('not-allowed')
                e.target.removeEventListener('click', e.target)
                gameBoard.fillBoard(e.target.getAttribute('data-index'), e.target.textContent)
            }

            if(players.marker === 'X') {
                players.marker = 'O'
                displayTurn.textContent = `It\'s ${players.marker}\'s turn`
            } else if(players.marker === 'O') {
                players.marker = 'X'
                displayTurn.textContent =`It\'s ${players.marker}\'s turn`
            }
        }))
        
    reset.addEventListener('click', (e) => {
        gameBoard.reset()
        menu.classList.remove('close')
        cards.forEach(card => {
            card.textContent = ''
            card.classList.add('pointer')
            card.classList.remove('not-allowed')
        })
                
    })

})();

const players = (marker) => {
    return {marker}
}

// Get the players marker on button click
const getPlayerMarker = (() => {

    const displayTurn = document.getElementById('turn')
    const xMarker = document.getElementById('x-marker')
    const oMarker = document.getElementById('o-marker')
    const menu = document.getElementById('menu-options')

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

})();

const game = (() => {
    const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ]
})();


