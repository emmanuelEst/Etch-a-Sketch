// Takes user input to build a specified number of rows and columns
function setColumnsAndRows() {
    let userInput = prompt('How many columns and rows do you want to display? (1-100)', '');

    if (userInput === '') {
        alert('Value not taken')
    } else if (userInput > 100 || userInput < 1) {
        alert('Columns and Rows need to be between numbers 1 through 100')
    } else {
        // buildGrid(Math.Floor(userInput));
        console.log('Build Grid Function');
    }
}