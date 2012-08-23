Crafty.c('Ant',{
	init:function(){
		console.log("init ant...");
		this.requires("2D, DOM, SpriteAnimation, AntSprite")
			.origin(7,7)
			.animate("antRunning",1,0,3)
			.animate("antRunning",8,-1);
	}
});