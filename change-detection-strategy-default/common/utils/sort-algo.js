export class sortFunction {

  const arr = [
    {name: 'may', age:21},
    {name: 'sag', age:31},
    {name: 'kan', age:07},
    {name: 'pop', age:51},
  ];
  var n = arr.sort(function(a,b) {
    return (a.age - b.age);
  });

  console.log(n);

}
//
function curry(a) {
  return function(b) {
    return function (c) {
      return a*b*c;
    }
  }
}
//
function multi(args) {
  var arr = Array.prototype.slice.call(args); // [...args] in ES6
  var total = 1;
  for(var i=0; i<arr.length; i++) {
    total *= arr[i];
  }
}

multi(2,3,4);

