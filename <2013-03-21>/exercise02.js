#2a
function Edge(v1,v2){
	this.v1 = v1;
	this.v2 = v2;
}

#2b
function Edge(v1,v2){
	this.v1 = v1;
	this.v2 = v2;
}

Edge.prototype.length = function(){
	return Math.sqrt(Math.pow((v1.x-v2.x),2)+Math.pow((v1.y-v2.y),2));
}