window.onload = function() {
	// start crafty
	var cellSize=10;
	
	Crafty.init(400, 400);
	//Crafty.HashMap(cellSize);
	Crafty.background("#000");

	Crafty.c('Grid', {
        _cellSize: cellSize,
        Grid: function(cellSize) {
            if(cellSize) this._cellSize = cellSize;
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
				.attr({x:i*cellSize,y:j*cellSize,w:cellSize-1,h:cellSize-1});
			console.log(cell.col()+":"+cell.row());
		}

	}
};