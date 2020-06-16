window.onscroll=function(){
	var kc = document.documentElement.scrollTop;
	console.log(kc);
	var menu= document.getElementById('menu');
	if(kc>120){
		menu.style.top="0px";
	}
	else{
		menu.style.top="-40px";
	}
}