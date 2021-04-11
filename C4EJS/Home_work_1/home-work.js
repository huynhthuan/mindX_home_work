//Câu hỏi 1
//3 ví dụ về nhận lỗi thông báo đặt tên biến không hợp lệ

//Tên biến bắt đầu bằng số
// let 272aaa;

//Tên biến bắt đầu bằng kí tự đặc biệt ngoại trừ "_" và "$".
// let @aaa;

//Tên biến trùng với các từ riêng của js như let, const, function,....
// let let = 5;

//Tên biến trùng với biến đã khai báo trước đó
// let name = 'Huynh';
// let name = 'Thuan';

//Sử dụng typeof để check kiểu dữ liệu

console.log(typeof 'hahahahaha');

//---------------------------------------------------//

//Câu hỏi 2
// 1 - b
// 2 - a
// 3 - e
// 4 - c

//---------------------------------------------------//

//Câu hỏi 3

let message = 'Coding is great';
console.log(message);

let studentCount = 0;
console.log(studentCount);

console.log(message.toLocaleLowerCase());

//---------------------------------------------------//

//Câu hỏi 4

message = 'Coding might not be easy, but still great';
console.log(message);

studentCount = 19;
console.log(studentCount);

studentCount++;
console.log(studentCount);

//---------------------------------------------------//

// Câu hỏi 5
alert('You look beautyful today !!!');

//---------------------------------------------------//

//Câu hỏi 6
let yourName = prompt('Chào bạn, hãy nhập tên của bạn đi!');

alert('Chào bạn ' + yourName);

//---------------------------------------------------//

//Câu hỏi 7

let firstName = prompt('Chào bạn, hãy nhập họ của bạn đi!');
let lastName = prompt('Chào bạn, hãy nhập tên của bạn đi!');

alert('Chào bạn ' + firstName + ' ' + lastName);

//---------------------------------------------------//

//Câu hỏi 8

let edge = prompt('Hãy một cạnh hình vuông');

alert('Diện tích hình vuông là: ' + edge * edge);

//---------------------------------------------------//

//Câu hỏi 9

let r = prompt('Hãy nhập bán kính đường tròn');

alert('Diện tích hình tròn là: ' + r * r * Math.PI);

//---------------------------------------------------//

//Câu hỏi 10
let cDegree = prompt('Hãy nhập nhiệt độ C');

alert(cDegree + ' (C) = ' + ((9 * cDegree) / 5 + 32) + ' (F)');
