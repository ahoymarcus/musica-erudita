/*Mostrando o vídeo de cada instrumento */
let videoContainer = document.querySelectorAll('.videoContainer');
for (let k=0; k< videoContainer.length; k++) {
	videoContainer[k].addEventListener('click', function(e) {
		videoContainer[k].setAttribute('class', 'videoContainer hidden');
		console.log("escondendo div.videoContainer...");
	});
}

let btnPiano = document.querySelector('#btn-piano');
let piano = document.querySelector('#piano');
btnPiano.addEventListener('click', function() {
	if (piano.getAttribute('class') === 'videoContainer hidden') {
		piano.setAttribute('class', 'videoContainer showing');
		console.log("mostrando piano...");
	} else {
		piano.setAttribute('class', 'videoContainer hidden');
		console.log("escondendo piano...");
	}
});

let btnTimpano = document.querySelector('#btn-timpano');
let timpano = document.querySelector('#timpano');
btnTimpano.addEventListener('click', function() {
	if (timpano.getAttribute('class') === 'videoContainer hidden') {
		timpano.setAttribute('class', 'videoContainer showing');
		console.log("mostrando timpano...");
	} else {
		timpano.setAttribute('class', 'videoContainer hidden');
		console.log("escondendo timpano...");
	}
});

let btnCorneta = document.querySelector('#btn-corneta');
let corneta = document.querySelector('#corneta');
btnCorneta.addEventListener('click', function() {
	if (corneta.getAttribute('class') === 'videoContainer hidden') {
		corneta.setAttribute('class', 'videoContainer showing');
		console.log("mostrando corneta...");
	} else {
		corneta.setAttribute('class', 'videoContainer hidden');
		console.log("escondendo corneta...");
	}
});

let btnTuba = document.querySelector('#btn-tuba');
let tuba = document.querySelector('#tuba');
btnTuba.addEventListener('click', function() {
	if (tuba.getAttribute('class') === 'videoContainer hidden') {
		tuba.setAttribute('class', 'videoContainer showing');
		console.log("mostrando tuba...");
	} else {
		tuba.setAttribute('class', 'videoContainer hidden');
		console.log("escondendo tuba...");
	}
});

let btnClarinete = document.querySelector('#btn-clarinete');
let clarinete = document.querySelector('#clarinete');
btnClarinete.addEventListener('click', function() {
	if (clarinete.getAttribute('class') === 'videoContainer hidden') {
		clarinete.setAttribute('class', 'videoContainer showing');
		console.log("mostrando clarinete...");
	} else {
		clarinete.setAttribute('class', 'videoContainer hidden');
		console.log("escondendo clarinete...");
	}
});

let btnOboe = document.querySelector('#btn-oboe');
let oboe = document.querySelector('#oboe');
btnOboe.addEventListener('click', function() {
	if (oboe.getAttribute('class') === 'videoContainer hidden') {
		oboe.setAttribute('class', 'videoContainer showing');
		console.log("mostrando oboe...");
	} else {
		oboe.setAttribute('class', 'videoContainer hidden');
		console.log("escondendo oboe...");
	}
});

let btnViola = document.querySelector('#btn-viola');
let viola = document.querySelector('#viola');
btnViola.addEventListener('click', function() {
	if (viola.getAttribute('class') === 'videoContainer hidden') {
		viola.setAttribute('class', 'videoContainer showing');
		console.log("mostrando viola...");
	} else {
		viola.setAttribute('class', 'videoContainer hidden');
		console.log("escondendo viola...");
	}
});

let btnVioloncelo = document.querySelector('#btn-violoncelo');
let violoncelo = document.querySelector('#violoncelo');
btnVioloncelo.addEventListener('click', function() {
	if (violoncelo.getAttribute('class') === 'videoContainer hidden') {
		violoncelo.setAttribute('class', 'videoContainer showing');
		console.log("mostrando violoncelo...");
	} else {
		violoncelo.setAttribute('class', 'videoContainer hidden');
		console.log("escondendo violoncelo...");
	}
});

let btnViolino = document.querySelector('#btn-violino');
let violino = document.querySelector('#violino');
btnViolino.addEventListener('click', function() {
	if (violino.getAttribute('class') === 'videoContainer hidden') {
		violino.setAttribute('class', 'videoContainer showing');
		console.log("mostrando violino...");
	} else {
		violino.setAttribute('class', 'videoContainer hidden');
		console.log("escondendo violino...");
	}
});		

let btnContraBaixo = document.querySelector('#btn-contra-baixo');
let contraBaixo = document.querySelector('#contra-baixo');
btnContraBaixo.addEventListener('click', function() {
	if (contraBaixo.getAttribute('class') === 'videoContainer hidden') {
		contraBaixo.setAttribute('class', 'videoContainer showing');
		console.log("mostrando contra-baixo...");
	} else {
		contraBaixo.setAttribute('class', 'videoContainer hidden');
		console.log("escondendo contra-baixo...");
	}
});

		
/*Enchendo a viewport com cores (e retirando)*/
function random(number) {
	return Math.floor(Math.random() * number);
}
function bgColorChange() {
	var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	return randomColor;
}

let title = document.querySelector('.title');
let subtitles = document.querySelectorAll('.subtitle h2 a');
let colorindoDivs = document.querySelectorAll('.colorindo');
let instrumentos = document.querySelectorAll('.instrumento');

/* 
	Atençã0: mudar este evento abaixo de onload para uma função com timer!!! 

window.setTimeout(window.onload = function() {
	let j = 0;
	while (j<colorindoDivs.length) {
		if (j % 2 !== 0) {
			colorindoDivs[j].style.backgroundColor = bgColorChange();
			j += random(5);
		} 
		j += random(5);
	}
}, 3000);*/
for (let j=0; j<colorindoDivs.length; j++) {
	colorindoDivs[j].onclick = function(e) {
		e.target.style.backgroundColor = bgColorChange();
	}
}
title.addEventListener('click', function() {
	for (let z=0; z<subtitles.length; z++) {
		subtitles[z].style.color = bgColorChange();
	}
});


/*Manipulando Artigos e Galeria de Imagens*/
let article = document.querySelector('article');
let btnArticle = document.querySelector('#btn-artigo');

let displayedImage = document.querySelector('.displayed-img');
let thumbBar = document.querySelector('.thumb-bar');
let btnImg = document.querySelector('.full-img button');
var overlay = document.querySelector('.full-img .overlay');
let btnGallery = document.querySelector('#btn-gallery');
let imgGallery = document.querySelector('.img-gallery');
let aside = document.querySelector('aside');
let corrigindoMargin = document.querySelector('#margin-top');
 
btnArticle.addEventListener('click', function() {
	for (let z=0; z<subtitles.length; z++) {
		subtitles[z].style.color = bgColorChange();
		for (let x=0; x<colorindoDivs.length; x++) {
			colorindoDivs[x].style.backgroundColor = 'rgb(3, 50, 72)';
		}
	}
	
	
	
	
	/*if (article.style.display === 'none') {
		article.style.display = 'block';
		for (let z=0; z<subtitles.length; z++) {
			subtitles[z].style.backgroundColor = 'rgb(3, 50, 72)';
			for (let x=0; x<colorindoDivs.length; x++) {
				colorindoDivs[x].style.backgroundColor = 'rgb(3, 50, 72)';
			}
		}
	} else {
		article.style.display = 'none';
		for (let z=0; z<subtitles.length; z++) {
			subtitles[z].style.backgroundColor = 'rgb(3, 50, 72)';
			for (let x=0; x<colorindoDivs.length; x++) {
				colorindoDivs[x].style.backgroundColor = 'rgb(3, 50, 72)';
			}
		}
	}*/
});




/* Looping through images */
for (let i=1; i<=5; i++) {
	let newImage = document.createElement('img');
	newImage.setAttribute('src', "multimidia/pic" + i + ".jpg");
	thumbBar.appendChild(newImage);
}

function selectedPic(e) {
	displayedImage.setAttribute('src', e.target.getAttribute('src'));
}
thumbBar.onclick = selectedPic;



/* Wiring up the Darken/Lighten button */
btnImg.onclick = function() {
	if (btnImg.getAttribute('class') === 'dark') {
		btnImg.setAttribute('class', 'light');
		btnImg.textContent = 'Ligthen';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	} else if (btnImg.getAttribute('class') === 'light') {
		btnImg.setAttribute('class', 'dark');
		btnImg.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
}
btnGallery.addEventListener('click', function() {
	
	/*if (imgGallery.style.display === 'none') {
		imgGallery.style.display = 'block';
		corrigindoMargin.style.marginTop = '520px';
	} else {
		imgGallery.style.display = 'none';
		corrigindoMargin.style.marginTop = '0';
	}*/
	/*Re-colorindo a viewport
	let j = 0;
	while (j<colorindoDivs.length) {
		if (j % 2 !== 0) {
			colorindoDivs[j].style.backgroundColor = bgColorChange(); 
			j += random(5);
		} 
		j += random(5);
	}*/
	
	/*Colorindo os .subtitle*/
	for (let z=0; z<subtitles.length; z++) {
		subtitles[z].style.color = bgColorChange();
	}
});

for (let r=0; r<instrumentos.length; r++) {
	instrumentos[r].addEventListener('mouseover', function() {
		/*Re-colorindo a viewport*/
		let q = 0;
		while (q<colorindoDivs.length) {
			if (q % 2 !== 0) {
				colorindoDivs[q].style.backgroundColor = bgColorChange(); 
				q += random(5);
			} 
			q += random(5);
		}
	});
}




/*Gerando novo layout acima de 960px!!!
//A cross-browser solution (using clientWidth and clientHeight for IE8 and earlier) 
let viewWidth = window.innerWidth || document.documentElelement.clientWidth || document.body.clientWidth; 
let viewHeight = window.innerHeight || document.documentElement.clientWidth || document.body.clientWidth;

if (viewWidth >= 960) {
	
}*/











