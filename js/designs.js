const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');
const table = document.querySelector('#pixelCanvas');

/**
 * Get input values and create the table
 * Create the table rows and columns; Add them to the table
 */
function makeGrid() {
    const heightValue = inputHeight['value'];
    const widthValue = inputWidth['value'];
    for (let i = 0; i < heightValue; i++) {
        // create table row
        const tableRow = document.createElement('tr');

        tableRow.addEventListener('click', changeColor);

        for (let j = 0; j < widthValue; j++) {
            // create table columns and add to the table row
            const tableColumn = document.createElement('td');
            tableRow.appendChild(tableColumn);
        }
        // add the table rows to the table
        table.appendChild(tableRow);
    }
}