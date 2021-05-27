function addNumners(num1, num2) {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    console.log(sum);
}

addNumners(2, 3, 4, 5, 6, 7);