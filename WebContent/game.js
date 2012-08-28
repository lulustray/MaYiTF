window.onload = function() {
	// start crafty
	var cellSize=20;
	var mapWidth=400;
	var mapHeight=600;
	Crafty.init(mapWidth, mapHeight);
	//Crafty.HashMap(cellSize);
	Crafty.background("#000");

	
	var food=Crafty.e("Food").attr({x:200,y:0,z:1001});
	var lair=Crafty.e("Lair").attr({x:200,y:580,z:1001});
	
	var cells=[];
	for ( var i = 0; i < mapWidth/cellSize; i++) {
		var line=[];
		cells.push(line);
		for ( var j = 0; j < mapHeight/cellSize; j++) {
			var cell=Crafty.e("MapCell")
				.origin(cellSize/2,cellSize/2)
				.attr({x:i*cellSize,y:j*cellSize,w:cellSize,h:cellSize,z:1});
			line.push(cell);
			var distance=Crafty.math.distance(cell.centerX(),cell.centerY(),food.centerX(),food.centerY());
			if(distance<=120){
				cell.fseg=(120-distance)/120;
			}
			distance=Crafty.math.distance(cell.centerX(),cell.centerY(),lair.centerX(),lair.centerY());
			if(distance<=120){
				cell.lseg=(120-distance)/120;
			}
		}
	}
	
	
	
	var ant=Crafty.e("Ant")
				.attr({x:200,y:580,z:1000})
				.grid(cellSize,mapWidth,mapHeight)
				.setMap(cells).run();
	for ( var i = 0; i < 10; i++) {
		Crafty.e("Ant")
		.attr({x:200,y:560,z:1000})
		.grid(cellSize,mapWidth,mapHeight)
		.setMap(cells).run();
	}
	
	
	Crafty.addEvent(this, Crafty.stage.elem, "mousedown", function(e){
		var pos = Crafty.DOM.translate(e.clientX, e.clientY);
		ant.moveTo(pos.x,pos.y);
	});
	
//	Crafty.e("2D,DOM,Color,Solid").attr({x:0,y:-20,w:400,h:20,z:1001}).color("#f00");
//	
//	Crafty.e("2D,DOM,Color,Solid").attr({x:-20,y:0,w:20,h:400,z:1001}).color("#f00");
//	
//	Crafty.e("2D,DOM,Color,Solid").attr({x:0,y:400,w:400,h:20,z:1001}).color("#f00");
//	
//	Crafty.e("2D,DOM,Color,Solid").attr({x:400,y:0,w:20,h:400,z:1001}).color("#f00");
	
	//Crafty.e("Fort,Grid").attr({z:1001});
	
};