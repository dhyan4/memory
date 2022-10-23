const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'blank',
        img: 'images/blank.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'white',
        img: 'images/white.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'blank',
        img: 'images/blank.png'
    }, 
    {
        name: 'white',
        img: 'images/white.png'
    }
    
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)

    }



}
createBoard()


function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
console.log(cards)
    console.log('check for match!')
    if(optionOneId == optionTwoId)
    {
alert('YOU CLICKED THE SAME CARD')
cards[optionOneId].setAttribute('src' , 'images/blank.png')
cards[optionTwoId].setAttribute('src' , 'images/blank.png')
    }

   console.log(cardsChosen[0])
   console.log(cardsChosen[1])

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('YOU FOUND A MATCH!!!!')
cards[optionOneId].setAttribute('src' , 'images/white.png')
cards[optionTwoId].setAttribute('src' , 'images/white.png')
cards[optionOneId].removeEventListener('click', flipCard)
cards[optionTwoId].removeEventListener('click', flipCard)
cardsWon.push(cardsChosen)
}else {
    cards[optionOneId].setAttribute('src' , 'images/blank.png')
    cards[optionTwoId].setAttribute('src' , 'images/blank.png')
    alert('TRY AGAIN!!!!')
}
console.log(cardsWon)
resultDisplay.textcontent = cardsWon.length
 
cardsChosen = []
cardsChosenIds = []
if (cardsWon.length == cardArray.length/2){
resultDisplay.textContent = 'You win!!!!' 

}
}


function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }

}















