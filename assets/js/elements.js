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
],
texts = [
	'Classic card game where each player flips over two cards at a time, trying to find a matching pair.'
];

var
activities = 24,	// now hard coded, but later will be calculated from <activities list>.length
rows = activities / 3;

for (let i = 0; i < rows; i++) {
	
	var row = document.createElement('div');
	row.classList.add('row');
	var anchors = document.createElement('div');
	anchors.classList.add('anchors');
	var descriptions = document.createElement('div');
	descriptions.classList.add('descriptions');
	
	contents.appendChild(row);
	row.appendChild(anchors);
	row.appendChild(descriptions);
	
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
		
		var description = document.createElement('div');
		description.classList.add('description');
		description.classList.add(colors[index][0] + '-description');
		
		var text = document.createElement('p');
		text.classList.add('text');		
		
		if (titles[count] != undefined) {
			anchor.setAttribute('href', hrefs[count]);
			title.innerHTML = titles[count];
			image.setAttribute('src', 'assets/images/' + images[count]);
			text.innerHTML = texts[count];
			count++;
		}
		else {
			title.innerHTML = 'activity';
			text.innerHTML = '... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ...';
		}
		
		anchors.appendChild(anchor);
		anchor.appendChild(activity);
		activity.appendChild(title);
		activity.appendChild(imageHolder);
		imageHolder.appendChild(image);
		
		descriptions.appendChild(description);
		description.appendChild(text);
		
		if (++index === 5)
			index = 0;
	}
}
