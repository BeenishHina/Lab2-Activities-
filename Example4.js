let sandwitch_calculator = function (bread) {
    if (bread % 2 == 0) {
        return bread / 2;
    }
    else {
        return "breads is not in range";
    }
}
console.log("Breads Amount is: 10 so, sandwitches  mades: ", sandwitch_calculator(10));
function sandwitch_calculator1(bread, cheese) {
    if (bread % 2 == 0 && cheese > 1) {
        return bread / 2;
    }
    else if (bread % 2 == 0 && cheese == 1) {
        return 1;
    }
    else {
        return "breads is not enough";
    }
}
console.log("Breads Amount is 10 and cheese is 1 then sandwitch mades: ", sandwitch_calculator1(10, 1));
