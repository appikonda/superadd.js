// Copyright 2014 Sandeep Appikonda

function superAdd(firstArg, secondArg){
   
   
   if (typeof(firstArg) === "number")
   {
   	  return firstArg + secondArg;
   }
   else if(typeof(firstArg) === "string")
   {
   	  return firstArg +" "+ secondArg;
   }
   else if( Array.isArray(firstArg) ){
   	 return  firstArg.concat(secondArg);
   }
   else
   {
   	  return addObjects(firstArg,secondArg);
   }

} 

// This function will add two objects and returns the result object

function addObjects(firstObject, secondObject){
	var resultObject = {};
	
	for (var key in firstObject) {
		resultObject[key] = firstObject[key]
	}
	for (var key in secondObject) {
		resultObject[key] = secondObject[key]
	}

	return resultObject;
}