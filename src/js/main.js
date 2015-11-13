//make paper global
paper.install(window);


$(function() {
	console.log('window loaded');
    paper.setup('generator');
	
	var path = new Path();
	path.strokeColor = 'black';
	var start = new Point(100, 100);
	path.moveTo(start);
	path.lineTo(start.add([ 200, -50 ]));

	
	view.viewSize = new Size(700, 700);

	console.log(paper.project.getItem({class: Path}));

	// view.onFrame = function(event) {
	// 	// On each frame, rotate the path by 3 degrees:
	// 	path.rotate(3);

	// }

	//make stuff
	for(var i=0; i<30; i++){
		//newSpellParticle(Math.random() * view.viewSize.width, Math.random() * view.viewSize.height);
		var t = triangle(100);
		t.position = new Point(randomRange(100, view.viewSize.width - 100), randomRange(100, view.viewSize.height - 100));
	}

	view.draw();
});

function newSpellParticle(_x, _y){
	//make a part there

	var path = new Path();
	path.strokeColor = 'black';
	var start = new Point(100, 100);
	path.moveTo(start);
	path.lineTo(start.add([ _x, _y ]));
}

function triangle(_radius){
	var path = new Path();
	//style?
	path.strokeColor = 'black';
	path.fillColor = 'white';
	var start = new Point(randomRange(-_radius, _radius), randomRange(-_radius, _radius));
	path.moveTo(start);
	path.lineTo(new Point(randomRange(-_radius, _radius), randomRange(-_radius, _radius)));
	path.lineTo(new Point(randomRange(-_radius, _radius), randomRange(-_radius, _radius)));
	path.lineTo(start);
	return path;
}

function randomRange(_min, _max){
	var mag = _max - _min;
	return _min + (Math.random() * mag);
}