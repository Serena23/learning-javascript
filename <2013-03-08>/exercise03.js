var toUpCase = function(w){
	return w.toUpperCase();
}

var Capitalize = function(){
	var w = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	var aw = w.split(" ");
	var w1 = "";
	for(var i=0; i<aw.length; i+=1){
		var c = aw[i].charAt(0).toUpperCase();
		w1+=c;
		w1+=aw[i].slice(1, aw[i].length);
		w1+=" ";
	}
	return w1;
}