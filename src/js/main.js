//make paper global
paper.install(window);


$(function() {
	console.log('window loaded');
    paper.setup('generator');
	
	// var path = new Path();
	// path.strokeColor = 'black';
	// var start = new Point(100, 100);
	// path.moveTo(start);
	// path.lineTo(start.add([ 200, -50 ]));

	
	view.viewSize = new Size(700, 700);

	//console.log(paper.project.getItem({class: Path}));

	view.onFrame = function(event) {
		// paper.project.clear();
		// // generate();
		// var paths = project.getItems({class: Path});
		// // console.log(paths);
		// for (var p=0; p<paths.length; p++){
		// 	paths[p].rotate(paths[p].rSpd);

		// }
	}
	var tool = new Tool();
	
	tool.onMouseDown = function(event) {
		console.log("bang");
		paper.project.clear();
		generate();
	}
	
	generate();
});

var genericStyle = {
	strokeColor: '#000000',
	fillColor: '#FFFFFF',
	strokeWidth: 2
};



function generate(){
	//make stuff
	var previous;
	for(var i=0; i<45; i++){
		//newSpellParticle(Math.random() * view.viewSize.width, Math.random() * view.viewSize.height);
		// var t = triangle(100);
		// t.position = new Point(randomRange(100, view.viewSize.width - 100), randomRange(100, view.viewSize.height - 100));

		//var p = polygon(100, randomRange(4, 4));

		var p = polygonPointCloud(100, 20, 90);
		

		// p.position = new Point(randomRange(-50, 50), randomRange(-50, 50));

		
		// if(previous!=null){
		// 	previous.addChild(p)
		// }
		// previous = p;

		// p.fillColor = new Color(Math.random(), Math.random(), Math.random());
		// p.simplify(.5);

		p.rSpd = randomRange(-1, 1);
		

		p.position = new Point(randomRange(100, view.viewSize.width - 100), randomRange(100, view.viewSize.height - 100));
		p.style = genericStyle;
	}

	view.draw();
}

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
	var start = new Point(randomRange(-_radius, _radius), randomRange(-_radius, _radius));
	path.moveTo(start);
	path.lineTo(new Point(randomRange(-_radius, _radius), randomRange(-_radius, _radius)));
	path.lineTo(new Point(randomRange(-_radius, _radius), randomRange(-_radius, _radius)));
	path.lineTo(start);
	return path;
}

function polygon(_radius, _sides){
	//generate points
	var pts = [];
	for(var p = 0; p<_sides; p++){
		pts.push([randomRange(-_radius, _radius), randomRange(-_radius, _radius)]);
	}
	var verts = hull(pts);
	var path = new Path();	
	var start = new Point(verts[0][0], verts[0][1]);
	path.moveTo(start);
	for(var v=1; v<verts.length; v++){
		path.lineTo(new Point(verts[v][0], verts[v][1]));

	}
	
	//path.lineTo(new Point(randomRange(-_radius, _radius), randomRange(-_radius, _radius)));
	path.lineTo(start);
	return path;
}

function polygonPointCloud(_radius, _pointCount, _hullTolernace){
	//generate points
	var pts = [];
	for(var p = 0; p<_pointCount; p++){
		pts.push([randomRange(-_radius, _radius), randomRange(-_radius, _radius)]);
	}
	var verts = hull(pts, _hullTolernace);
	var path = new Path();	
	var start = new Point(verts[0][0], verts[0][1]);
	path.moveTo(start);
	for(var v=1; v<verts.length; v++){
		path.lineTo(new Point(verts[v][0], verts[v][1]));

	}
	
	//path.lineTo(new Point(randomRange(-_radius, _radius), randomRange(-_radius, _radius)));
	// path.lineTo(start);
	path.closed=true;
	return path;
}

function randomRange(_min, _max){
	var mag = _max - _min;
	return _min + (Math.random() * mag);
}