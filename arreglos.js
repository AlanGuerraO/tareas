var array = [1, 2, 3, 4, 5];
var nueEle = 10;
var pos = 1;
array.splice(pos, 0, nueEle);

console.log(array);

var arrayOriginal = [1, 2, 3, 4, 5];
var nueEle = 10;
var pos = 4;
var nueArray = arrayOriginal.slice();

nueArray.splice(pos, 0, nueEle);

console.log(nueArray);