// Takes user input to build a specified number of rows and columns
function setColumnsAndRows() {
    let userInput = prompt('How many columns and rows do you want to display? (1-100)', '');

    if (userInput === '') {
        alert('Value not taken')
    } else if (userInput > 100 || userInput < 1) {
        alert('Columns and Rows need to be between numbers 1 through 100')
    } else {
        buildGrid(Math.floor(userInput));
    }
}

// builds rows and columns
function buildGrid(gridSize) {
    let sketchPad = document.querySelector('#sketch-pad');
    let newDiv;
    destroyGrid(); // removes any previous grid set
    for (let i = 1; i <= (gridSize ** 2); i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add('cell')
        sketchPad.appendChild(newDiv);
    }

    sketchPad.style.cssText = `grid-template: repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr);`;
    createEventListeners();
    // prevents 'mouseleave' from firing when the cursor leave the grid and returns again
    sketchPad.addEventListener('mouseleave', removeMouseLeave);

}

// Destroys any current set grid
function destroyGrid() {
    let cells = document.querySelectorAll('.cell');
    let sketchPad = document.querySelector('#sketch-pad');

    if (cells.length != 0) {
        while (sketchPad.firstChild) {
            sketchPad.removeChild(sketchPad.firstChild);
        }
    } else {
        // pass
    }
}

// Adds event listeners
function createEventListeners() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(item => {
        item.addEventListener('mousedown', createMouseLeaveListeners);
    })
}

// Fills cell when clicked
function fillCellOnClick(event) {
    if (draw === true) {
        event.target.style['background-color'] = 'black';
    }
    if (draw === false) {
        event.target.style['background-color'] = 'white';
    }
}

// create mouseleave listeners
function createMouseLeaveListeners() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(item => {
        item.addEventListener('mouseleave', fillCellOnClick)
        item.addEventListener('mouseup', removeMouseLeave);
    })
}

// remove 'mouseleave' event listeners
function removeMouseLeave(event) {
    if (event.target.id != 'sketch-pad') { // prevents the grid from filling up when this is called
        fillCellOnClick(event); // fills the last cell when 'mouseup' fires
    }

    let cells = document.querySelectorAll('.cell');
    cells.forEach(item => {
        item.removeEventListener('mouseleave', fillCellOnClick)
    })
}

// set to drawing or erasing 
let draw = true;
