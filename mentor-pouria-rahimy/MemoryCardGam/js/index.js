const card = [
    {
        id: 1,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/1.png',
        match: 1
    },
    {
        id: 2,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/2.png',
        match: 2
    },
    {
        id: 3,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/3.png',
        match: 3
    },
    {
        id: 4,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/4.png',
        match: 4
    }, {
        id: 5,
        frontImg: './assets/img/front.png',
       backImg: './assets/img/5.png',
        match: 5
    },
    {
        id: 6,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/6.png',
        match: 6
    },
    {
        id: 7,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/7.png',
        match: 7
    },
    {
        id: 8,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/8.png',
        match: 8
    },
    {
        id: 9,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/9.png',
        match: 9
    },
    {
        id: 10,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/10.png',
        match: 10
    },
    {
        id: 11,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/1.png',
        match: 1
    },
    {
        id: 12,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/2.png',
        match: 2
    }, {
        id: 13,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/3.png',
        match: 3
    },
    {
        id: 14,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/4.png',
        match: 4
    },
    {
        id: 15,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/5.png',
        match: 5
    },
    {
        id: 16,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/6.png',
        match: 6
    },
    {
        id: 17,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/7.png',
        match: 7
    },
    {
        id: 18,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/8.png',
        match: 8
    },
    {
        id: 19,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/9.png',
        match: 9
    },
    {
        id: 20,
        frontImg: './assets/img/front.png',
        backImg: './assets/img/10.png',
        match: 10
    },
]

const bodyGame = document.getElementById('boody-game')
let firstCard = null
let secoundCard = null
let counter = 0
let myTimeout = null
let time = null
let getValueTime = null
let move = null
let activeTimer = false
let activeGame = null
let minit = null
let sec = null
let showMinit = null
let showSec = null
let matchedPairs = 0

card.sort(() => Math.random() - 0.5);

const modal = document.querySelector('#overlay')

// start game
const startGame = document.getElementById('accept').addEventListener('click', () => {
    getValueTime = document.getElementById('timerInput').value
    move = document.getElementById('mistakeInput').value

    const errorTimer = document.getElementById('error-timer')
    const errorMove = document.getElementById('error-move')

    showMinit = document.getElementById('minutes')
    showSec = document.getElementById('secound')

    if (getValueTime === '') {
        errorTimer.style.display = 'block';
        return;
    } else {
        errorTimer.style.display = 'none';
    }

    if (move === '') {
        errorMove.style.display = 'block';
        return;
    } else {
        errorMove.style.display = 'none';
    }

    activeGame = document.getElementById('avilable-game')
    activeGame.style.display = 'none'

    counter = Number(move)
    document.getElementById('showCounter').innerHTML = counter

    let totalSeconds = Number(getValueTime)

    showMinit.innerHTML = Math.floor(totalSeconds / 60)
    showSec.innerHTML = totalSeconds % 60

    time = setInterval(() => {

        totalSeconds--

        let minutes = Math.floor(totalSeconds / 60)
        let seconds = totalSeconds % 60

        showMinit.innerHTML = minutes
        showSec.innerHTML = seconds < 10 ? "0" + seconds : seconds

        if (totalSeconds <= 0) {
            clearInterval(time)
            alert('Time Over')
            openModal()
            resetGame()
        }

    }, 1000)

    closeModal()
})



const checkNumberMove = () => {
    if (move <= 0) {
        alert('Game Over');
        openModal();
        resetGame()
    }
}



const resetGame = () => {

    clearInterval(time)

    firstCard = null
    secoundCard = null
    counter = 0
    matchedPairs = 0

    const gameBoard = document.getElementById('boody-game')
    gameBoard.innerHTML = ''

    document.getElementById('showCounter').innerHTML = ''

    showMinit.innerHTML = 0
    showSec.innerHTML = 0

    card.sort(() => Math.random() - 0.5)

    showCard(card)
}

const winGame = () => {

    clearInterval(time)

    const container = document.getElementById('fireworks')

    const fireworks = new Fireworks.default(container, {
        speed: 2,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 60,
        trace: 3,
        explosion: 5
    })

    fireworks.start()

    setTimeout(() => {
        fireworks.stop()
        alert('🎉 You Win!')
        resetGame()
    }, 4000)
}

// show card
const showCard = (data) => {
   let move = document.getElementById('showCounter');
    data.forEach((item, index) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.style.backgroundImage = "url(" + item.frontImg + ")";
        bodyGame.appendChild(div)
        div.addEventListener('click', () => {
            div.classList.add('flip');
            div.style.backgroundImage = "url(" + item.backImg + ")";
            firstCard === null ? firstCard = {element: div, value: item.match} : secoundCard = {element: div, value: item.match}
            if(secoundCard !== null) {
                if(firstCard.value !== secoundCard.value) {
                    counter--
                    document.getElementById('showCounter').innerHTML = counter
                    checkNumberMove()
                    myTimeout = setTimeout(() => {
                        firstCard.element.classList.remove('flip')
                        secoundCard.element.classList.remove('flip')
                        firstCard.element.style.backgroundImage = "url(" + item.frontImg + ")"
                        secoundCard.element.style.backgroundImage = "url(" + item.frontImg + ")"
                        firstCard = null
                        secoundCard = null
                    }, 1000)

                    } else {
                        clearTimeout(myTimeout)
                        firstCard = null
                        secoundCard = null
                        matchedPairs++
                        if (matchedPairs === 10) {
                            winGame()
                            openModal()
                        }
                    }
                }
        })
    });
}



// close modal
const closeModal = () => {
    overlay.style.display = "none";
    modal.classList.remove('show-modal')
    modal.classList.add('hide-modal')
}


// open modal
const openModal = document.getElementById('start-game').addEventListener('click', () => {
    overlay.style.display = "flex";
    modal.classList.add('show-modal')
    modal.classList.remove('hide-modal')
    setTimeout(() => {
        document.getElementById('timerInput').focus()
    }, 50)
})





showCard(card)


