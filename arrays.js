const lang = ['javascript', 'python', 'C++'];
// length
// console.log(lang.length);

// accessing the variable from array
// console.log(lang[1]);

// Add element to the array - adds at last
// lang.push('dart');

// Add element to the array - adds at first
// lang.unshift('java')

// Remove element from the array - removes last element
// lang.pop();

// Remove element from the array - removes first element
// lang.shift();

// console.log(lang);

// const actors = [
//     {
//         name: 'Actor 1',
//         payment: 100
//     },
//     {
//         name: 'Actor 2',
//         payment: 200
//     },
//     {
//         name: 'Actor 3',
//         payment: 150
//     }
// ]

// for(let i = 0; i < actors.length; i++) {
//     actors[i].payment -= 10;
// }

// ForEach
// actors.forEach((actors) => {
//     actors.payment -= 10;
// })


// forOf Loop
// for(let actor of actors) {
//     actors.payment -= 10;
//     console.log(actor);
// }
// console.log(actors);

// filter

// const students = [
//     {
//         name: 'Student 1',
//         marks: 45
//     },
//     {
//         name: 'Student 2',
//         marks: 60
//     },
//     {
//         name: 'Student 3',
//         marks: 35
//     }
// ]

// const failed = students.filter((student) => student.marks < 45);

// console.log(failed);  

// Map
// const users = [
//     {
//         fname: 'John',
//         lname: 'Doe'
//     },
//     {
//         fname: 'Jane',
//         lname: 'Doe'
//     }
// ]

// const finalUsers = users.map((user) => {
//     return {
//         fullname: user.fname + ' ' + user.lname
//     }
// })

// console.log(finalUsers);

// Reduce
const movies = [
    {
        name: 'Interstaler',
        budget:  100
    },
    {
        name: 'Social',
        budget:  150
    },
    {
        name: 'Matrix',
        budget:  300
    }
]

// let total = 0;

// movies.forEach((movie) => {
//     total += movie.budget;
// })

// const totalBudget = movies.reduce((total, movie) => {
//     total += movie.budget;
//     return total;
// }, 0)

// console.log(totalBudget);

// Indexof

// const admins = [2, 1, 5];

// const user = {
//     name: 'XYZ',
//     id: 6
// }

// const isAdmin = admins.indexOf(user.id) > -1;
// console.log(admins.indexOf(user.id));

// includes
// console.log(admins.includes(user.id));

// find

// const users = [
//     { 
//         name: 'xyz',
//         id: 1
//     },
//     { 
//         name: 'abc',
//         id: 2
//     },
//     { 
//         name: 'pqr',
//         id: 3
//     }
// ];

// const myuser = users.find((user) => {
//     if(user.id === 2) {
//         return true;
//     }
//     return false;
// });

// console.log(myuser);

// sort
// const names = ['shiv', 'jeel'];
// console.log(names.sort());

// splice - to delete items from the array
const names = ['shiv', 'jeel', 'vrushti'];
names.splice(1, 1);
console.log(names);