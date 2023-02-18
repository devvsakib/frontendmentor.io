function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}
const allCard = document.querySelectorAll('.card');
for (let card of allCard) {
    card.addEventListener('mouseover', function() {
        card.style.backgroundColor = randomColor();
    });
}