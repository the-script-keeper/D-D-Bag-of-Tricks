let urlsByColor = {
	grey : [
		'Statblocks/Grey/badger.png',
		'Statblocks/Grey/giantrat.png',
		'Statblocks/Grey/badger.png',
		'Statblocks/Grey/boar.png',
		'Statblocks/Grey/panther.png',
		'Statblocks/Grey/giant badger.png',
		'Statblocks/Grey/dire wolf.png',
		'Statblocks/Grey/giant elk.png'
	],
	rust : [
		'Statblocks/Rust/rat.png',
		'Statblocks/Rust/owl.png',
		'Statblocks/Rust/mastiff.png',
		'Statblocks/Rust/goat.png',
		'Statblocks/Rust/giant goat.png',
		'Statblocks/Rust/giant boar.png',
		'Statblocks/Rust/lion.png',
		'Statblocks/Rust/brown bear.png'
	],
	tan  : [
		'Statblocks/Tan/jackal.png',
		'Statblocks/Tan/ape.png',
		'Statblocks/Tan/baboon.png',
		'Statblocks/Tan/axe beak.png',
		'Statblocks/Tan/black bear.png',
		'Statblocks/Tan/giant weasel.png',
		'Statblocks/Tan/giant hyena.png',
		'Statblocks/Tan/tiger.png'
	]
};

function changeBall(e) {
	const urls = urlsByColor[e.target.id];
	const randomIndex = Math.floor(Math.random() * urls.length);
	const randomUrl = urls[randomIndex];
	const associatedBall = e.target.closest('.column').querySelector('.ball');

	console.log(`change ${e.target.id} to ${randomUrl}`);
	associatedBall.src = randomUrl;
	console.log(associatedBall);
}

[ ...document.querySelectorAll('.color.button') ].forEach((button) =>
	button.addEventListener('click', changeBall)
);
