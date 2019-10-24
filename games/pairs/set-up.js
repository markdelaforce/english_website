var
game_index = sessionStorage.game -1,

grid_row_classes      = ['four-rows',       'four-rows',       'five-rows'      ],
grid_column_classes   = ['five-columns',    'six-columns',     'six-columns'    ],
card_size_classes     = ['card-size-20',    'card-size-24',    'card-size-30'   ],
board_width_classes   = ['board-width-20',  'board-width-24',  'board-width-30' ],
board_height_classes  = ['board-height-20', 'board-height-24', 'board-height-30'],
text_classes          = ['text-20-cards',   'text-24-cards',   'text-30-cards'  ],

grid_rows    =     grid_row_classes[game_index],
grid_columns =  grid_column_classes[game_index],
card_size    =    card_size_classes[game_index],
board_width  =  board_width_classes[game_index],
board_height = board_height_classes[game_index],
text_style   =         text_classes[game_index],

border, colour, text_colour;

switch (vocab) {
	
case 'clothes':
	border = 'green-border';
	colour = 'green-card';
	text_colour = '#16692e';
	document.body.style.background = '#eafbef';
	break;
	
}

var columns, rows;

if (game_index == 0) {
	columns = 5;
	rows = 4;
}
else if (game_index == 1) {
	columns = 6;
	rows = 4;
}
else {
	columns = 6;
	rows = 5;
}

var
cards = [],
count = 1,
board = document.getElementById('board');
board.classList.add('grid-display', grid_rows, board_height);

for (var i = 0; i < rows; i++) {
	row = document.createElement('div');
	row.classList.add('grid-display', grid_columns, board_width);
	board.appendChild(row);

	for (var j = 0; j < columns; j++) {
		card = document.createElement('div');
		card.classList.add('card', colour, card_size);
		card.innerHTML = count++;
		row.appendChild(card);
		
		cards.push(card);
	}
}

var numberOfCards = cards.length;

function showCards(index){
  if (index < numberOfCards) {
    setTimeout(function() {
      cards[index].style.visibility = 'visible';
      showCards(++index);
    }, 50);
  }
}
showCards(0);

var
all_indexes = [],
unusedIndexes = sessionStorage.getItem("unusedIndexes");

if (unusedIndexes === null || unusedIndexes === '') {
	addAllIndexes ();
}
else {
	var temp = unusedIndexes.split(',');
	temp.forEach(function (index) {
		all_indexes.push(Number(index));
	});
}

function addAllIndexes () {
	for (var i = 0; i < 20; i++) {
		all_indexes.push(i);
	}
}

var
picturesInUse = (columns * rows) / 2,
gamePictures = shuffledIndexes();

function shuffledIndexes() {
	var pictures = [];
	
	while (pictures.length < picturesInUse) {
		if (all_indexes.length == 0) {
			addAllIndexes ();
		}
		var random = Math.floor(Math.random() * all_indexes.length);
		var index = all_indexes[random];
		if (!pictures.includes(index)) {
			pictures.push(index);
			all_indexes.splice(random, 1);
		}
	}
	sessionStorage.setItem("unusedIndexes", all_indexes);
	return shuffle(pictures.concat(pictures));
}

function shuffle(array) {
	var
	arrayLength = array.length,
	shuffledPics = [];
	for (var i = 0; i < arrayLength; i++) {
		var random = Math.floor(Math.random() * array.length);
		shuffledPics.push(array.splice(random, 1)[0]);
	}
	return shuffledPics;
}

cards.forEach(function(card, index) {
	card.setAttribute('onclick', 'cardClick(' + index + ')')
});
