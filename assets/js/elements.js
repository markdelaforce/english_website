var
index = 0,
count = 0,
contents = document.getElementById('contents'),
colors = ['orange', 'green', 'blue', 'purple', 'yellow'],
titles = [
	'Pairs'
],
images = [
	'pairs.jpg'
],
hrefs = [
	'games/pairs/title-page.html'
];

var
activities = 24,	// now hard coded, but later will be calculated from <activities list>.length
rows = activities / 3;

for (let i = 0; i < rows; i++) {
	
	var row = document.createElement('div');
	row.classList.add('row');
	contents.appendChild(row);
	
	for (let j = 0; j < 3; j++) {
		
		var anchor = document.createElement('a');
		
		var activity = document.createElement('div');
		activity.classList.add(colors[index]);
		
		var title = document.createElement('div');
		title.classList.add(colors[index][0] + '-top');
		
		var imageHolder = document.createElement('div');
		imageHolder.classList.add('image-holder');
		
		var image = document.createElement('img');
		image.classList.add('image');
		
		if (titles[count] != undefined) {
			anchor.setAttribute('href', hrefs[count]);
			title.innerHTML = titles[count];
			image.setAttribute('src', 'assets/images/' + images[count]);
		}
		else
			title.innerHTML = 'activity';
		
		row.appendChild(anchor);
		anchor.appendChild(activity);
		activity.appendChild(title);
		activity.appendChild(imageHolder);
		imageHolder.appendChild(image);
		
		count++;
		index++;
		if (index === 5)
			index = 0;
	}
}
