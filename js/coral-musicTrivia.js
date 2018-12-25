/*Web Storage: greeting*/
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('header form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const greeting = document.querySelector('header span');
const personalGreeting = document.querySelector('.todo h1');

submitBtn.addEventListener('click', function() {
	localStorage.setItem('name', nameInput.value);
	
	nameDisplayCheck();
});

forgetBtn.addEventListener('click', function() {
	localStorage.removeItem('name');
	
	nameDisplayCheck();
});

function nameDisplayCheck() {
	// check whether the 'name' data item is stored in web Storage
	if (localStorage.getItem('name')) {
		let name = localStorage.getItem('name');
		greeting.textContent = ', ' + name + '!';
		personalGreeting.textContent = 'Come and see, ' + name + ', what you really know!';
		// hiding the 'remember' part of the form and showing the 'forget' part	
		rememberDiv.style.visibility = 'hidden';
		forgetDiv.style.visibility = 'visible';
	} else {
		greeting.textContent = '!';
		personalGreeting.textContent = 'Let\'s see what you do really know?';
		// hiding the 'forget' part of the form and showing the 'remember' part	
		rememberDiv.style.visibility = 'visible';
		forgetDiv.style.visibility = 'hidden';
	}
}
document.body.onload = nameDisplayCheck;


/*Web Storage: add-a-question*/
let questionsForm = document.querySelector('#add-question');
let resetLocalStorage = document.querySelector('#add-a-question small');
let formChildren = questionsForm.children;
let quizCostumList = document.querySelector('#question-list');

resetLocalStorage.onclick = function() {
	let res = window.prompt("Are you sure you want to reset your Trivia Custom List?", "No")
	if (res === 'No') {
		resetLocalStorage.innerHTML = 'Ufa! Essa foi por pouco!!!'
		resetLocalStorage.style.color = 'rgba(0,0,255,1)';
		window.setTimeout(function() { resetLocalStorage.innerHTML = 'or Reset the Quiz list!' }, 4000);
		window.setTimeout(function() { resetLocalStorage.style.color = 'rgba(116,140,64)' }, 6000);
	} else {
		window.localStorage.removeItem('questions');
		while (quizCostumList.hasChildNodes()) {
			quizCostumList.removeChild(quizCostumList.firstChild);
			/* ou quizCostumList.removeChild(quizCostumList[0]);
			*/
		}
	}
}
questionsForm.onsubmit = validateForm;

function validateForm() {
	event.preventDefault();
	if (formChildren[2].value === '' || formChildren[3].value === '' || formChildren[4].value === '' || formChildren[5].value === '' || formChildren[6].value === '') {
		window.alert("Please, complete the form before continuing!");
	} else {
		processForm();
	}
}

function processForm() {
	event.preventDefault();
	let newQuestion = 
	{
		question: questionsForm.question.value,
		choiceA: questionsForm.choiceA.value,
		choiceB: questionsForm.choiceB.value,
		choiceC: questionsForm.choiceC.value,
		choiceD: questionsForm.choiceD.value,
		correct: questionsForm.correct.value
	};
	if (window.localStorage.getItem('questions')) {
		/*
			Atenção: o uso do JSON torna o objeto acima em uma simples variável string, pelo que posso entender aqui!!!
			1. We use the JSON.stringify() method to convert the questions object array to a string before storing it in local storage, which stores string values.
			2. We use the JSON.parse() method to parse the string we retrieve from local storage into a JavaScript object.
		*/
		// if local storage contains questions, pull and update stored data. Store new object otherwise
		let questions = Array.from(JSON.parse(window.localStorage.getItem('questions')));
		// preenchendo o objeto com os novos valores tirados do formulário
		questions.push(newQuestion);
		window.localStorage.setItem('questions', JSON.stringify(questions));
	} else {
		window.localStorage.setItem('questions', JSON.stringify(newQuestion));
	}
	questionsForm.reset();
	return false;
}


/*Quiz Input*/
let question = document.querySelector('#question');
let choiceA = document.querySelector('#choiceA');
let choiceB = document.querySelector('#choiceB');
let choiceC = document.querySelector('#choiceC');
let choiceD = document.querySelector('#choiceD');

/*Atention: here we have a new DOM method that works as list*/
let choicesName = document.getElementsByName('choices');
let userChoice;

let storedQuestions;
var newCustomList = [];
let currentQuestion = document.querySelector('.current');
let totalQuestions = document.querySelectorAll('.total');
let score = document.querySelector('.score');
let scoreArr = [];
let countQuestion = 0;
let points = 0;
let submit = document.querySelector('.quiz button');

let results = document.querySelector('.results');
let reTake = document.querySelectorAll('.retake');

// Recebendo a base de dados defaultQuestions
let questions = defaultQuestions;

// start quiz
populateDataQuestions();
renderQuestion();
// set score
score.innerHTML = 0;
totalQuestions[1].innerHTML = questions.length;

// Retake quiz
for (let i=0; i<reTake.length; i++) {
	reTake[i].addEventListener('click', resetQuiz);
}

function resetQuiz() {
	countQuestion = 0;
	countQuestion = 0;
	points = 0;
	scoreArr = [];
	score.innerHTML = 0;
	//totalQuestions[1].innerHTML = '';
	
	submit.disabled = false;
	
	let resultsList = results.children;
	while (resultsList.length > 1) {
		results.removeChild(resultsList[1]);
	}
	renderQuestion();
}

function populateDataQuestions() {
	if(window.localStorage.getItem("questions")){
        storedQuestions = JSON.parse(window.localStorage.getItem("questions"));
		//window.console.log(storedQuestions);
		//window.console.log(typeof storedQuestions);
        for(let m = 0; m < storedQuestions.length; m++){
            questions.push(storedQuestions[m]);
			//window.console.log(storedQuestions[m]);
			
			// montando a quizCostumList
			let quizQuestionNumber = document.createTextNode("Questão " + (m+1) + ": ");
			let quizCostumItem = document.createElement('h5');
			quizCostumItem.appendChild(quizQuestionNumber);
			
			let h5QuizQuest = document.createElement('h5');
			let h6QuizA = document.createElement('h6');
			let h6QuizB = document.createElement('h6');
			let h6QuizC = document.createElement('h6');
			let h6QuizD = document.createElement('h6');
			let h6QuizCorrect = document.createElement('h6');
			let h5QuizTextQuest = document.createTextNode(storedQuestions[m].question);
			let h6QuizTextA = document.createTextNode(storedQuestions[m].choiceA);
			let h6QuizTextB = document.createTextNode(storedQuestions[m].choiceB);
			let h6QuizTextC = document.createTextNode(storedQuestions[m].choiceC);
			let h6QuizTextD = document.createTextNode(storedQuestions[m].choiceD);
			let h6QuizTextCorrect = document.createTextNode(storedQuestions[m].correct);
			h5QuizQuest.appendChild(h5QuizTextQuest);
			h6QuizA.appendChild(h6QuizTextA);
			h6QuizB.appendChild(h6QuizTextB);
			h6QuizC.appendChild(h6QuizTextC);
			h6QuizD.appendChild(h6QuizTextD);
			h6QuizCorrect.appendChild(h6QuizTextCorrect);
			
			quizCostumItem.appendChild(h5QuizQuest);
			quizCostumItem.appendChild(h6QuizA);
			quizCostumItem.appendChild(h6QuizB);
			quizCostumItem.appendChild(h6QuizC);
			quizCostumItem.appendChild(h6QuizD);
			quizCostumItem.appendChild(h6QuizCorrect);
			
			
			let btnDoneItem = document.createElement('span');
			btnDoneItem.textContent = 'x';
			
			// Def um listener para o elemt small
			btnDoneItem.addEventListener('click', removeListItem);
			quizCostumItem.appendChild(btnDoneItem);
			
			quizCostumList.appendChild(quizCostumItem);
			
			
			
        }
    }
}
function removeListItem(e) {
	// Removing item from quizCostumList
	quizCostumList.removeChild(e.target.parentElement);
	
	// Trying to Clean the questions or storedQuestions objects
	/* O mét abaixo ao deletar simplesmente torna o índice null!
	for (let member in questions) {
		delete questions[member];
	}*/
	
	// reseting newCustomList array
	newCustomList = [];
	
	// Saving quizCostumList into window.localStorage
	for (let mmm=0; mmm<quizCostumList.children.length; mmm++) {
		
		let reformedListQuestion =  
		{ 
			question: quizCostumList.children[mmm].firstElementChild.firstChild.nodeValue,
			
			choiceA: quizCostumList.children[mmm].firstElementChild.nextElementSibling.firstChild.nodeValue,
			
			choiceB: quizCostumList.children[mmm].firstElementChild.nextElementSibling.nextElementSibling.firstChild.nodeValue,
			
			choiceC: quizCostumList.children[mmm].lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.nodeValue,
			
			choiceD: quizCostumList.children[mmm].lastElementChild.previousElementSibling.previousElementSibling.firstChild.nodeValue,
			
			correct: quizCostumList.children[mmm].lastElementChild.previousElementSibling.firstChild.nodeValue,
		} 
		
		// Criar outro objecto tb não está resolvendo!
		//let newCustomList = {};
		//let newCustomList = [];
		
		newCustomList.push(reformedListQuestion);
		console.log(quizCostumList.children[mmm]);
		console.log(quizCostumList.children[mmm].lastElementChild.previousElementSibling.firstChild);
		
		// Veja que o node é um objeto, e portanto é preciso alcançar o valor de seu text node!
		console.log(typeof quizCostumList.children[mmm].lastElementChild.previousElementSibling.firstChild);
	}
	window.localStorage.setItem('questions', JSON.stringify(newCustomList));
	
}


function renderQuestion() {
	currentQuestion.innerHTML = '';
	totalQuestions[0].innerHTML = '';
	choiceA.previousElementSibling.checked = false;
	choiceB.previousElementSibling.checked = false;
	choiceC.previousElementSibling.checked = false;
	choiceD.previousElementSibling.checked = false;
	
	question.innerHTML = questions[countQuestion].question;
	choiceA.innerHTML = questions[countQuestion].choiceA;
	choiceB.innerHTML = questions[countQuestion].choiceB;
	choiceC.innerHTML = questions[countQuestion].choiceC;
	choiceD.innerHTML = questions[countQuestion].choiceD;
	
	let countCurrent = document.createTextNode(countQuestion+1);
	currentQuestion.appendChild(countCurrent);
	let countQuestions = document.createTextNode(String(questions.length));
	totalQuestions[0].appendChild(countQuestions);
	/*Atenção: there is the requirement in the no method cloneNode(require), because if the Boolean parameter is set to true, the cloned node will clones all the child nodes of the original node as well*/
	//let x = countQuestions.cloneNode(false);
	//totalQuestions[1].appendChild(x);
	
	submit.addEventListener('click', validateAnswer);
}
	
function validateAnswer() {
	/*
		The difference between this property and nextElementSibling, is that nextSibling returns the next sibling node as an element node, a text node or a comment node, while nextElementSibling returns the next sibling node as an element node (ignores text and comment nodes).
	*/
	if (choiceA.previousElementSibling.checked === false && choiceB.previousElementSibling.checked === false && choiceC.previousElementSibling.checked === false && choiceD.previousElementSibling.checked === false) {
		window.alert("Please, select an answer before continuing!");
	} else {
		for (let j=0; j<choicesName.length; j++) {
			if (choicesName[j].checked) {
				// gravando a resposta do user
				userChoice = choicesName[j].value;
				
				if (userChoice === questions[countQuestion].correct) {
					points++;
					scoreArr.push('correct');
					score.innerHTML = points;
				} else {
					scoreArr.push('incorrect');
				}
			} 
		} 
		countQuestion++;
		if (countQuestion === questions.length) {
			for (let j=0; j<scoreArr.length; j++) {
				let para = document.createElement('p');
				para.innerHTML = "Question #" + (j+1) + ": " + scoreArr[j].toUpperCase();
				if (scoreArr[j] === 'correct') {
					para.setAttribute('class', 'correct');
				} else {
					para.setAttribute('class', 'incorrect');
				}
				results.appendChild(para);
				submit.disabled = true;
			}
		} else {
			renderQuestion();
		}
	}
}








/*Data*/
/*var defaultQuestions = [
    {
        question: "Where are the three smallest bones in the human body?",
        choiceA: "middle ear",
        choiceB: "nose",
        choiceC: "toes",
        choiceD: "eyes",
        correct: "A"
    },
    {
        question: "What is the most abundant element in the Universe?",
        choiceA: "Helium",
        choiceB: "Oxygen",
        choiceC: "Lithium",
        choiceD: "Hydrogen",
        correct: "D"
    },
    {
        question: "Approximately how long does it take for light to travel from the Sun's surface to the Earth?",
        choiceA: "8 days",
        choiceB: "8 seconds",
        choiceC: "8 minutes",
        choiceD: "8 hours",
        correct: "C"
    },
    {
        question: "What is 10/2?",
        choiceA: "5",
        choiceB: "2",
        choiceC: "8",
        choiceD: "9",
        correct: "A"
    },
    {
        question: "Which planet has the most moons?",
        choiceA: "Saturn",
        choiceB: "Mars",
        choiceC: "Jupiter",
        choiceD: "Uranus",
        correct: "C"
    }]*/