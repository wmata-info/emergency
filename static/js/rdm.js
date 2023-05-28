var messages = [
    'We\'re evolving',
    'In progress',
    'Working on that',
    'Crafting for you',
    'Fine-tuning for you',
    'Updates underway'
];

function randomiseMessage() {
    var randomIndex = Math.floor(Math.random() * messages.length);
    var randomMessage = messages[randomIndex];
    var spanElement = document.getElementById('hero');
    spanElement.textContent = randomMessage;
}

randomiseMessage();