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
	for (var j = 0 ; j<data.length; j++){
      for(var i=0; i<values.length; i++){
     		var d1 = (data[j])[key];
        var d2 = values[i];
        if(d1===d2)
     		   a.push(data[j]);
     	}
  }
	return a;
}