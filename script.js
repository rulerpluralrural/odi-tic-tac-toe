// Close start menu
    const closeBtn = document.getElementById('close')
    const menu = document.getElementById('menu-options')

    closeBtn.addEventListener('click', () => {
        menu.classList.add('close')
    })

function players(player, hand) {
    return {
        player:player,
        hand:hand
    }
}

let playerOne = players('player one', 'X')
let playerTwo = players('player two', 'O')