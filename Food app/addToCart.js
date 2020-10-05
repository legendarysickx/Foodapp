const addButton = document.getElementById('add-button');
const itemsParagraph = document.getElementById('items');
const deleteButton = document.getElementById('delete-button')
let cartItems = 0;

itemsParagraph.innerHTML = "Numbers of Items in Cart: " + cartItems

console.log(addButton)

// Button Function

addButton.addEventListener('click' , function() {
cartItems = cartItems + 1;
itemsParagraph.innerHTML = "Number of items in cart: " + cartItems
});

deleteButton.addEventListener('click' , function() {
    cartItems = cartItems - 1;
    itemsParagraph.innerHTML = "Number of Items in Cart: " + cartItems
});