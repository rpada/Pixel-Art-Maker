// Select color input
// Select size input
    const $colorPicker = document.getElementById("colorPicker");
    const $sizePicker = document.getElementById("sizePicker");
    const $pixelCanvas = document.getElementById("pixelCanvas");
    const $inputWidth = document.getElementById("inputWidth");
    const $inputHeight = document.getElementById("inputHeight");
  
    $sizePicker.addEventListener('submit', function() {
      event.preventDefault();
      let width = inputWidth.value
      let height = inputHeight.value
      // When size is submitted by the user, call makeGrid()
      makeGrid(width, height);
    })
  
    function makeGrid(width, height) {
      $pixelCanvas.innerHTML = '';
      for (let i = 0; i < width; i++) {
        let row = $pixelCanvas.insertRow(i);
          for (let j= 0; j < height; j++ ) {
            let cell = row.insertCell(j);
            cell.addEventListener("click", function(event) {
              let color = $colorPicker.value
              cell.style.backgroundColor = color;})
        }
      }
    }
  