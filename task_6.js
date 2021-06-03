let arr = [2, 2, 2, 4];
let result = true;

for (let i = 1; i < arr.length; i++) {
    if (arr[0] !== arr[i]) result = false;
}

console.log(result);