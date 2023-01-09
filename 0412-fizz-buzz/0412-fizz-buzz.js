/**
 * @param {number} n
 * @return {string[]}
 */

 // if number divisible by 3 and 5 == "Fizzbuzz"
    // if number is divisible by 3 only == "Fizz"
    // if number is divisible by 5 only == "Buzz"
    // if number is none of above == number itself

var fizzBuzz = function(n) {
    let answer = [];
    
    for (let i = 1; i <= n; i++) {
        let divisibleBy3 = i % 3 == 0;
        let divisibleBy5 = i % 5 == 0;
        
        if (divisibleBy3 && divisibleBy5) {
            answer[i] = "FizzBuzz";
            continue;
        } else if (divisibleBy3 && !divisibleBy5) {
            answer[i] = "Fizz";
            continue;
                   
        } else if (!divisibleBy3 && divisibleBy5) {
            answer[i] = "Buzz";
            continue;
        } else {
            answer[i] = `${i}`;
            continue;
        }
        
        
    };
    
    answer.shift();
    return answer

    
};