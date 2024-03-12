console.log((false && undefined)); // false
console.log((false || undefined)); // undefined
console.log(((false && undefined) || (false || undefined))); // undefined
console.log(((false || undefined) || (false && undefined))); // undefined ///
console.log(((false && undefined) && (false || undefined))); // false
console.log(((false || undefined) && (false && undefined))); // undefined
console.log(('a' || (false && undefined) || '')); // true a
console.log(((false && undefined) || 'a' || '')); // true a
console.log(('a' && (false || undefined) && '')); // undefined
console.log(((false || undefined) && 'a' && '')); // undefined