/* eslint-env jasmine */
/* global bubbleSort */

describe('Bubble Sort', function() {

  // let bubbleSort

  // beforeEach(() => {
  //   bubbleSort()
  // })

   it('handles an empty array', function(){
       expect(bubbleSort( [] )).toEqual( [] );
   })

  //  it('expects an array of integers', function(){
  //    bubbleSort([ 1,3,5 ])
  //    expect( typeof 1).toBe(Number)
  //    expect( typeof 3).toBe(Number)
  //    expect( typeof 5).toBe(Number)
  //  })

   it('expects to return a sorted array', function(){
       expect( bubbleSort( [3, 2, 1] ).toEqual( [1, 2, 3] ))
       expect( bubbleSort( [5, 2, 6, 7, 1] ).toEqual( [1, 2, 5, 6, 7]))
   })
})

