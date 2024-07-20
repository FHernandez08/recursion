// iteration version
function fibs(num) {
    let fibsArray = [0, 1];

    for (let i = 0; i < num; i++) {
        fibsArray.push(fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2]);
    };

    return fibsArray;
}

console.log(fibs(6));

// recursive version
console.log("\nThis was printed recursively");

function fibsRec(num) {
    let array = []

    for (let i = 0; i < num; i++) {
        if (i == 0) {
            array.push(0);
        }
        else if (i == 1) {
            array.push(1);
        }
        else {
            array.push(array[array.length - 1] + array[array.length - 2]);
        }
    }

    return array;
}

console.log(fibsRec(9));