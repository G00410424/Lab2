//part A - lenght of string
function myFunction1(value) {
    return value.length;
}
console.log(myFunction1("My Name"));
//Part B - lenght of string without spaces 
function myFunction2(value) {
    return value.replace(" ", "").length;
}
console.log(myFunction2("My Name"));
//Part C - OPTIONAL parameter with ?
function myFunction3(value, space) {
    if (space == true) {
        return value.replace(" ", "").length;
    }
    else {
        return value.length;
    }
}
console.log(myFunction3("My Name", true));
console.log(myFunction3("My Name", false));
