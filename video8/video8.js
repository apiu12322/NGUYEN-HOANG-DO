window.onscroll=function(){
	var kc = document.documentElement.scrollTop;
	console.log(kc);
	var header= document.getElementById('header');
	var tieude=document.getElementById('tieude');
	if(kc>50){
		header.style.padding="10px 20px";
		tieude.style.fontSize="20px";
	}
	else{
		header.style.padding="60px 20px";
		tieude.style.fontSize="30px";
	}

}