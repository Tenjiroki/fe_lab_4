

const n = 28; 
const targetIndex = (n % 10) + 1;

let firstElementClicked = false;
let secondElementClicked = false;

const allElements = document.querySelectorAll('body *');

allElements.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (index + 1 === targetIndex) {
            if (!firstElementClicked) {
                element.style.backgroundColor = 'lightblue';
                element.style.color = 'white';
            } else {
                element.style.backgroundColor = '';
                element.style.color = '';
            }
            firstElementClicked = !firstElementClicked;
        }

        if (index + 1 === targetIndex + 1) {
            const nextElement = document.querySelectorAll('body *')[index];
            if (!secondElementClicked) {
                nextElement.style.backgroundColor = 'lightgreen';
                nextElement.style.color = 'black';
            } else {
                nextElement.style.backgroundColor = '';
                nextElement.style.color = '';
            }
            secondElementClicked = !secondElementClicked;
        }
    });
});


const image = document.getElementById('city-image');
const addButton = document.getElementById('addButton');
const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');
const removeButton = document.getElementById('removeButton');

let imageVisible = true;

addButton.addEventListener('click', () => {
    if (!imageVisible) {
        image.style.display = 'block';
        imageVisible = true;
    }
});

increaseButton.addEventListener('click', () => {
    image.width += 50;
});

decreaseButton.addEventListener('click', () => {
    if (image.width > 50) image.width -= 50;
});

removeButton.addEventListener('click', () => {
    image.style.display = 'none';
    imageVisible = false;
});
