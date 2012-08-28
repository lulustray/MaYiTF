Crafty.c("Food",{
	init:function(){
		this.requires("2D,DOM,Color")
		.color("#0F0")
		.origin("center")
		.attr({w:20,h:20});
	},
	centerX:function(){
		return this.x+this.w/2;
	},
	centerY:function(){
		return this.y+this.h/2;
	}
});