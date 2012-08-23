window.onload = function() {
	// start crafty
	var cellSize=10;
	
	Crafty.init(401, 401);
	//Crafty.HashMap(cellSize);
	Crafty.background("#ccc");

	Crafty.c('Grid', {
        _cellSize: cellSize,
        Grid: function(cs) {
            if(cs) this._cellSize = cs;
            return this;
        },
        col: function(col) {
            if(arguments.length === 1) {
                this.x = this._cellSize * col;
                return this;
            } else {
                return Math.round(this.x / this._cellSize);
            }
        },
        row: function(row) {
            if(arguments.length === 1) {
                this.y = this._cellSize * row;
                return this;
            } else {
                return Math.round(this.y / this._cellSize);
            }
        },      
        snap: function(){
            this.x = Math.round(this.x/this._cellSize) * this._cellSize;
            this.y = Math.round(this.y/this._cellSize) * this._cellSize;
        }
    });
	
	for ( var i = 0; i < 400/cellSize; i++) {
		for ( var j = 0; j < 400/cellSize; j++) {
			var cell=Crafty.e("Cell,2D,DOM,Color,Grid")
				.origin(cellSize/2,cellSize/2)
				.color("#ffffff")
				.attr({x:1+i*cellSize,y:1+j*cellSize,w:cellSize-1,h:cellSize-1,z:1});
			//console.log(cell.col()+":"+cell.row());
		}

	}
	
	var ant=Crafty.e("Ant,Grid").attr({x:100,y:100,z:1000});
	
	console.log(ant.col()+":"+ant.row()+":"+ant.isPlaying("antRunning"));
};