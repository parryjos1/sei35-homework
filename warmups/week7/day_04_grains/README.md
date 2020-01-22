## Grains

There once was a wise servant who saved the life of his king. The king promised to pay whatever the servant could dream up. The servant told the king he would take his reward in grains of wheat, to be calculated using a chessboard - starting with one grain of rice on the first square of the chessboard, each subsequent square should have double the number of grains of rice of the previous square. That is, one grain on the first square of a chess board. Two grains on the second. Four grains on the third. Eight grains on the fourth. 16 on the fifth, and so on.

There are 64 squares on a chessboard.

Write a program that shows
1) how many grains were on a particular square
  - Example: `'Square 3: 4'`.

2) how many grains were on each square
  - That is:
    `'Square 1: 1'`

    `'Square 2: 2'`

    `'Square 3: 4'`

    `'Square 4: 8'`

    `'Square 5: 16'`

    - [etc]

3) the total number of grains on the board
  - That is:
    `'The total number of grains is _[????]_'`

Do this in JS (if you like - use Underscore and take advantage of some of its helpful, Ruby-esque methods, like _.range, _.reduce, etc?).

### Extensions

Implement a simple HTML UI which you can use to perform each of the calculations above (feel free to use jQuery).
