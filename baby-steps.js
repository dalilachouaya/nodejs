//console.log(process.argv)
    /*let input = process.argv;

const sum = (num) => {

    let result = 0;

    for(let i = 2; i < num.length; i++){
        result += parseInt(num[i]);
    }
    return result;
}

console.log(sum(input));*/


let numbers = process.argv;
var sum = 0
var counter = 2

// Enter your code below
while (counter < numbers.length) {
    sum += parseInt (numbers[counter])
    counter += 1
}

console.log(sum);