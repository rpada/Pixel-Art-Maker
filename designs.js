// Global variables
    const $colorPicker = document.getElementById("colorPicker"); // Select color input
    const $sizePicker = document.getElementById("sizePicker"); // Select size input
    const $pixelCanvas = document.getElementById("pixelCanvas"); // get canvas
    const $inputWidth = document.getElementById("inputWidth"); // get width
    const $inputHeight = document.getElementById("inputHeight"); // get height
  
    // add event listener to the size picker
    $sizePicker.addEventListener('submit', function() {
      event.preventDefault();
      let width = inputWidth.value // get width value
      let height = inputHeight.value // get height value
      // When size is submitted by the user, call makeGrid()
      makeGrid(width, height);
    })
  
    // function to create the grid
    function makeGrid(width, height) {
      $pixelCanvas.innerHTML = '';
      for (let i = 0; i < height; i++) { // iterate up until the height's value
        let row = $pixelCanvas.insertRow(i); // add a row into the grid
          for (let j= 0; j < width; j++ ) { // iterate up until the width's value
            let cell = row.insertCell(j); // add a cell into the row
            cell.addEventListener("click", function(event) {
              let color = $colorPicker.value // get the value of the color 
              cell.style.backgroundColor = color;}) // assign the color into the cell
        }
      }
    }
  