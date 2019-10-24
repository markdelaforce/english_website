var
testing = false,	// set to true for sizing pictures

current_card_indexes = [],
current_pic_numbers = [],
found_indexes = [],
allow_click = true,
allow_reset = false,
screen_cleared = false,

current_items = [];

function cardClick(index) {
	if (allow_click == true && !found_indexes.includes(index) && index != current_card_indexes[0]) {
		allow_click = false;
		
		cards[index].classList.remove(colour);
		cards[index].classList.add(border);
		cards[index].innerHTML = '';
		
		itemDisplay = document.createElement('div');
		itemDisplay.classList.add('item-display')
		cards[index].appendChild(itemDisplay);
		current_items.push(itemDisplay);
				
		pictureFrame = document.createElement('div');
		pictureFrame.classList.add('picture-frame')
		itemDisplay.appendChild(pictureFrame);
			
		image = document.createElement('img');
		image.classList.add('picture');
		pictureFrame.appendChild(image);

		if (testing == true) {
			var picture_index = 0;		// change index here when sizing pictures
			image.src = pathToFolder + images[picture_index];
			image.style.height = heights[picture_index];
			image.style.top = tops[picture_index];
		}
		else {
			image.src = pathToFolder + images[gamePictures[index]];
			image.style.height = heights[gamePictures[index]];
			image.style.top = tops[gamePictures[index]];
		}
		
		if (rotate_indexes.includes(gamePictures[index])) {
			var len = rotate_indexes.length;
			for (var i = 0; i < len; i++) {
				if (rotate_indexes[i] == gamePictures[index]) {
					image.style.transform = 'rotate(' + rotations[i] + 'deg)';
				}
			}
		}
	
		word = document.createElement('p');
		word.classList.add('text', text_style);
		word.innerHTML = namesText[gamePictures[index]]
		word.style.color = text_colour;
		itemDisplay.appendChild(word);
		
		current_card_indexes.push(index);
		current_pic_numbers.push(gamePictures[index]);
	
		if (current_card_indexes.length == 2) {
			if (current_pic_numbers[0] == current_pic_numbers[1]) {
				var clap = new Audio();
				clap.src = "clapping.mp3";
				clap.play();
				found_indexes.push(current_card_indexes[0]);
				found_indexes.push(current_card_indexes[1]);
				current_card_indexes = [];
				current_pic_numbers = [];
				current_items = [];
			    setTimeout(function() {
					if (found_indexes.length == picturesInUse * 2) {
						allow_reset = true;
					}
					else
						allow_click = true;
			    }, 3800);
			}
			else {
			    setTimeout(function() {
					restoreCard(current_card_indexes[0], 0);
					restoreCard(current_card_indexes[1], 1);
					current_card_indexes = [];
					current_pic_numbers = [];
					current_items = [];
					allow_click = true;
			    }, 1500);
			}
		}
		else {
			allow_click = true;
		}
	}
}

function restoreCard(index, number) {
	cards[index].removeChild(current_items[number]);
	cards[index].classList.remove(border);
	cards[index].classList.add(colour);
	cards[index].innerHTML = current_card_indexes[number]+1;
}

document.addEventListener('keyup', keyEvents);

function keyEvents(event) {
	if (allow_reset == true && event.keyCode == 32) {
		window.location.href = 'title-page.html';		
	}
	else if (event.keyCode == 87) {
		if (screen_cleared == false) {
			cards.forEach(function(card) {
				card.style.visibility = 'hidden';
			});
			screen_cleared = true;
		}
		else {
			cards.forEach(function(card) {
				card.style.visibility = 'visible';
			});
			screen_cleared = false;
		}
	}
}
