// * EXAMINE THE DOCUMENT OBJECT
//* console.dir(document)

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);

// console.log(document.forms)
// console.log(document.links)

// * GETELEMENTBYID
var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello<h3>'
// header.style.borderBottom = 'solid 3px #000';

// * GETELEMENTSBYCLASSNAME
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Changed';
items[2].style.fontWeight = 'bold';

// items.style.backgroundColor = '#000';

for(var i = 0;i < items.length; i++ ){
    items[i].style.backgroundColor = '#fff';
}


