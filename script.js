const secretWord    = 'bizzey'
let wordArray     = []

window.addEventListener('keypress', (e)=>{
    wordArray.push(e.key)
    if(wordArray.length > secretWord.length)    wordArray = []
    else if(secretWord.length === wordArray.length) checkWord()
})

window.addEventListener('load', ()=>{
    calculateCash()
})

function checkWord(){
    if(wordArray.join("")===secretWord) showInput()
}

function showInput(){
    console.log('show input')
}

function calculateCash(){
    const quantaty = document.querySelector('h2#counter').textContent
    console.log(quantaty)
    document.querySelector('p#doekoe').textContent =  Number(quantaty) *3
}