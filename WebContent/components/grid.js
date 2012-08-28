Crafty.c('Grid', {
        _cellSize: 20,
        _mapWidth:0,
        _mapHeight:0,
        _maxCol:0,
        _maxRow:0,
        _oldRow:0,
        _oldCol:0,
        init:function(){
        	this.bind("Moved",function(e){
        		var newCol=this.col();
        		var newRow=this.row();
        		if(newCol!=this._oldCol || newRow!=this._oldRow){
        			this.trigger('CellChanged', { col: this._oldCol,row:this._oldRow });
        			this._oldCol=newCol;
            		this._oldRow=newRow;
        		}
        	});
        },
        grid: function(cs,mw,mh) {
            if(cs) this._cellSize = cs;
            if(mw) this._mapWidth = mw;
            if(mh) this._mapHeight = mh;
            this._maxCol=Math.round(this._mapWidth / this._cellSize)-1;
            this._maxRow=Math.round(this._mapHeight / this._cellSize)-1;
            this._oldCol=this.col();
    		this._oldRow=this.row();
            return this;
        },
        col: function(col) {
            if(arguments.length === 1) {
                this.x = this._cellSize * col;
                return this;
            } else {
                return this.x<=this._mapWidth?Math.round(this.x / this._cellSize):this._maxCol;//Math.round(this._mapWidth / this._cellSize);
            }
        },
        row: function(row) {
            if(arguments.length === 1) {
                this.y = this._cellSize * row;
                return this;
            } else {
                return this.y<this._mapHeight?Math.round(this.y / this._cellSize):this._maxRow;//Math.round(this._mapHeight / this._cellSize);
            }
        },      
        snap: function(){
            this.x = Math.round(this.x/this._cellSize) * this._cellSize;
            this.y = Math.round(this.y/this._cellSize) * this._cellSize;
        },
        forwardCells:function(){
        	var col=this.col();
        	var row=this.row();
        	if(row>0){
        		row--;
        	}
        	var cells=[];
        	col--;
        	if(col>=0){
        		cells.push({col:col,row:row});
        	}
        	col++;
        	if(row!=this._oldRow)
        		cells.push({col:col,row:row});
        	col++;
        	if(col<=this._maxCol){
        		cells.push({col:col,row:row});
        	}
        	return cells;
        },
        backCells:function(){
        	var col=this.col();
        	var row=this.row();
        	if(row<this._maxRow){
        		row++;
        	}
        	
        	var cells=[];
        	col--;
        	if(col>=0){
        		cells.push({col:col,row:row});
        	}
        	col++;
        	if(row!=this._oldRow)
        	cells.push({col:col,row:row});
        	col++;
        	if(col<=this._maxCol){
        		cells.push({col:col,row:row});
        	}
        	return cells;
        }
        
    });