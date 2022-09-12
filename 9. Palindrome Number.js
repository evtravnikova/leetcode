var isPalindrome = function(x) {
    let start = x.toString();
    let  reverse = '';

    for (let i = x.toString().length - 1; i >= 0; i--) {
        reverse += x.toString()[i];
    }
    console.log(start + ' start', reverse + ' reverse')

console.log(start === reverse)
    return start === reverse
};

isPalindrome(-121)



//let i = x.toString().length - 1; i <= 0; i--