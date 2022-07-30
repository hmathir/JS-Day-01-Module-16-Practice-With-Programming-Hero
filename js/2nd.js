var bangla = parseFloat(prompt("Enter Bangla Mark: "));
var english = parseFloat(prompt("Enter English Mark: "));
var islam = parseFloat(prompt("Enter Islam Mark: "));
var math = parseFloat(prompt("Enter Math Mark: "));
var somaj = parseFloat(prompt("Enter Somaj Mark: "));

var totalMark = parseFloat(bangla+english+islam+math+somaj);
document.write("Total mark is: " + (totalMark.toFixed(2)));
var avarageMark = parseFloat(totalMark / 5);
document.write("Avarage Mark is: " + (avarageMark.toFixed(2)));