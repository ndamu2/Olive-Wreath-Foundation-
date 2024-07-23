document.getElementById('startButton').addEventListener('click', startGame);

let foodItems = [];
const totalItems = 30;
const timeLimit = 20 * 1000; // 20 seconds

function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('message').innerText = '';
    document.getElementById('car').style.display = 'none';

    foodItems = [];
    const foodContainer = document.getElementById('foodItems');
    foodContainer.innerHTML = '';

    for (let i = 0; i < totalItems; i++) {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        foodItem.innerText = `Item ${i + 1}`;
        foodItem.addEventListener('click', () => packFoodItem(i));
        foodContainer.appendChild(foodItem);
    }

    setTimeout(checkGameStatus, timeLimit);
}

function packFoodItem(index) {
    if (!foodItems.includes(index)) {
        foodItems.push(index);
        document.getElementsByClassName('food-item')[index].style.backgroundColor = '#d4edda';
    }
}

function checkGameStatus() {
    if (foodItems.length === totalItems) {
        document.getElementById('message').innerText = 'Thank you for packing all the food items!';
        setTimeout(() => {
            document.getElementById('car').style.display = 'block';
        }, 3000);
    } else {
        document.getElementById('message').innerText = 'Time is up! Try again.';
        document.getElementById('startButton').style.display = 'block';
    }
}

