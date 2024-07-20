function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid_index = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid_index);
    const right = arr.slice(mid_index);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let array = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift());
        }
        else {
            array.push(right.shift());
        }
    }

    return [...array, ...left, ...right];
}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));