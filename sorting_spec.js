describe('Bubble Sort', function(){
  var spies;

  beforeEach(function() {
    spies = {
      swap: swap,
      isBigger: isBigger
    };
    spyOn(spies, 'swap');
    spyOn(spies, 'isBigger');
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item array', function(){
    expect( bubbleSort([5]) ).toEqual( [5] );
  });

  xit('handles an array with multiple items', function(){
    // console.log(JSON.stringify(swap));
    expect(spies.swap.calls.count()).toEqual(4);
    expect(spies.isBigger.calls.count()).toEqual(12);
    expect( bubbleSort([5, 4, 634, 1]) ).toEqual( [1, 4, 5, 634] );
  });

});

describe('Merge Sort -', function() {
  
  it(' merge is able to merge two sorted arrays', function(){
    debugger;
    expect( merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
  });

  it(' split is able to split one array into two halves', function(){
    expect( split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });

  it(' mergeSort is able to sort an array', function(){
    expect( mergeSort([1, 3, 1, 6])).toEqual([1, 1, 3, 6]);
  });

  it(' mergeSort is able to sort a big long array', function(){
    var meanArray = [];
    var sortedArray = [];
    for (var i = 0; i < 50; i++) {
      sortedArray.push(i);
      meanArray.unshift(i);
    }
    expect( mergeSort(meanArray)).toEqual(sortedArray);
  });
  
});






