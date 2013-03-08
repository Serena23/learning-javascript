var idtmtx = function(n){
var j;
var i;
for (j = 1; j <= n; j +=1) {
	var riga = "";
  for (i = 1; i <= n; i +=1) {
  		if(i!==j){
  			if (i!==n) {
  				riga += 0+","+"\t";
        }
  			else{
          riga += 0+"\t";
  			}
  		}
  		else{
        if (i!==n) {
          riga += 1+","+"\t";
        }
        else{
          riga += 1+"\t";
        }
      }
	}
  console.log(riga + "\n");
}
}