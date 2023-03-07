const squares=document.querySelectorAll('.square')
const infoDisplay=document.querySelector('#info')

const pieces = ['WPawnu1', 'WPawnu2', 'WPawnu3', 'WPawnu4', 'WPawnu5', 'WPawnu6', 'WPawnu7', 'WPawnu8',
    'WPawnd1', 'WPawnd2', 'WPawnd3', 'WPawnd4', 'WPawnd5', 'WPawnd6', 'WPawnd7', 'WPawnd8',
    'BPawnu1', 'BPawnu2', 'BPawnu3', 'BPawnu4', 'BPawnu5', 'BPawnu6', 'BPawnu7', 'BPawnu8',
    'BPawnd1', 'BPawnd2', 'BPawnd3', 'BPawnd4', 'BPawnd5', 'BPawnd6', 'BPawnd7', 'BPawnd8'];
const piecesElements = pieces.map(piece => document.querySelector(`.${piece}`));

piecesElements.forEach(piece => {
    piece.addEventListener('drag', dragging);
    piece.addEventListener('dragstart', dragStart);
});

squares.forEach(square=>{
    square.addEventListener('dragover',dragOver)
    square.addEventListener('dragenter',dragEnter)
    square.addEventListener('dragleave',dragLeave)
    square.addEventListener('dragend',dragEnd)
    square.addEventListener('drop',dragDrop)
})


let beingDragged

function dragging(e){
    infoDisplay.textContent="You are dragging a "+beingDragged.id
}
function dragStart(e){
    beingDragged=e.target
    console.log(beingDragged)
}
function dragEnter(e){
    e.target.classList.add('highlight')
}
function dragLeave(e){
    e.target.classList.remove('highlight')
}
function dragOver(e){
    e.preventDefault()
}
function dragDrop(e){
    e.target.append(beingDragged)
    e.target.classList.remove('highlight')
}
function dragEnd(e){
    e.target.classList.add('target')
    setTimeout(()=>e.target.classList.remove('target'),100)
    infoDisplay.textContent=''
}

