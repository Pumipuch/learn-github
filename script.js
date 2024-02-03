function cToF(celsius) {
    var cTemp = celsius;
    var ctoFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + "\xB0C is " + ctoFahr + "\xB0C";
    console.log(message);
}
cToF(30);

function fToC(fahrenheit){
    var fTemp = fahrenheit;
    var fTocel = (fTemp - 32) * 5 / 9;
    var message = fTemp + "\xB0C is " + fTocel + "\xB0C";
    console.log(message);
}
fToC(86);