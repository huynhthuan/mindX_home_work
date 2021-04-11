// Bài 1:
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white',
// };

// 1.1
// x nhận property từ object product

// 1.2
// for (let x in product) {
//     console.log(`${x}: ${product[x]}`);
// }

//---------------------------------------
// Bài 2:

// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };

// let { subject, createdBy, assignTo, dueDate, expectedHours } = task;

// console.log(
//     ` - ${subject} \n - ${createdBy} \n - ${assignTo} \n - ${dueDate} \n - ${expectedHours}`
// );

//---------------------------------------
// Bài 3:

// 3.1
// Kiểu dữ liệu lớp ngoài cùng là Object.

// 3.2
// Thuộc tính hit là một Array.

// 3.3
// Trong mỗi hit chúng ta tìm đến các thuộc tính job’s title, locations, salary, benefits, skills and requirements bằng cách sau:
// Ví dụ lấy ra jobTitle của hit đầu tiên:

// console.log(jobSearch.hits[0].jobTitle);

//-----------------------------------------
// Bài 4:

// let dictionary = {
//     debug:
//         'The process of figuring out why your program has a certain error and how to fix it',
//     done:
//         'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for "error"',
//     pm:
//         'The short version  of Project Manager, the person in charge of the final result of a project',
//     uiux:
//         'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
// };

// let keyWord;

// alert('Hi there, this is dictionary.');

// while (keyWord) {
//     keyWord = prompt('Enter a keyword:');

//     keyWordClear = keyWord.replace('/', '');

//     if (dictionary[keyWordClear]) {
//         alert(`${keyWordClear} : \n ${dictionary[keyWordClear]}`);
//     } else {
//         let newExplanation = prompt(
//             `We could not find your word: ${keyWordClear}, leave your explanation:`
//         );

//         if (newExplanation) {
//             dictionary[keyWordClear] = newExplanation;
//             alert('Done.');
//         } else {
//             alert('You cannot leave this field explanation blank!!!');
//         }
//     }
// }

//-------------------------------
// Bài 5:

// 5.1
// let products = [
//     {
//         name: 'Xiaomi portable charger 20000mah',
//         brand: 'Xiaomi',
//         price: '428',
//         color: 'White',
//         category: 'Charger',
//         providers: ['Phukienzero', 'Dientuccc'],
//     },
//     {
//         name: 'VSmart Active 1',
//         brand: 'VSmart',
//         price: '5487',
//         color: 'Black',
//         category: 'Phone',
//         providers: ['Tgdd', 'Ddghn', 'VhStore'],
//     },
//     {
//         name: 'IPhone X',
//         brand: 'Apple',
//         price: '21490',
//         color: 'Gray',
//         category: 'Phone',
//         providers: ['Tgdd'],
//     },
//     {
//         name: 'Samsung Galaxy A9',
//         brand: 'Samsung',
//         price: '8490',
//         color: 'Blue',
//         category: 'Phone',
//         providers: ['Tgdd'],
//     },
// ];

// function upperCaseFirtLetter(str) {
//     return str[0].toUpperCase() + str.substring(1);
// }

// console.log('-----------------------------');
// for (product of products) {
//     console.log(`Name: ${product.name}`);
//     console.log(`Price: ${product.price}`);
//     console.log('-----------------------------');
// }

// 5.2
// for (productIndex in products) {
//     console.log(`#${Number(productIndex) + 1}. ${products[productIndex].name}`);
//     console.log(`    Price: ${products[productIndex].price}`);
// }

// let productPos = Number(prompt('Enter product position:')) - 1;
// console.clear();
// let matchProduct = products[productPos];
// for (prop in matchProduct) {
//     console.log(`${upperCaseFirtLetter(prop)}:  ${matchProduct[prop]}`);
// }

// 5.3
// let category = prompt('Enter your category:').toLowerCase();

// for (productIndex in products) {
//     if (products[productIndex].category.toLowerCase() === category) {
//         console.log('-----------------------------');
//         console.log(
//             `#${Number(productIndex) + 1}. ${products[productIndex].name}`
//         );
//         console.log(`    Price: ${products[productIndex].price}`);
//     }
// }

// 5.4
// for (productIndex in products) {
//     console.log(`#${Number(productIndex) + 1}. ${products[productIndex].name}`);
//     console.log(`    Price: ${products[productIndex].price}`);
//     console.log(`    Providers: ${products[productIndex].providers.join(' ')}`);
// }

// let provider = prompt('Enter your provider:');
// console.clear();
// for (productIndex in products) {
//     if (products[productIndex].providers.includes(provider)) {
//         console.log('-----------------------------');
//         for (prop in products[productIndex]) {
//             if (prop === 'providers') {
//                 console.log(
//                     `${upperCaseFirtLetter(prop)}:  ${products[productIndex][
//                         prop
//                     ].join(',')}`
//                 );
//             } else {
//                 console.log(
//                     `${upperCaseFirtLetter(prop)}:  ${
//                         products[productIndex][prop]
//                     }`
//                 );
//             }
//         }
//     }
// }

//--------------------------------------------------
// Bài 6:

// let learningTask = [
//     {
//         title: 'HTML',
//         isComplete: false,
//     },
//     {
//         title: 'CSS',
//         isComplete: false,
//     },
//     {
//         title: 'Basic of JavaScript',
//         isComplete: false,
//     },
//     {
//         title: 'Node Package Manager (npm)',
//         isComplete: false,
//     },
//     {
//         title: 'Git',
//         isComplete: false,
//     },
// ];

// let command;
// let taskPos;

// function renderTasks() {
//     console.clear();
//     console.log(
//         'Hi there,  this is your learning tasks to front-end developer career:'
//     );

//     for (index in learningTask) {
//         console.log(
//             `[${learningTask[index].isComplete ? 'x' : ' '}] ${
//                 Number(index) + 1
//             }. ${learningTask[index].title}`
//         );
//     }

//     console.log('------------------------------------');
// }

// renderTasks();

// while (true) {
//     command = prompt('Enter your command (New, Delete, Update, Complete)');
//     if (command !== null) {
//         switch (command.toLowerCase()) {
//             case 'new':
//                 let newTask = prompt('Enter new task:');
//                 learningTask.push({
//                     title: newTask,
//                     isComplete: false,
//                 });
//                 renderTasks();
//                 break;
//             case 'delete':
//                 taskPos = Number(prompt('Enter position:')) - 1;
//                 learningTask.splice(taskPos, 1);
//                 renderTasks();
//                 break;
//             case 'update':
//                 taskPos = Number(prompt('Enter position:')) - 1;
//                 let newTitle = prompt('Enter new title:');
//                 learningTask[taskPos].title = newTitle;
//                 renderTasks();
//                 break;
//             case 'complete':
//                 taskPos = Number(prompt('Enter position:')) - 1;
//                 learningTask[taskPos].isComplete = true;
//                 renderTasks();
//                 break;
//             default:
//                 continue;
//         }
//     } else {
//         break;
//     }
// }

//--------------------------------------------------
// Bài 15:

// 15.1:

// console.log('Job hits');
// console.log(jobData);
// console.log('-------------------');
// console.log('First job:');

// 15.2;

// console.log(jobData.hits[0]);
// console.log('-------------------');

// 15.3;

// console.log('First job hit title:');
// console.log(jobData.hits[0].jobTitle);
// console.log('-------------------');

// 15.4;

// console.log('First job hit benefits:');
// console.log(jobData.hits[0].benefits);
// console.log('-------------------');

// 15.5;

// console.log('First job hit benefits value:');
// for (jobBenefit of jobData.hits[0].benefits) {
//     console.log(`- ${jobBenefit.benefitValue}`);
// }
// console.log('-------------------');

// 15.6 + 15.7;

// console.log('jobTitle, locations, skills, jobSalary of all job hits:');
// for (hit of jobData.hits) {
//     console.log(`Title: ${hit.jobTitle}`);

//     console.log(`Salary: ${hit.jobSalary}`);

//     console.log(`Locations: \n`);
//     for (jobLocation of hit.locations) {
//         console.log(`- ${jobLocation}`);
//     }

//     console.log(`Benefits: \n`);
//     for (jobBenefit of hit.benefits) {
//         console.log(`- ${jobBenefit.benefitValue}`);
//     }

//     console.log(`Skills: \n`);
//     for (jobSkill of hit.skills) {
//         console.log(`- ${jobSkill}`);
//     }

//     console.log('-------------------');
// }

//-----------------------------------------------
// Bài 16:

// const oldData = {
//     firedRice: {
//         Price: 30,
//         vnName: 'Com rang dua bo',
//     },
//     noddle: {
//         price: 20,
//         vnName: 'My tom chanh',
//     },
//     pho: {
//         price: 35,
//         vnName: 'Pho bo tai chin',
//     },
// };

// const { noddle, ...newData } = oldData;

// console.log(newData);
