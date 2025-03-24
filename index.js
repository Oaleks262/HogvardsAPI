
// обробка кнопок
let allPersons = document.querySelector('.content__btn');
let classMain = document.querySelector('.main');
let contentBox = document.querySelector('.content__box');

if (allPersons && classMain && contentBox) {
    allPersons.addEventListener('click', function () {
        classMain.style.height = '100%'; 
        contentBox.classList.add('show'); 
    });
} else {
    console.error('❌ Помилка: один або кілька елементів не знайдено!');
}


//  Обробка запитів

// let students =  fetch('https://hp-api.onrender.com/api/characters/students')
// .then((res) => {
//    return res.json()
// }).then((data) => {
//     console.log(data)
// })

// let staff = await fetch('https://hp-api.onrender.com/api/characters/staff')
// .then((res) => {
//     return res.json()
// }).then((data) => {
//     console.log(data)
// })

// let nameHouse = (name) => {
//     switch (name){
//         case "gryffindor": 
//             url = 'https://hp-api.onrender.com/api/characters/house/gryffindor';
//             break;
//         case "hufflepuff":  
//             url = 'https://hp-api.onrender.com/api/characters/house/hufflepuff';
//             break;
//         case "ravenclaw":
//             url = 'https://hp-api.onrender.com/api/characters/house/ravenclaw';
//             break;
//         case "slytherin":  
//             url = 'https://hp-api.onrender.com/api/characters/house/slytherin';
//             break;
//     }

//     fetch(url)
//     .then((res)=> {
//     return res.json()
//     })
//     .then((data) => {
//     console.log(data);
//     })
//     .catch((error) => {
//     console.error(`Помилка : `, error)
//     })
// }
// let house = await nameHouse().then((data) => {
//     console.log("House characters:", data);
// });


