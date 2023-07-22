
const players = (marker) => {
    return {marker}
}


const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', '']

    const setBoard = (index, marker) => {
        if (index > board.length) return;
        board[index] = marker
    }

    const getBoard = (index) => {
        if (index > board.length) return;
        return board[index] 
    }

    return{getBoard, setBoard}
})();

// Display the marker on the board
const displayController = (() => {

    const displayResult = document.getElementById('result')
    const displayTurn = document.getElementById('turn')
    const cards = document.querySelectorAll('.card')

    cards.forEach(card => card.addEventListener('click', (e) => {

            if(e.target.innerText !== '') {
                return
            } else if(e.target.innerText === '') {
                e.target.innerText = players.marker
                e.target.classList.remove('pointer')
                e.target.classList.add('not-allowed')
                e.target.removeEventListener('click', e.target)
            }

            if(players.marker === 'X') {
                players.marker = 'O'
                displayTurn.textContent = `It\'s ${players.marker}\'s turn`
            } else if(players.marker === 'O') {
                players.marker = 'X'
                displayTurn.textContent =`It\'s ${players.marker}\'s turn`
            }
        }))
        
})();

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


