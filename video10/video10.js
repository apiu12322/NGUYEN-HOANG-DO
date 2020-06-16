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

function timkiem_click(){
	var tk= document.getElementById('divtimkiem');
	if(tk.style.opacity=="1"){
		tk.style.opacity="0";
		tk.style.top="70px";
		tk.style.left="20px";
		tk.style.transition="0.5s";
	}
	else{
		tk.style.opacity="1";
		tk.style.top="45px";
		tk.style.left="0px";
		tk.style.transition="0.5s";
	}
}