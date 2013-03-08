var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var values = ['goofy', 'scrooge'];

var select = function(data, key, values){
	var a = [];
	data.forEach(function(item, index, array){
   	for(var i=0; i<values.length, i++){
   		item.key===values[i];
   		a.push(item);
   	}
});
	return a;
}