var gen = function (n){
a = [];
for (var i = 1; i <= n; i++) {
a.push(i);
}
a = a.filter(function(element){
return element%2===0;
}).map(function(element){
return element*2;
}).filter(function(element){
return element %4===0;
}).reduce(function(a,b){
return a+b;
});
return a;
}