var countdownElement = document.getElementById('countdown-value');
var targetDate = new Date('2023-05-19T10:30:00-04:00').getTime();

var countdownInterval = setInterval(function () {
    var now = new Date().getTime();

    var remainingTime = targetDate - now;

    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = 'Potomac Yard-VT is now open!';
        return;
    }

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    countdownElement.innerHTML = 'Potomac Yard-VT opens in: ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
}, 500);