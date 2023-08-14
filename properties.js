var shoppingCard = {
          books: 3,
          sunglass: 1,
          keyboard: 5,
          mouse: 1,
          pen: 25
}
console.log(shoppingCard)
// when you know the specific property name , use dot notation to get property value
var penCount = shoppingCard.pen
// alternative System
// when you know the specific property name , use dot notation to get property value
var penCount2 = shoppingCard['pen'];

var properties = Object.keys(shoppingCard);
var propertyValue = Object.values(shoppingCard);
// console.log(properties)
// console.log(propertyValue)

// set property value 
// systemnNum1 : dot natation
shoppingCard.mouse = 15;
console.log(shoppingCard)

// systemnNum2
shoppingCard['mouse'] = 16;
console.log(shoppingCard)

// systemnNum3 
var propertyName = 'mouse';
shoppingCard[propertyName] = 45;
console.log(shoppingCard)

