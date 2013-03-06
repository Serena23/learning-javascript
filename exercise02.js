var j;
var i;
for (j = 1; j <= 10; j +=1) {
	for (i = 1; i <= 10; i +=1) {
  		if(i!==10)
  			console.log(j*i+","+"\t");
  		else
  		console.log(j*i+"\t");
	}
	console.log("\n");
}