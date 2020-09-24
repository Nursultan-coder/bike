$(document).ready(function (){
	document.querySelector('.menu-icon').onclick=function(){
  		this.classList.toggle('active');
  		$('.menu__body').classList.toggle('active');
	}
});

