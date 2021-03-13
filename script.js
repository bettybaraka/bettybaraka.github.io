// exercise 

const countItems = () => {
    return document.querySelector('.list-group').children.length;
}

// create addItem function
const addItem = e => {
    e.preventDefault();

    // select input element
    let item = document.querySelector('#item');

    // select list
    let list = document.querySelector('.list-group');

    /* 
        create an <li> element
            <li></li>
    */
    let li = document.createElement('li');

    /* 
        give it a class of list-item 
            <li class="list-item"></li> 
    */
    li.className = 'list-item';

    /* 
        insert the input value to the <li> element 
            <li class="list-item">input value</li> 
    */
    li.textContent = item.value;

    let trash = document.createElement('i');

    trash.className = 'delete fas fa-trash';


    trash.addEventListener('click', deleteItem)

    // add button to the list item
    li.appendChild(trash);

    // add list item to the list group
    list.appendChild(li);

    // select p tag of message class
    let message = document.querySelector('.message');

    // set content to 'Total Count: x'
    message.textContent = 'Total Count: ' + countItems();
}

//create deleteItem function 
const deleteItem = e => {
    e.preventDefault();
    // select list
    let list = document.querySelector('.list-group');
    // get item
    let item = e.target.parentElement; /*  */
    // remove item from list
    list.removeChild(item);

    let message = document.querySelector('.message');

    if (countItems() === 0) {
        message.textContent = 'List empty';
    } else {
        message.textContent = 'Total Count: ' + countItems();
    }
}

// select form
let form = document.querySelector('form');

// add submit event to the form & call addItem()
form.addEventListener('submit', addItem);