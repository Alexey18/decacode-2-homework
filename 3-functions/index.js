const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json');
const data = fs.readFileSync(pathToJSON, 'utf8');

let str = JSON.parse(data);


function countUsers(str){
    return str.length;
}
console.log(countUsers(str));


function averageAge(str){
    let summAge = 0;
    for (i = 0; i < str.length; i++){
        summAge += str[i].age;
    }
    return summAge/str.length;
}
console.log(averageAge(str));

function ageName(str){
    let result = '';
    for (i = 0; i < str.length; i++){
        result += str[i].age + ' ' + str[i].name + ', ';
    }
    return result;
}
console.log(ageName(str));

function selectPaint(str){
    let result = '';
    for (i = 0; i < str.length; i++){
        for (j = 0; j < str[i].skills.length; j++){
            if (str[i].skills[j] == 'Paint'){
                result += str[i].name;
            }
        }
    }
    return result;
}
console.log(selectPaint(str))