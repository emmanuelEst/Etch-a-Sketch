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
        item.addEventListener('click', event => {
            fillCellOnClick(event.target);
        })
    })
}

// Fills cell when clicked
function fillCellOnClick(target) {
    if (target.style['background-color'] === 'black') { // checks to see if a cell is already filled
        target.style['background-color'] = 'white';
    } else {
        target.style['background-color'] = 'black';
    }
}