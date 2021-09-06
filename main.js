// let names = ['Johanna Smith','Anna Hey','Angely Rosha'];
// let photos = ['2.jpg','3.jpg','4.jpg'];

// let i = 0;
// setInterval(() => {
//     if(i==photos.length -1)
//     i = 0;
//     profileRand(i++);
// }, 2000);

// function profileRand(i){
//     console.log(i)
//     let randomImage = photos[i];
//     document.getElementsByClassName('user-id').src = `img/${randomImage}`;
//     let random1= names[i];
//     document.getElementById('user-name').innerText=random1;
// }


// let namesArr = ['Jessica Parker','Eleanor Smith', 'Samantha Kennedy', 'Chris Brighton', 'John Kerry','Alex Biden', 'Donald Jeckson' ];
// let images = ['2.jpg', '3.jpg', '4.jpg', 'images.jpg','6.jpg', '7.jpg', '8.jpg'];

// let i = 0;
// setInterval(function(){
//     if(i == images.length - 1)
//         i = 0;
//     setRandomProfile(i++);
// },2000);


// function setRandomProfile(i){
//     console.log(i)
//     // let i = Math.floor(Math.random() * images.length);
//     //for (let i = 0;i < images.length; i++) {
//         let randomImgUrl = images[i];
//         document.getElementById("profile-img").src = `./images/${randomImgUrl}`;
//     //}
//     //for (let j = 0;j < namesArr.length; j++) {
//         let randomName = namesArr[i];
//         document.getElementById("profile-name").innerText = randomName;    
//     //}
// }

let users = [
    {
        name: 'Essie Walton',
        image:'img/1.jpg'
    },
    {
        name:'Anna Hey',
        image:'img/2.jpg'
    },
    {
        name:'Angely Rosha',
        image:'img/3.jpg'  
    },
    {
        name:'Johanna Smith',
        image:'img/4.jpg' 
    }
];

const imageEl = document.getElementById('user-id');
const h2El = document.getElementById('full-name');

console.log(imageEl.src);
console.log(h2El.innerText);

// setTimeout(() => {
//     imageEl.src = users[0].image;
//     h2El.innerText = users[0].name;
// }, 1500);

// setTimeout(() => {
//     imageEl.src = users[1].image;
//     h2El.innerText = users[1].name;
// }, 3000);

// setTimeout(() => {
//     imageEl.src = users[2].image;
//     h2El.innerText = users[2].name;
// }, 4500);

///////////////////////
let i =0;
setInterval(function(){
    if(i==users.length) {i = 0 };
    imageEl.src = users[i].image;
    h2El.innerText = users[i].name;
    i++;
},1500)