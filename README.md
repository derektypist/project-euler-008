# Project Euler 008 - Largest Product in a Series

The four adjacent digits in the 1000-digit number that have the greatest product are
`9 x 9 x 8 x 9 = 5832`.


    73167176531330624919225119674426574742355349194934
    96983520312774506326239578318016984801869478851843
    85861560789112949495459501737958331952853208805511
    12540698747158523863050715693290963295227443043557
    66896648950445244523161731856403098711121722383113
    62229893423380308135336276614282806444486645238749
    30358907296290491560440772390713810515859307960866
    70172427121883998797908792274921901699720888093776
    65727333001053367881220235421809751254540594752243
    52584907711670556013604839586446706324415722155397
    53697817977846174064955149290862569321978468622482
    83972241375657056057490261407972968652414535100474
    82166370484403199890008895243450658541227588666881
    16427171479924442928230863465674813919123162824586
    17866458359124566529476545682848912883142607690042
    24219022671055626321111109370544217506941658960408
    07198403850962455444362981230987879927244284909188
    84580156166097919133875499200524063689912560717606
    05886116467109405077541002256983155200055935729725
    71636269561882670428252483600823257530420752963450

Find the n adjacent digits (e.g. 13) in the 1000-digit number that have the greatest product.  What is the value of this product?

Information at [Project Euler 008](https://projecteuler.net/problem=8)

## UX

**Getting Started**

Enter a whole number between 4 and 20 in the input field and click on the Submit Button.  You will see the number you have entered as well as the value of the largest product, unless you have made an invalid input.  For example, if you entered 13, the value of the largest product is 23514624000.  Click on the Reset Button to clear that information or to start again.  The 1000-digit number is on a separate page.

**User Stories**

As a user, I expect to get an error message if I do any of:

    - Not enter anything in the input field
    - Entering a number less than 4 or greater than 20
    - Entering text that is not a number (e.g. bus)
    - Entering a number, but it is not an integer

As a user, I expect the function `largestProductinaSeries(4)` to return a number.

As a user, I expect the function `largestProductinaSeries(4)` to return 5832.

As a user, I expect the function `largestProductinaSeries(13)` to return 23514624000.

**Information Architecture**

The function `largestProductinaSeries(n)` returns a number, where `n` is a number between 4 and 20.

## Features

Allows the user to enter a number (number of adjacent digits) as well as the largest product.  Performs checks to ensure that the input is valid.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.1.3 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-008) at the main branch.

## Credits

### Content

Array of 1000 digits supplied by FreeCodeCamp.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)


