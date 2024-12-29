const cityImage = document.getElementById('city-image');
const addButton = document.getElementById('addButton');
const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');
const removeButton = document.getElementById('removeButton');

addButton.addEventListener('click', () => {
    if (!cityImage.src) {
        cityImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%28%D0%B4%D0%B5%D1%80.%29_1703%2C_1834_%D1%80%D1%80._%D0%A1%D1%96%D0%BB%D1%8C_7762-HDR.jpg/1280px-%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%28%D0%B4%D0%B5%D1%80.%29_1703%2C_1834_%D1%80%D1%80._%D0%A1%D1%96%D0%BB%D1%8C_7762-HDR.jpg";
    }
});

increaseButton.addEventListener('click', () => {
    const currentWidth = cityImage.width;
    cityImage.width = currentWidth + 53;
});

decreaseButton.addEventListener('click', () => {
    const currentWidth = cityImage.width;
    if (currentWidth > 53) {
        cityImage.width = currentWidth - 53;
    }
});

removeButton.addEventListener('click', () => {
    cityImage.src = "";
    cityImage.alt = "Зображення видалено";
});
