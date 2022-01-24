import { writingX } from "./js/functions/writing.js"

const a1 = document.querySelector('#diva1')
const a2 = document.querySelector('#diva2')
const a3 = document.querySelector('#diva3')

const b1 = document.querySelector('#divb1')
const b2 = document.querySelector('#divb2')
const b3 = document.querySelector('#divb3')

const c1 = document.querySelector('#divc1')
const c2 = document.querySelector('#divc2')
const c3 = document.querySelector('#divc3')

const grid = [
    [a1, a2, a3],
    [b1, b2, b3],
    [c1, c2, c3]
]

grid.map(element => 
    element.map(block =>
        block.addEventListener('click', () => {writingX(block) })
    )
)