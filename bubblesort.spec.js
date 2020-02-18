describe('Bubble Sort', function() { 
   it('handles an empty array', function(){ 
       expect( bubbleSort( [] )).toEqual( [] );
   })
   it('expects an array of integers', function(){ 
     bubbleSort([ el, el1, el2 ])
     expect( typeof el).toBe(Number)
     expect( typeof el1).toBe(Number)
     expect( typeof el2).toBe(Number)
   })
   it('expects to return a sorted array', function(){ 
       expect( bubbleSort( [3, 2, 1] ).toEqual( [1, 2, 3] ))
       expect( bubbleSort( [5, 2, 6, 7, 1] ).toEqual( [1, 2, 5, 6, 7]))
   })
}) 

