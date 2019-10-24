sessionStorage.setItem("vocab", 'clothes'); // set from title page when more vocab sets added

var vocab = sessionStorage.vocab;
var pathToFolder = '../images/';

switch (vocab) {

case 'clothes':
	pathToFolder += 'clothes/';
	var
	namesText = [
		'Belt',		'Boots',	'Cap',		'Coat',		'Dress',
		'Glasses',	'Gloves',	'Hat',		'Jacket',	'Jeans',
		'Jumper',	'Scarf',	'Shirt',	'Shoes',	'Shorts',
		'Skirt',	'Socks',	'T-shirt',	'Trainers', 'Trousers'
	],
	images = [
		'belt.png',		'boots.png',	'cap.png',		'coat.png',		'dress.png',
		'glasses.png',	'gloves.png',	'hat.png',		'jacket.png',	'jeans.png',
		'jumper.png',	'scarf.png',	'shirt.png',	'shoes.png',	'shorts.png',
		'skirt.png',	'socks.png',	't-shirt.png',	'trainers.png',	'trousers.png'
	];
	break;
}
