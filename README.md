<div align="center" id="top"> 
</div>

<h1 align="center">Reto_03</h1>

## :dart: About ##

<p align="center">A pair of numbers m and n are called friendly (or known as a friendly pair), if the sum of all divisors of m (excluding m) is equal to the number n, and the sum of all divisors of m (excluding m) is equal to the number n. of all the divisors of m (excluding m) is equal to the number n, and the sum of all the divisors of the number n (excluding n) is equal to m (with m ≠ n).
For example, the numbers 220 and 284 are an amicable pair because the only numbers dividing exactly 220 are 1, 2, 4, 4, 5, 10, 11, 11, 20, 22, 44, 55, and 110, and 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
Therefore, 220 is a friendly number. The only numbers that divide exactly 284 are 1, 2, 4, 71 and 142 and 1 + 2 + 4 + 71 + 142 = 220.
Therefore, 284 is a friendly number.
Many pairs of friendly numbers are known; however, only one of the pairs (220, 284) has values less than 1000. The next pair is in the range [1000, 1500]. Develop a program to find this pair.</p>

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/daniel12082/push_up_Reto_03

# Access
$ cd push_up_Reto_03

#Open Terminal

# Run the project
$ run code start

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
```

## :open_book: Explain ##

-----------------------------------------------------------------------
| Nr.  | Step                                                         |
| ---- | ------------------------------------------------------------ |
| 1    | The function sumDivisors(num) is defined inside friendlyNumbers(n1,n2). This function calculates the sum of all divisors of a number num (excluding num itself). It does this by iterating from 0 to num - 1 and checking if num is divisible by the current number i. If it is, i is added to the sum. |
| 2    | The function sumDivisors(num) is called with n1 and n2 as arguments, and the results are stored in sum1 and sum2 respectively. |
| 3    | The function then checks if sum1 is equal to n2 and sum2 is equal to n1. If both conditions are true, it means n1 and n2 are friendly numbers. This is because the sum of the divisors of n1 is equal to n2, and the sum of the divisors of n2 is equal to n1. |
| 4    | If n1 and n2 are friendly numbers, the function logs a message stating that they are friendly numbers. If they are not, it logs a message stating that they are not friendly numbers |
| 5    | Finally, the function friendlyNumbers(1000,1500) is called, and the result is stored in the variable result. This checks if 1000 and 1500 are friendly numbers. |

## :memo: License ##

Made with :heart: by <a href="https://github.com/{daniel12082}" target="_blank">{daniel12082}</a>