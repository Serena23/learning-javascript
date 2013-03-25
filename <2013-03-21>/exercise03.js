#3a
function Triangle(v1,v2,v3){
	this.v1=v1;
	this.v2=v2;
	this.v3=v3;
}

#3b
function Triangle(v1,v2,v3){
	this.v1=v1;
	this.v2=v2;
	this.v3=v3;
}

Triangle.prototype.perimeter = function(){
	lato1 = Math.sqrt(Math.pow((v1.x-v2.x),2)+Math.pow((v1.y-v2.y),2));
	lato2 = Math.sqrt(Math.pow((v1.x-v3.x),2)+Math.pow((v1.y-v3.y),2));
	lato3 = Math.sqrt(Math.pow((v2.x-v3.x),2)+Math.pow((v2.y-v3.y),2));
	return (lato1+lato2+lato3);
}

#3c
function Triangle(v1,v2,v3){
	this.v1=v1;
	this.v2=v2;
	this.v3=v3;
}

Triangle.prototype.area = function(){
	lato1 = Math.sqrt(Math.pow((v1.x-v2.x),2)+Math.pow((v1.y-v2.y),2));
	lato2 = Math.sqrt(Math.pow((v1.x-v3.x),2)+Math.pow((v1.y-v3.y),2));
	lato3 = Math.sqrt(Math.pow((v2.x-v3.x),2)+Math.pow((v2.y-v3.y),2));
	semip = (lato1+lato2+lato3)/2;
	return Math.sqrt((semip*(semip-lato1)*(semip-lato2)*(semip-lato3)));
}
