console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(Item) {
  basket.push(Item);
  return true;
}
console.log(addItem('Pen'));
console.log(addItem('Pencil'));
console.log(addItem('Remote'));

console.log(basket);

//cearting function called listItems

function listItems(){
  for(let item of basket){
    console.log(item);
  }
}

//testing listItems function
listItems();

//creating empty function

function empty(){
  basket = [];
}

//testing empty function
empty();
console.log(`Your basket is: ${(basket)}`);
