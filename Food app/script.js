const submitButton = document.getElementById("submit-button");
const nameInput = document.getElementById("name-input");
const beverageInput = document.getElementById("beverage-input");
const mainInput = document.getElementById("main-input");
const drinkInput = document.getElementById("drink-input");
const receipt = document.getElementById("receipt")
const receiptList = document.getElementById("receipt-list")
console.log(receipt.classList.add)



submitButton.addEventListener('click' , function(e) {
    e.preventDefault();
    console.log(nameInput.value)
    console.log(beverageInput.value)
    console.log(mainInput.value)
    console.log(drinkInput.value)

    const name = nameInput.value;
    const beverage = beverageInput.value;
    const main = mainInput.value;
    const drink = drinkInput.value;

    
    receipt.classList.add("show-receipt")

    receiptList.innerHTML = `
                    <li> <b>Name:</b> ${name}</li>
                    <li> <b>beverage:</b> ${beverage}</li>
                    <li> <b>main:</b> ${main}</li>
                    <li> <b>drink:</b> ${drink}</li>
    `

})























// alert('Welcome to this restaurant);

// const customerName = prompt("What's your name?");
// const order = [];

// //Get bevereage
// const beverage  =  prompt('select beverage water - soda - coffee');

// if(beverage === 'water') {
//     console.log('you selected water!');
//     order.push('water');

// } else if(beverage === 'soda') {
//     console.log('you selected a soda!');
//     order.push('soda');

// } else if (beverage ==='coffee') {
//     console.log('you selected a beverage');
//     order.push('coffee');

// } else {
//     console.log('This is not a menu');

// }

// const main = prompt('Select main course - Pizza, burger, salad');
// if(main === 'Pizza' || main ==='pizza') {
//     order.push('pizza');
//     console.log('Pizza');

// } else if(main === 'burger') {
//     order.push('burger');

// } else if (main === 'salad') {
//     order.push('salad');
// }


// const drink = wantsDrink = confirm('Would you like a drink');

// if (wantsDrink === true) {
//     const age = prompt('How old are you?');


//     if(age > 20) {
//         const drink = prompt('Select drink beer - cocktail - wine');

//     }else {
//         alert('Nice try');
//     }
// }







// console.log('your name: ' + customerName);
// console.log(order);