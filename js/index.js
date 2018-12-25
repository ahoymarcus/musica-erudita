/*botão menu navegação mobile*/
let btnMenu = document.querySelector('.btn-toggle-menu');
let navMobile = document.querySelector('.nav-primary');

btnMenu.addEventListener('click', function() {
	if (navMobile.style.display !== 'block') {
		navMobile.style.display = 'block';
	} else {
		navMobile.style.display = 'none';
	}
	
});


