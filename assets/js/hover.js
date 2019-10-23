(function() {
	
	var orange_boxes, green_boxes, blue_boxes, purple_boxes, yellow_boxes;
	
	addEventListeners(orange_boxes, 'orange', '#f18227', '#f49d57', 'o-top');
	addEventListeners(green_boxes, 'green', '#b9eb14', '#c5ef41', 'g-top');
	addEventListeners(blue_boxes, 'blue', '#80aae5', '#acc7ee', 'b-top');
	addEventListeners(purple_boxes, 'purple', '#895dee', '#ab8cf3', 'p-top');
	addEventListeners(yellow_boxes, 'yellow', '#ffff00', '#f2eb0d', 'y-top');
	
})();

function addEventListeners(boxes, colorClass, inColor, outColor, topClass) {
	boxes = Array.from(document.getElementsByClassName(colorClass));
	boxes.forEach(box => {
		box.addEventListener('mouseover', () => {
			styleBox(box, inColor, topClass, '3.1vw');
		});
		box.addEventListener('mouseout', () => {
			styleBox(box, outColor, topClass, '3vw');
		});
	});
}

function styleBox(box, color, top_class, size) {
	let top = box.getElementsByClassName(top_class)[0];
	box.style.borderColor = color;
	top.style.background = color;
	top.style.fontSize = size;
}
