function display() {
    var array = new Array();
    var sum=0;
    var leng = arguments.length;
    for (var i = 0; i < leng; i++) {
        sum = sum + arguments[i];
        average = sum/leng;
    }
    array.push(average);
    array.push(Math.max.apply(Math, arguments));
    return array;
}
var results = display(12,9,5,3);
console.log("Average of arguments is :", results[0], "and highest value is: ", results[1]);
