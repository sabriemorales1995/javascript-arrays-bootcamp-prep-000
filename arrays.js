function addElementToBeginningOfArray(arr,element){
  var temp = [element, ...arr];
  return temp;
}

function destructivelyAddElementToBeginningOfArray(arr,element){
  arr =arr.unshift(element);
  return arr;
}

function addELementToEndOfArray(arr, element){
  var temp = [ ...arr,element];
  return temp;
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr =arr.push(element);
  return arr;
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function destrucivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length-1);
  
}