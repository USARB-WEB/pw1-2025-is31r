document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    nameInput.addEventListener('input', function() {
        const reversedName = nameInput.value.split('').reverse().join('');
        document.getElementById('nameReversed').textContent = reversedName;
    });

    const increaseButton = document.getElementById('increaseValue');
    increaseButton.addEventListener('click', function() {
        const value = parseInt(document.getElementById('number').value);
        document.getElementById('number').value = value + 1;
    });

    const decreaseButton = document.getElementById('decreaseValue');
    decreaseButton.addEventListener('click', function() {
        const value = parseInt(document.getElementById('number').value);
        document.getElementById('number').value = value - 1;
    });

    setTimeout(() => {
        document.body.style.backgroundColor = 'lightblue';
    }, 5000);

    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    let index = 0;

    setInterval(() => {
        document.body.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);
});