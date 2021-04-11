// Bài 1:

// let styles = ['Jazz', 'Blues'];
// console.log(styles);

// styles.push('Rock-n-Roll');
// console.log(styles);

// styles[(styles.length - 1) / 2] = 'Classic';
// console.log(styles);

// console.log(styles.shift());

// styles.unshift('Rap', 'Reggae');
// console.log(styles);

//------------------------------------------------
// Bài 2:

// numbers = [1, 2, 3, 4, 9, 6];

// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));

// console.log(numbers.sort());
// console.log(numbers.sort().reverse());

//------------------------------------------------
// Bài 3:

// myColor = ['Red', 'Green', 'White', 'Black'];

// let separator = prompt('Mời bạn nhập kĩ tự để nối:');

// console.log(myColor.join(separator.replaceAll(' ', '')));

//------------------------------------------------
// Bài 4:

// arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// let amountCharacters = 0;
// let amountNumber = 0;
// let newArr = [];

// for (arr of arr1) {
//     if (typeof arr === 'string') {
//         amountCharacters++;
//     } else {
//         amountNumber++;
//     }
// }

// // console.log(amountCharacters);
// // console.log(amountNumber);

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// for (let i = 0; i <= 4; i++) {
//     newArr[i] = arr1[getRandomInt(arr1.length)];
// }

// console.log(newArr);

//------------------------------------------------
// Bài 5:

// let library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         libraryID: 3245,
//     },
// ];

// 5.1

// for (book of library) {
//     console.log(`Mã: ${book.libraryID}`);
//     console.log(`Tác giả: ${book.author}`);
//     console.log(`Tiêu đề: ${book.title}`);
//     console.log(`------------------------`);
// }

// 5.2

// let bookId = Number(prompt('Mời bạn nhập ID của sách:'));

// for (book of library) {
//     if (book.libraryID === bookId) {
//         console.log(`Mã: ${book.libraryID}`);
//         console.log(`Tác giả: ${book.author}`);
//         console.log(`Tiêu đề: ${book.title}`);
//         console.log(`------------------------`);
//     }
// }

// 5.3

// let bookKeyWord = prompt('Mời bạn nhập từ khóa của sách:').toLowerCase();

// for (book of library) {
//     if (book.title.toLowerCase().includes(bookKeyWord)) {
//         console.log(`Mã: ${book.libraryID}`);
//         console.log(`Tác giả: ${book.author}`);
//         console.log(`Tiêu đề: ${book.title}`);
//         console.log(`------------------------`);
//     }
// }

//----------------------------------------------

// Bài 6:

// function renderChampionInfor(championObj) {
//     console.log(`Name: ${championObj.name}`);
//     console.log(`Title: ${championObj.title}`);
//     console.log(`Description: ${championObj.description}`);
//     console.log(`Tags: ${championObj.tags.join(', ')}`);
//     console.log(`---------------------------------------`);
//     console.log(`Chỉ số:`);
//     for (stat in championObj.stats) {
//         console.log(`${upperCaseFirtLetter(stat)}: ${championObj.stats[stat]}`);
//     }
//     console.log(`========================================`);
// }

// function upperCaseFirtLetter(str) {
//     return str[0].toUpperCase() + str.substring(1);
// }

// 6.1

// let nameChampion = prompt('Enter the champion name:').toLowerCase();

// for (champion of champions) {
//     if (champion.name.toLowerCase() === nameChampion) {
//         renderChampionInfor(champion);
//     }
// }

// 6.2

// let tagChampion = prompt('Enter the tag champion:');

// for (champion of champions) {
//     if (champion.tags.includes(tagChampion)) {
//         renderChampionInfor(champion);
//     }
// }

// 6.3

// for (champion of champions) {
//     if (champion.name[0] === 'A') {
//         renderChampionInfor(champion);
//     }
// }

// 6.4

// let allTag = [];

// for (champion of champions) {
//     if (!allTag.includes(...champion.tags)) {
//         allTag.push(...champion.tags);
//     }
// }

// console.log(allTag);

// 6.5

// let hpCondition = Number(prompt('Enter hp:'));

// for (champion of champions) {
//     if (champion.stats.hp > hpCondition) {
//         renderChampionInfor(champion);
//     }
// }

// 6.6

// let attackrangeMax = 0;

// for (champion of champions) {
//     if (champion.stats.attackrange > attackrangeMax) {
//         attackrangeMax = champion.stats.attackrange;
//     }
// }

// console.log(attackrangeMax);

// 6.7

// let armorMin = champions[0].stats.armor;

// for (champion of champions) {
//     if (champion.stats.armor < armorMin) {
//         armorMin = champion.stats.armor;
//     }
// }

// console.log(armorMin);
