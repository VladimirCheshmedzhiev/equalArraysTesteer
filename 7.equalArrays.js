function equalArrays(numbers, numbers2) {

    let sum = 0;
    let sum2 = 0;
    let equal = true;

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i]);
    }
    for (let i = 0; i < numbers2.length; i++) {
        numbers2[i] = Number(numbers2[i]);
    }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers2[i]) {
            sum += numbers[i];
            sum2 += numbers2[i];
            continue
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            equal = false;
            break;
        }
    }
    if (equal == true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['1', '2', '3', '4', '5'],
    ['1', '2', '4', '4', '5'])