// A pair of numbers m and n are called friendly (or known as a friendly pair), if the sum of all divisors of m (excluding m) is equal to the number n, and the sum of all divisors of m (excluding m) is equal to the number n. of all the divisors of m (excluding m) is equal to the number n, and the sum of all the divisors of the number n (excluding n) is equal to m (with m ≠ n).
// For example, the numbers 220 and 284 are an amicable pair because the only numbers dividing exactly 220 are 1, 2, 4, 4, 5, 10, 11, 11, 20, 22, 44, 55, and 110, and 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
// Therefore, 220 is a friendly number. The only numbers that divide exactly 284 are 1, 2, 4, 71 and 142 and 1 + 2 + 4 + 71 + 142 = 220.
// Therefore, 284 is a friendly number.
// Many pairs of friendly numbers are known; however, only one of the pairs (220, 284) has values less than 1000. The next pair is in the range [1000, 1500]. Develop a program to find this pair.

function friendlyNumbers(n1,n2){
    function sumDivisors(num){
        let sum = 0;
        for ( let i=0; i < num; i++){
            if (num % i == 0){
                sum += i
            }
        }
        return sum
    }
    const sum1 = sumDivisors(n1)
    const sum2 = sumDivisors(n2)
    if (sum1 == n2 && sum2 == n1){
        console.log(`The numbers ${n1} and ${n2} are friendly numbers`)
    }
    else{
        console.log(`The numbers ${n1} and ${n2} are not friendly numbers`)
    }
}
const result = friendlyNumbers(1000,1500)

