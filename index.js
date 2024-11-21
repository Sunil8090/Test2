// Q1 Write a function sum such that

// sum(1)(2)(3)(4)(5)() returns 15
// sum(3)(7)() returns 10 and so on

// Assumption: all inputs are integers

function sum(val){
    let total = val;

    function inner(nextVal) {
        if(nextVal == undefined){
            return total;
        }
        total += nextVal;
        return inner;
    }

    return inner;
}


console.log(sum(1)(2)(3)(4)(5)())
console.log(sum(3)(7)())
