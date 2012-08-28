Crafty.c("Fort",{
	_radius:20,
	_builded:false,
	init:function(){
		this.requires("2D,DOM,Mouse,Color")
		.attr({w:20,h:20,alpha:0.5,visible:false})
		.origin("center")
		.color("#f00");
		
		this._ondrag=function(e){
			var pos=Crafty.DOM.translate(e.clientX, e.clientY);

            // ignore invalid 0 0 position - strange problem on ipad
            if (pos.x == 0 || pos.y == 0) {
                return false;
            }
            this.visible=true;
            this.x=pos.x-this.w/2;
            this.y=pos.y-this.h/2;
		};
		
		this._ondown=function(e){
			
			Crafty.removeEvent(this, Crafty.stage.elem, "mousemove", this._ondrag);
            Crafty.removeEvent(this, Crafty.stage.elem, "mousedown", this._ondown);
            
			var pos=Crafty.DOM.translate(e.clientX, e.clientY);

            // ignore invalid 0 0 position - strange problem on ipad
            if (pos.x == 0 || pos.y == 0) {
                return false;
            }
            this.x=pos.x-this.w/2;
            this.y=pos.y-this.h/2;
            
            this.attr({alpha:1});
			this._builded=true;
		};
		
		Crafty.addEvent(this, Crafty.stage.elem, "mousedown", this._ondown);
		Crafty.addEvent(this, Crafty.stage.elem, "mousemove", this._ondrag);
	}
});