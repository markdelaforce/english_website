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
	
case 'body parts':
	pathToFolder += 'body parts/';
	var
	namesText = [
		'Arm',		'Chin',		'Ear',		'Eyes',		'Face',
		'Fingers',	'Foot',		'Hair',		'Hand',		'Head',
		'Knee',		'Leg',		'Lips',		'Mouth',	'Nose',
		'Teeth',	'Thumb',	'Toes',		'Tongue', 	'Wrist'
	],
	images = [
		'arm.png',		'chin.png',		'ear.png',		'eyes.png',		'face.png',
		'fingers.png',	'foot.png',		'hair.png',		'hand.png',		'head.png',
		'knee.png',		'leg.png',		'lips.png',		'mouth.png',	'nose.png',
		'teeth.png',	'thumb.png',	'toes.png',		'tongue.png',	'wrist.png'
	];
	break;
	
}
