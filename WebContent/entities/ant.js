Crafty.c('Ant',{
	init:function(){
		this.requires("2D, DOM, SpriteAnimation, AntSprite,AnyWay")
			.origin("center")
			.animate("antRunning",1,0,3)
			.animate("antRunning",8,-1);
	}
});