// alert('Welcome to this restaurant!');

const customerName = prompt('Whats your name?');
const order = [];

// Get beverage
const beverage = prompt('select beverage: water - soda - coffee');

if (beverage === 'water') {
    console.log('you selected water!');
    order.push(beverage);

} else if (beverage === 'soda') {
    console.log('you selected soda!');
    order.push(beverage);

} else if (beverage === 'coffee') {
    console.log('you selected coffee!');
    order.push(beverage);

} else {
    console.log('This is not on the menu!');

}



// Get drink
const wantsDrink = confirm('Would you like a drink? (With alcohol!!)');

if (wantsDrink === true) {
    const age = prompt('How old are you?');

    // If at least 21 years old
    if (age > 20) {
        const drink = prompt('Select drink beer - cocktail - wine');

        if (drink === 'beer') {
            console.log('you selected beer!');
            order.push('beer');

        } else if (drink === 'cocktail') {
            console.log('you selected cocktail!');
            order.push('cocktail');

        } else if (drink === 'wine') {
            console.log('you selected wine!');
            order.push('wine');

        } else {
            console.log('Not on the menu!');

        }

        // if under 21 years old
    } else {
        alert('Nice try..!');
    }


}


console.log('your name: ' + customerName);
console.log(order);