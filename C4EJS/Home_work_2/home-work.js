// Bài 1:
//1. What are var and const in JavaScript?

// var là từ khóa để khai báo biến trong JS
// const là từ khóa để khai báo hằng trong JS được bổ sung cùng với ES6

//2. What are the differences between let and var?

//Sự khác nhau giữa var và let thể hiện qua các điểm sau
// var :
// + Sẽ khai báo biến với phạm vi biến là toàn cầu hoặc phạm vi biến là cục bộ nếu để trong function.
// + Biến được khai báo bằng var có thể được khai báo lại và cập nhật.
// + Hoisting của biến được khai báo bằng var sẽ được đưa lên đầu phạm vi và khởi tạo với giá trị undefined.

// let :
// + Sẽ khai báo biến với phạm vi khối và chỉ sử dụng được trong khối đó.
// + Biến được khai báo bằng let không thể khai báo lại nhưng có cập nhật được. Tuy nhiên có thể khai báo lại biến bằng let ở các phạm vi khối khác nhau.
// + Hoisting của biến được khai báo bằng let sẽ đưa biến đó lên đàu phạm vi và không khởi tạo giá trị, nếu sử dụng biến trước khi khai báo sẽ bị báo lỗi tham chiếu.

//3. What are the differences between let and const?

//Sự khách nhau giữa let và const
// let và const có một số điểm tương đồng với nhau như không thể khai báo lại, có phạm vi sử dụng trong khối.
// Điểm khác của const so với let là:
// + Biến được khai báo bằng const thì không thể cập nhật được giá trị. Nhưng đối với một đối tượng được khai báo bằng const chúng ta có thể thêm thuộc tính cho đối tượng đó.
// + Khi biến được khai báo bằng const thì phải khởi tạo giá trị ngay tại thời điểm khai báo.
// + Hoisting của biến được khai báo bằng const sẽ được đưa lên đầu phạm vi và không được khởi tạo giá trị.

//4.What to use in what cases?

// let và var được sử dụng khi chúng ta khai báo biến.
// const được sử dụng khi chúng ta khai báo các biến không thể thay đổi giá trị.

//------------------------------------------------------------------------------

//Bài 2:
//1. What is Boolean?

// Boolean là một kiểu dữ liệu logic có hai giá trị là true và false.

//2. What results in Boolean?

//Kết quả của Boolean là true hoặc false

//------------------------------------------------------------------------------

//Bài 3:

//a. Write a program to print out 7 numbers, starting from 0 (no user input).

// let n = Number(prompt('Mời bạn nhập số n: '));

// for (let i = 0; i < n; i++) {
//     console.log(i);
// }

//b. Write a program to print out n numbers, starting from 0, n entered by user.

// let amount = Number(prompt('Mời bạn nhập số lần in các số từ 0:'));

// for (let i = 0; i < amount; i++) {
//     console.log(i);
// }

//c. Write a program to print out a sequence of numbers, starting from 3, ending before n, n entered by user.

// let end = Number(prompt('Mời bạn nhập số kết thúc:'));

// for (let i = 3; i < end; i++) {
//     console.log(i);
// }

//d. Write a program to print out a sequence of numbers, starting from c, ending before n, c and n entered by user.

// let start = Number(prompt('Mời bạn nhập c:'));
// let end = Number(prompt('Mời bạn nhập n:'));

// for (let i = start; i < end; i++) {
//     console.log(i);
// }

//e. Write a program to print out a sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user.

// let start = Number(prompt('Mời bạn nhập c:'));
// let end = Number(prompt('Mời bạn nhập n:'));

// for (let i = start; i < end; i += 3) {
//     console.log(i);
// }

//f. Write a program to print out a sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user.

// let start = Number(prompt('Mời bạn nhập c:'));
// let end = Number(prompt('Mời bạn nhập n:'));
// let step = Number(prompt('Mời bạn nhập s:'));

// for (let i = start; i < end; i += step) {
//     console.log(i);
// }

//------------------------------------------------------------------------------

//Bài 4:

// let n = Number(prompt('Mời bạn nhập n:'));
// let result = 1;
// for (let i = 1; i <= n; i++) {
//     result *= i;
// }
// alert(`The factorial of ${n} is ${result}`);

//------------------------------------------------------------------------------

//Bài 5:

// let yourAge = Number(prompt('Mời bạn nhập tuổi của mình: '));

// if (yourAge < 14) {
//     alert('You are not enough to view this content.');
// } else {
//     alert('You are enough to view this content.');
// }

//------------------------------------------------------------------------------

//Bài 6:

// let x = Number(prompt('Mời bạn nhập số x: '));

// if (x >= 0 && x < 4) {
//     alert('Lower half of 9');
// } else if (x > 4 && x < 9) {
//     alert('Higher half of 9');
// }

//------------------------------------------------------------------------------

//Bài 7:

// let x = Number(prompt('Mời bạn nhập số x: '));
// let n = Number(prompt('Mời bạn nhập số n: '));

// if (x >= 0 && x < n / 2) {
//     alert(`${x} is in Lower half of ${n}`);
// } else if (x > n / 2 && x < n) {
//     alert(`${x} is in Higher half of ${n}`);
// }

//------------------------------------------------------------------------------

//Bài 8:

// let x = Number(prompt('Mời bạn nhập số cần kiểm tra: '));

// if (x % 2 === 0) {
//     alert(`${x} is an even number`);
// } else {
//     alert(`${x} is an odd number`);
// }

//------------------------------------------------------------------------------

//Bài 9:
//a. Write a program to print out 6 L’s and H’s, half L’s, half H’s (L means low, H means high).

// for (let i = 1; i <= 6; i++) {
//     if (i <= 3) {
//         console.log('L');
//     } else {
//         console.log('H');
//     }
// }

//b. Write a program to print out n L’s and H’s in total, n entered by user.

// let n = Number(prompt("Mời bạn nhập tổng số L's và H's: "));

// for (let i = 1; i <= n; i++) {
//     if (i < n / 2) {
//         console.log('L');
//     } else {
//         console.log('H');
//     }
// }

//c. Write a program to print out 8 1’s and 0’s in total, consecutively.

// for (let i = 1; i <= 8; i++) {
//     if (i % 2 === 0) {
//         console.log('1');
//     } else {
//         console.log('0');
//     }
// }

//d. Write a program to print out n 1’s and 0’s in total, consecutively, n entered by user.

// let n = Number(prompt("Mời bạn nhập tổng số 1's và 0's: "));

// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         console.log('1');
//     } else {
//         console.log('0');
//     }
// }

//------------------------------------------------------------------------------

//Bài 10:

// let mass = Number(prompt('Mời bạn nhập cân nặng (kg): '));
// let height = Number(prompt('Mời bạn nhập chiều cao (cm): ')) / 100;

// let bmi = mass / (height * height);
// let notice = 'You are ';

// alert(`Your BMI is ${Math.round(bmi * 100) / 100}`);

// if (bmi < 16) {
//     alert(notice + 'severely.');
// } else if (bmi > 16 && bmi < 18.5) {
//     alert(notice + 'underweight.');
// } else if (bmi > 18.5 && bmi < 25) {
//     alert(notice + 'normal.');
// } else if (bmi > 25 && bmi < 30) {
//     alert(notice + 'overweight.');
// } else if (bmi > 30) {
//     alert(notice + 'obese.');
// }

//------------------------------------------------------------------------------

//Bài 11:

// showGrid(50);
// setSpeed(200);

//Draw a square

// goto(-249, 99);
// width(5);
// color('blue');
// for (let i = 1; i <= 4; i++) {
//     forward(120);
//     right(90);
// }

//Draw a triangle

// goto(102, 98);
// width(5);
// color('green');
// for (let i = 1; i <= 3; i++) {
//     forward(120);
//     right(120);
// }

//Draw a pentagon

// goto(-299, -251);
// width(5);
// color('red');
// for (let i = 1; i <= 5; i++) {
//     forward(120);
//     right(72);
// }

//Draw a hexagon

// goto(52, -244);
// width(5);
// color('yellow');
// for (let i = 1; i <= 6; i++) {
//     forward(120);
//     right(60);
// }

//------------------------------------------------------------------------------

//Bài 12:

// showGrid(50);
// setSpeed(1);

// let edge = Number(prompt('Mời bạn nhập số cạnh của hình cần vẽ: '));

// goto(-248, 98);
// width(5);
// color('black');
// for (let i = 1; i <= edge; i++) {
//     forward(50);
//     right(360 / edge);
// }

//------------------------------------------------------------------------------

//Bài 13:

// showGrid(50);
// setSpeed(250);

// let polygon = Number(prompt('Mời bạn nhập số hình cần vẽ: '));

// let edge = 3;
// for (let i = 1; i <= polygon; i++) {
//     goto(-200, -101);
//     width(5);
//     for (let j = 0; j <= edge; j++) {
//         if (i % 2 === 0) {
//             color('green');
//         } else {
//             color('black');
//         }
//         forward(120);
//         if (j !== edge) {
//             right(360 / edge);
//         }
//     }
//     edge++;
// }

//------------------------------------------------------------------------------

//Bài tập thêm

//In ra số chẵn trong khoảng từ 1 -> 100.

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 100);

// while (i <= 100) {
//     console.log(i);
//     i++;
// }

//In ra số chẵn trong khoảng từ 1 -> n, n nhập vào từ bàn phím.

// let n = Number(prompt('Mời bạn nhập số n: '));
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= n);

// while (i <= n) {
//     console.log(i);
//     i++;
// }

//Tìm số chẵn đầu tiên sau n, n được nhập vào từ bàn phím.

// let n = Number(prompt('Mời bạn nhập số n: '));

// do {
//     n++;
//     if (n % 2 === 0) {
//         console.log(n);
//     }
// } while (n % 2 !== 0);

// while (true) {
//     n++;
//     if (n % 2 === 0) {
//         console.log(n);
//         break;
//     }
// }

//So sánh while và do...while

// Trong vòng lặp while, điều kiện sẽ được kiểm tra trước khi vòng lặp bắt đầu, nếu điều kiện là true thì vòng lặp sẽ được thực hiện.
// Trong vòng lặp do...while, điều kiện sẽ được kiểm tra vào cuối vòng lặp, và sẽ có ít nhất một lần lặp xảy ra ngay cả khi điều kiện false.
