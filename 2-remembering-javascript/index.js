const numbers = process.argv.slice(2);
let summ = 0;
let average = 0;

for (i = 0; i < numbers.length; i++){
    summ += parseInt(numbers[i]);
    average = summ/i;
}

console.log(numbers);
console.log(summ);
console.log(average);
