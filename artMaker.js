window.onload = function(){

  let container = document.querySelector('#canvas')

  for(let i = 0; i < 400; i++) {
    let box = document.createElement('span');
    box.setAttribute("class", "canvasPixel");
    box.style.border = '1px solid black';
    box.style.height = '8px';
    box.style.width = '8px';

    container.appendChild(box);
  }

  document.body.appendChild(container);

  let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  for(let color of colorChoices) {
    let palette = document.querySelector('#palette');
    let paletteColor = document.createElement('span');
    paletteColor.setAttribute("class", "palettePixel");
    paletteColor.style.border = '1px solid black';
    paletteColor.style.height = '33px';
    paletteColor.style.width = '33px';
    paletteColor.style.backgroundColor = color;

    palette.appendChild(paletteColor);
  }

  let currColor = '';

  let palettePixel = document.querySelectorAll('.palettePixel');
  for(let pixel of palettePixel) {
    pixel.addEventListener('click', function() {
      currColor = pixel.style.backgroundColor;
    })
  }

  let canvasPixel = document.querySelectorAll('.canvasPixel');
  for(let pixel of canvasPixel) {
    pixel.addEventListener('click', function() {
      pixel.style.backgroundColor = currColor;
    });
  }
}