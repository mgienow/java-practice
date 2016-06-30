var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Would you like some decaf?';
} else if (hourNow > 12) {
    greeting = 'Afternoon caffeine bump?';
} else (hourNow > 0) {
    greeting = 'Here is your life-giving coffee!';
}

document.write('<h3>' + greeting + '</h3>');
