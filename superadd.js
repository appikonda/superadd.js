// Copyright (c) 2014 Sandeep Appikonda

function superAdd(first, second) {
   if (typeof first === "number") {
      return first + second;
   } else if(typeof first === "string") {
      return first + " " + second;
   } else if(Array.isArray(first)) {
      return first.concat(second);
   } else {
      return addObjects(first, second);
   }
}

function addObjects(firstObject, secondObject) {
  var resultObject = {};

  for (var key in firstObject) {
    resultObject[key] = firstObject[key]
  }

  for (var key in secondObject) {
    resultObject[key] = secondObject[key]
  }

  return resultObject;
}
