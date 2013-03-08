var compare = function(value1, value2){
	return value1-value2;
};
var rnd = function (n){
a = [];
for (var i = 1; i <= n; i++) {
a.push(Math.floor(Math.random()*100));
}
a = a.filter(function(element){
return element%2!==0;
}).sort(compare);
return a;
}