var givenTaka = prompt("Mommy Give Me Taka: ");
var perKgApple = parseInt(prompt("Today's Apple Rate: "));
var perKgBanana = parseInt(prompt("Today's Banana Rate: "));
var totalAmount = perKgApple + perKgBanana;
document.write("Return Amount is: " + (givenTaka - totalAmount)); 
