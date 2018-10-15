
const cards = document.querySelectorAll('.memory_card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var count = 0;
let elementCount = document.getElementsByTagName('span')[0];
var arr = [];

window.onload = prevy;

 function prevy(){



	cards.forEach(card => card.removeEventListener('click', flipCard))
	cards.forEach(card => card.classList.add('flip'));

	setTimeout(function(){
		cards.forEach(card => card.classList.toggle('flip'));
	cards.forEach(card => card.addEventListener('click', flipCard));
},  4000);


}


function flipCard(){

	if(lockBoard) return;
	if(this === firstCard)return;
	this.classList.toggle('flip');

	if(!hasFlippedCard){
		hasFlippedCard = true;
		firstCard = this;
		return;
	};

		hasFlippedCard = false;
		secondCard = this;
		checkForMatch()
}

function checkForMatch(){
	let itMatch = (firstCard.dataset.framework === secondCard.dataset.framework);
	itMatch ? disableCards(): unflipCards();

}

function disableCards(){
	firstCard.removeEventListener("click", flipCard);
	secondCard.removeEventListener("click", flipCard);


	arr.push(firstCard, secondCard);
	resetBoard();
	count = count + 1;

	SetCount(count);
	AddClass ();
};

function unflipCards(){
	lockBoard = true;
	setTimeout(()=> {
			firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');
			resetBoard()
		}, 1500);

	count = count - 1;

	SetCount(count);
	AddClass ();
}

function resetBoard(){
	[hasFlippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];

}


function shuffle(){
	cards.forEach(card => {
		let randomPos = Math.floor(Math.random() * 12);
		card.style.order = randomPos;
	})
};
shuffle();





function SetCount(count){
	// if(count > 8)
	elementCount.innerHTML = count;

}

function AddClass (){
	let div = document.getElementsByClassName('count')[0];
	if(count < 0 ){div.classList.add('color')}else{
		div.classList.remove('color');
	}
}


	let reset = document.getElementsByClassName('reset')[0];

	reset.onclick=function(){
		arr.forEach( card => card.classList.toggle('flip'));
		resetBoard();
		count=0;
		AddClass ();
		SetCount(0);
		shuffle();






		prevy();
	}

