function isEven(num) {
    if (num % 2 != 0) {
        return false;
    }
    else {
        return true;
    }
}

// function factorial(n) {
//     var num = n;
//     var newn;

//     if (n == "0") {
//         return "1";
//     }
//     else {
//         while (n <= 0) {
//             num * n;
//             n--;
//         }
//     }
// }

function factorial(num) {
    //define result var
    var result = 1;
    //calculate factorial and store result
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    //return the result variable
    return result
}

function kebabToSnake(str) {
    var re = /-/g;
    var result = str.replace(re, "_");
    document.write(result);
}
