module.exports = function toReadable (number) {
    if(number < 10) {
        return translateSingle(number);
    } else if (number < 100) {
        return translateDecimal(number);
    } else if(number < 1000) {
        return translateHundred(number);
    }
}

var numberConfig = {
    0 : 'zero', 
    1 : 'one', 
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
    20 : 'twenty',
    30 : 'thirty',
    40 : 'forty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety',
    100 : 'hundred',
};


function translateHundred(number) {
    if(number % 100 == 0) {
        return numberConfig[number / 100] + ' ' + numberConfig[100];
    } else {
        return numberConfig[Math.floor(number / 100)] + ' ' + numberConfig[100] + ' ' + translateDecimal(number % 100);
    }
}

function translateDecimal(number) {
    if(number % 10 == 0 || number < 20) {
        return numberConfig[number];
    } else {
        return numberConfig[(Math.floor(number / 10)) * 10] + ' ' + numberConfig[Math.floor(number % 10)];
    }
}

function translateSingle(number) {
    return numberConfig[number];
}
