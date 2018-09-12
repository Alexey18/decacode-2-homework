/*const numbers = process.argv.slice(2);
let summ = 0;
let average = 0;

for (i = 0; i < numbers.length; i++){
    summ += parseInt(numbers[i]);
    average = summ/i;
}

console.log(numbers);
console.log(summ);
console.log(average);
*/


function leapYear(year){
    if (year % 400 !== 0 & year % 100 == 0 || year % 4 !== 0) return 'not leap';
    return 'leap';
}

for (i = 1900; i < 2018; i++){
    console.log(i + " is " + leapYear(i) + ' year.');
}