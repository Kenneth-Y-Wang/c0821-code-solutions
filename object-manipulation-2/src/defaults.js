// /* exported defaults */

// // because we need to compare two objects for their properties, first of all, create two empty arrays
// // for each property in target object and source object, push each property to the new array to create two arrays only containing properties
// // now look at each element from keySource array , one at a time
// // by using indexOf method, if the element in keySource ( the property from source object), are NOT in keyTarget array (the property from target object);
// // then add the missing property with its paired value from source object to the target object
// // the target object is now modified, no need to return

// function defaults(target, source) {
//   var keyTarget = [];
//   var keySource = [];

//   for (var key in target) {
//     keyTarget.push(key);
//   }
//   for (var pro in source) {
//     keySource.push(pro);
//   }

//   for (var i = 0; i < keySource.length; i++) {
//     if (keyTarget.indexOf(keySource[i]) === -1) {
//       target[keySource[i]] = source[keySource[i]];
//     }
//   }
// }

const defaults = (target, source) => {
  const targetKeys = [];
  for (const key in target) {
    targetKeys.push(key);
  }
  for (const key in source) {
    if (targetKeys.indexOf(key) === -1) {
      target[key] = source[key];
    }
  }
};
