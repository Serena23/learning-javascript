var j;
var i;
for (j = 1; j <= 10; j +=1) {
	var riga = "";
	for (i = 1; i <= 10; i +=1) {
  		if(i!==10)
  			riga += j*i+","+"\t";
  		else
  			riga += j*i+"\t";
	}
	console.log(riga);
	console.log("\n");
}