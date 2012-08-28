Crafty.c('Ant',{
	_status:0,
	_cells:null,
	init:function(){
		this.requires("2D, DOM, SpriteAnimation, AntSprite,AnyWay,Grid")
			.origin("center")
			.animate("antRunning",1,0,3);
			
		var self=this;
		var hitTarget=Crafty.e("2D,DOM,Color,Collision,hitTarget")
		.onHit("Food",function(){
			if(self._status==0){
				self._status=1;
				self.stopMove();
			}
		}).onHit("Lair",function(){
			if(self._status==1){
				self._status=0;
				self.stopMove();
			}
		})
		.attr({x:this.x,y:this.y,w:this.w,h:this.h,z:1002,alpha:0})
		.color("#0f0");
		
		this.attach(hitTarget);
		
		
	},
	run:function(){
		this.animate("antRunning",8,-1);
		this.bind("EnterFrame",this._doRun);
		return this;
	},
	_doRun:function(){
		//console.log("enterframe");
		if(this._status==0){
			if(!this.running)
				this.findfood();
		}else if(this._status==1){
			if(!this.running)
				this.findlair();
		}else{
			this.unbind("EnterFrame",this._doRun);
		}
		
	},
	setMap:function(cells){
		this._cells=cells;
		return this;
	},
	findfood:function(){
		
		var cells=this.forwardCells();

		var targetCell=null;
		var fseg=0;
		for ( var i = 0; i < cells.length; i++) {
			var cell=this._cells[cells[i].col][cells[i].row];
			if(cell.fseg>0){
				if(cell.fseg>fseg){
					targetCell=cell;
					fseg=cell.fseg;
				}
			}
		}
		
		if(targetCell==null){
			var index=Math.floor(cells.length*Math.random());
			//console.log(index);
			targetCell=this._cells[cells[index].col][cells[index].row];
		}
		this.moveTo(targetCell.centerX(),targetCell.centerY());
		
		return this;
	},
	findlair:function(){
		var cells=this.backCells();
		var targetCell=null;
		var lseg=0;
		for (var i = 0; i < cells.length; i++) {
			var cell=this._cells[cells[i].col][cells[i].row];
			if(cell.lseg>0){
				if(cell.lseg>lseg){
					targetCell=cell;
					lseg=cell.lseg;
				}
			}
		}
		
		if(targetCell==null){
			var index=Math.floor(cells.length*Math.random());
			targetCell=this._cells[cells[index].col][cells[index].row];
		}
		this.moveTo(targetCell.centerX(),targetCell.centerY());
		
		return this;
	}
	
});