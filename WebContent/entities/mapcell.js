Crafty.c("MapCell",{
	fseg:0,
	lseg:0,
	init:function(){
		this.requires("2D,DOM,Color")
		.origin("center")
		.color("#0cf")
		.bind("EnterFrame",function(){
			if(this.fseg>1)
				this.fseg=1;
			if(this.lseg>1)
				this.lseg=1;
			this.attr({alpha:1-this.lseg});
		});
	},
	centerX:function(){
		return this.x+this.w/2;
	},
	centerY:function(){
		return this.y+this.h/2;
	}
});