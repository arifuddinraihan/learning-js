// Fix a array list which has mixed serial numbers, show the array as chain 1 2 3 4.



function numSerial(num) {
    let list = [1];
    for (let j = 0; j < num.lenght; j++ ) {
        for (let i = 0; i < num.lenght; i++) {
            if (num[i] == list[j] + 1) {
                list.push(num[i])
                continue;
            }
        }
    }
    console.log(list);
}

var numbers = [5, 6, 7, 1, 8, 9, 10, 3, 2, 4]
numSerial(numbers);
// console.log(list);