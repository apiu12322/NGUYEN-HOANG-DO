window.onscroll=function(){
	var kc = document.documentElement.scrollTop;
	console.log(kc);
	var mn= document.getElementById('menu1');
	if(kc>175){
		mn.classList.add('hieuung');
	}
	else{
		mn.classList.remove('hieuung')
	}
	// body...
}