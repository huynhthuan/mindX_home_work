// Bài 1
// Ví dụ về 2 cách swap variables
// - Cách 1: sử dụng Destructuring assignment

// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b);

// - Cách 2: sử dụng 1 biến tạm thời

// let a = 1;
// let b = 2;
// let temp;

// temp = a;
// a = b;
// b = temp;

// console.log(a, b);

//------------------------------------------------------

// Bài 2:
// Chuyển string thành mảng
// let str = 'Hello there';
// let strArr = str.split(' ');
// console.log(strArr);

//------------------------------------------------------

// Bài 3:

// console.log(...strArr);

//------------------------------------------------------

// Bài 4:

// let commandArr = ['c', 'r', 'u', 'd', 'e'];
// let items = ['Jeans', 'T-shirts', 'Socks'];
// let command;

// do {
//     command = prompt(
//         'Hi there, welcome to shop admin panel, what do you want [C,R,U,D] \nPress E to exit program.'
//     );

//     if (command !== null) {
//         if (!commandArr.includes(command)) {
//             alert('This command is not suppported');
//         } else if (command === 'r') {
//             let itemList = 'The current items are: \n';
//             for (itemIndex in items) {
//                 itemList += `${parseInt(itemIndex) + 1} . ${
//                     items[itemIndex]
//                 } \n`;
//             }
//             alert(itemList);
//         } else if (command === 'c') {
//             let newItem = prompt('Enter the name of the new item:');
//             items.push(newItem);
//             alert('Done.');
//         } else if (command === 'u') {
//             let positionItem = Number(
//                 prompt('Enter the position you want to update:')
//             );
//             let newName = prompt('Enter the new name:');
//             items[positionItem - 1] = newName;
//             alert('Done.');
//         } else if (command === 'd') {
//             let positionItem = Number(
//                 prompt('Enter the position you want to delete:')
//             );
//             items.splice(positionItem - 1, 1);
//             alert('Done.');
//         }
//     } else {
//         break;
//     }
// } while (command !== 'e' && command !== '');

//------------------------------------------------------

// Bài 5:

// let total = 0;
// let numbersSeparated = prompt(
//     'Enter the sequence of Number, separated by command (,) :'
// );

// let numbers = numbersSeparated.split(',');

// for (number of numbers) {
//     total += Number(number);
// }

// alert(`The sum of them is ${total}`);

//------------------------------------------------------

// Bài 6:

// let numbersSeparated = prompt(
//     'Enter the sequence of Number, separated by command (,) :'
// );

// let numbers = numbersSeparated.split(',');

// for (indexNumber in numbers) {
//     numbers[indexNumber] = Number(numbers[indexNumber]);
// }

// alert(`The smallest numbers is ${Math.min(...numbers)}`);

//------------------------------------------------------

// Bài 7:

// const arr = [3, 4, 5, 6, 88, -11, 99];
// let numberKey = Number(prompt('Enter a number'));
// let indexKey = arr.findIndex((number) => number === numberKey);

// if (indexKey !== -1) {
//     alert(`${numberKey} is FOUND in my array at index ${indexKey}.`);
// } else {
//     alert(`${numberKey} is NOT found in my array.`);
// }

//------------------------------------------------------

// Bài 8:

// let sheeps = [5, 7, 300, 90, 24, 50, 75];

// console.log('Hello, my name is Huynh Thuan and here is my sheeps size:');
// console.log(...sheeps);

// console.log('');

// console.log('1 month laters.........................................');
// let maxSize = Math.max(...sheeps);
// console.log(`Now my biggets sheeps has size ${maxSize}, let's shave it.`);

// let indexMaxSize = sheeps.findIndex((sheepSize) => sheepSize === maxSize);
// sheeps[indexMaxSize] = 8;

// console.log('');

// console.log('Shearing.........................................');

// console.log('');

// console.log('After shearing, here is my flock');
// console.log(...sheeps);

// console.log('');

// for (let i = 1; i <= 4; i++) {
//     console.log(`MONTH ${i}`);
//     console.log(
//         `${i} month has, passed my sheeps have grown, here are their sizes.`
//     );
//     for (indexSheep in sheeps) {
//         sheeps[indexSheep] = sheeps[indexSheep] + 50;
//     }

//     console.log(...sheeps);
//     console.log('');
// }

// let totalSheepSize = sheeps.reduce((acc, current) => acc + current);

// console.log(`My flock has size in total: ${totalSheepSize}`);
// console.log(`I would get ${totalSheepSize} * 2$ = ${totalSheepSize * 2}$`);

//------------------------------------------------------

// Bài 10:

// let names = prompt('Enter a sequence of name');

// let namesChange = names.split(',').map((name) => '<' + name + '>');

// alert(`${names} => ${namesChange.join(',')}`);

//------------------------------------------------------

// Bài 11:

// let numbers = prompt('A sequence of numbers');
// let numbersOdd = numbers.split(',').filter((number) => number % 2 !== 0);
// alert(`${numbers} => ${numbersOdd.join(',')}`);
