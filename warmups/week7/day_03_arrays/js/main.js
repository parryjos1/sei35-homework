console.log('mainjhs');


const array1 = ["one", "two", "three", "four"];

const reverseArray = function (array) {

    let reverse = [];

    // Solution 1.

    // for (let i = array.length - 1; i >= 0; i--) {
    //     reverse.push(array[i])
    //     // console.log(i);
    //     // console.log(reverse);
    // }

    // Solution 2.

    // for (let i = 0; i < array.length; i++) {
    //     reverse.unshift(array[i])
    //     // console.log(reverse);
        
    // }
    // console.log('reverse', reverse);

    // solution 3.
    console.log('reverse', array.reverse() );
    
}

reverseArray( array1 )




const array2 = ["one", "two", ["one", ["three", "four"]]];

const flattenArray = function( array ) {

    let flatten = [];

    // for (let i = 0; i< array.length; i++ ) {

        // solution 1. 
        // if (array[i] instanceof Array ) {

        //     for (let j = 0; j < array[i].length; j++) {
        //         flatten.push(array[i][j])
                
        //     }
            
        // } else {
        //     flatten.push(array[i])
        // }

        // Solution 2.
    //     if ( Array.isArray(array[i]) ) {
    //         flatten = flatten.concat(array[i])
    //     } else {
    //         flatten.push(array[i])
    //     }

    // } 
    // console.log('flatten', flatten);

    // Solution 3. 
    console.log( 'flatten', array.flat( Infinity ) );
    
};

flattenArray( array2 )


