// // DOM Selection
// //document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color ="red";
judul.style.backgroundColor ="#ccc";
judul.innerHTML ="Belajar DOM";



// //document.getElementsByTagName()
// // -> HTMLCollections
// // get Collection of element
const p = document.getElementsByTagName('p');
p[0].style.backgroundColor = 'lightblue';
p[1].style.backgroundColor = 'lightblue';
p[2].style.backgroundColor = 'yellow';
p[3].style.backgroundColor = 'green';

// // with looping
for(let i = 0; i < p.length; i++){
    p[1].style.backgroundColor = 'lightblue';
}


// // document.getElementByClassName()
// //-> HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini diubah dari javascript'

// //document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'blue';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor ='orange';

// // set the first p
//  const p = document.querySelector('p');
p.innerHTML = 'ini diubah melalui javascript';

// //document.queryselectorall()

// const p = document.querySelectorAll('p');

p[2].style.backgroundColor = 'pink';
