describe('Bubble Sort', function(){
  var spies;

  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'isBigger').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item array', function(){
    expect( bubbleSort([5]) ).toEqual( [5] );
  });

  it('handles an array with multiple items', function(){
    expect( bubbleSort([5, 4, 634, 1]) ).toEqual( [1, 4, 5, 634] );
    expect(swap.calls.count()).toEqual(4);
    expect(isBigger.calls.count()).toEqual(12);
  });

  it('handles an array with a whole big ton of items', function(){
    var randomArray = [];
    var n = Math.floor(Math.random() * 100);
    while (n--) {
      var randomNum = Math.floor(Math.random() * 10);
      randomArray.push(randomNum);
    }
    var sortedArray = 
    expect( bubbleSort([5, 4, 634, 1]) ).toEqual( [1, 4, 5, 634] );
    expect(swap.calls.count()).toEqual(4);
    expect(isBigger.calls.count()).toEqual(12);
  });

});

describe('Merge Sort -', function() {
  
  it(' merge is able to merge two sorted arrays', function(){
    expect( merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
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






