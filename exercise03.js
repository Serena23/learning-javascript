var j;
var i;
for (j = 1; j <= 10; j +=1) {
	var riga = "";
  for (i = 1; i <= 10; i +=1) {
  		if(i!==j){
  			if (i!==10) {
  				riga += 0+","+"\t";
        }
  			else{
          riga += 0+"\t";
  			}
  		}
  		else{
        if (i!==10) {
          riga += 1+","+"\t";
        }
        else{
          riga += 1+"\t";
        }
      }
	}
  console.log(riga);
	console.log("\n");
}