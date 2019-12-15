//mergeSort code inspired from medium.com
function mergeSort (unsortedArray, num) {
  if (unsortedArray.length <= 1){
    createRow(unsortedArray, "merge_sort", num + 4);

    return unsortedArray;
  }
  createRow(unsortedArray, "merge_sort", num)
  const middle = Math.floor(unsortedArray.length/2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle, unsortedArray.length);

  return merger(
    mergeSort(left, num + 1), mergeSort(right, num + 9), num
  );
}

function merger (left, right, num) {
  let result = [], leftIndex = 0, rightIndex = 0;
  //createRow(resultArray, "merge_sort", num + 1);
  while (leftIndex < left.length && rightIndex < right.length) {
    // if(left[leftIndex] >= 65){
    //   left[leftIndex] = left[leftIndex].charCodeAt()
    // }
    // if(right[rightIndex] >= 65){
    //   right[rightIndex] = right[rightIndex].charCodeAt()
    // }
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
    else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  //make an additional row here to make several rows for the table
  result = result
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));

  createRow(result, "merge_sort", num + 20);
  return result;
}
//quickSort code inspired from guru99.com
function swap (unsortedArray, leftIndex, rightIndex) {
  var temp = unsortedArray[leftIndex];
  unsortedArray[leftIndex] = unsortedArray[rightIndex];
  unsortedArray[rightIndex] = temp;
}

function partition (unsortedArray, left, right) {
  var pivot = unsortedArray[Math.floor((right + left)/2)];
  var i = left;
  var j = right;

  while (i <= j) {
    while (unsortedArray[i] < pivot){
      i++;
    }
    while (unsortedArray[j] > pivot){
      j--;
    }
    if (i <= j){
      swap (unsortedArray, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(unsortedArray, left, right, rowNum) {
  var index;
  createRow(unsortedArray, "quick_sort", rowNum);
  if (unsortedArray.length > 1) {
    index = partition(unsortedArray, left, right);
    if (left < index - 1) {
      quickSort(unsortedArray, left, index - 1, rowNum + 1);

    }
    if (index < right) {
      quickSort(unsortedArray, index, right, rowNum + 5);
    }
  }
  return unsortedArray;
}

//Insertion Sort inspired by medium.com
function insertSort(unsortedArray) {
  var i, j;
  var rowNum = 0;
  createRow(unsortedArray, "insert_sort", rowNum);

  for ( i = 1; i < unsortedArray.length; i++) {
    j = i - 1;
    var temp = unsortedArray[i];
    rowNum++;
    while (j >= 0 && unsortedArray[j] > temp) {
      unsortedArray[j + 1] = unsortedArray[j];
      j--;
    }
    unsortedArray[j + 1] = temp;
    createRow(unsortedArray, "insert_sort", rowNum);

  }
  return unsortedArray;
}
//creating a row with data from sorts
function createRow(unsortedArray, sortType, rowNum){
  if (sortType == "merge_sort"){
    // for(let i = 0; i < unsortedArray.length; i++){
    //   if(unsortedArray[i] >= 65){
    //     unsortedArray[i] = String.fromCharCode(unsortedArray[i]);
    //   }
    // }
      var merge_text = unsortedArray;

      var new_row = document.createElement('tr');
      rowNum = rowNum + "";
      rowName = "row" + rowNum;
      new_row.setAttribute("id", rowName);

      var merge_data = document.createElement('td');
      merge_data.textContent = merge_text;

      // for(let i = 0; i < unsortedArray.length; i++){
      //   if(unsortedArray[i] >= 65){
      //     unsortedArray[i] = unsortedArray[i].charCodeAt(0);
      //   }
      // }

      document.getElementById('MergeSorting').appendChild(new_row);
      document.getElementById(rowName).appendChild(merge_data);

  }
  else if (sortType == "quick_sort" ) {
    var quick_text = unsortedArray;

    var new_row = document.createElement('tr');
    rowNum = rowNum + "";
    rowName = "quickrow" + rowNum;
    new_row.setAttribute("id", rowName);

    var quick_data = document.createElement('td');
    quick_data.textContent = quick_text;

    document.getElementById('QuickSorting').appendChild(new_row);
    document.getElementById(rowName).appendChild(quick_data);

  }
  else if (sortType == "insert_sort") {
    var insert_text = unsortedArray;

    var new_row = document.createElement('tr');
    rowNum = rowNum + "";
    rowName = "insertrow" + rowNum;
    new_row.setAttribute("id", rowName);

    var insert_data = document.createElement('td');
    insert_data.textContent = insert_text;

    document.getElementById('InsertSorting').appendChild(new_row);
    document.getElementById(rowName).appendChild(insert_data);
  }

}

function running(){
  var array = [0, 'B'.charCodeAt(), 'A'.charCodeAt(), 3, 2, 8, 4, 7, 6, 5, 1, 9];
  //createRow(array);
  mergeSort(array, 0);
  quickSort(array, 0, array.length - 1, 0);
  //had to rewrite the array since quickSort rewites the actual array
  var secondArray = [0, 'B'.charCodeAt(), 'A'.charCodeAt(), 3, 2, 8, 4, 7, 6, 5, 1, 9];

  insertSort(secondArray);

}
