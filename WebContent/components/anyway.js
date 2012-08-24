Crafty.c('AnyWay',{
	_speed:1,
	_run:false,
	init:function(){
		
		this.requires("2D");
		this._movement={x:0,y:0};
		this._originPos={x:0,y:0};
		this._targetPos={x:0,y:0};
		this.bind("EnterFrame", this._enterframe);
	},
	_enterframe:function(){
		if(!this._run)
			return;
		var runDistance=Math.pow((this.x-this._originPos.x),2)+Math.pow((this.y-this._originPos.y),2);
		var needDistance=Math.pow((this._originPos.x-this._targetPos.x),2)+Math.pow((this._originPos.y-this._targetPos.y),2);
		if(runDistance>=needDistance){
			this._run=false;
			this._movement.x=0;
			this._movement.y=0;
		}
		if (this._movement.x !== 0) {
			this.x = Math.round((this.x+this._movement.x)*1000)/1000;
			this.trigger('Moved', { x: this.x - this._movement.x, y: this.y });
		}
		if (this._movement.y !== 0) {
			this.y = Math.round((this.y+this._movement.y)*1000)/1000;
			this.trigger('Moved', { x: this.x, y: this.y - this._movement.y });
		}
	},
	moveTo:function(x,y,speed){
		if(speed && speed>0){
			this._speed=speed;
		}
		this._originPos.x=this.x;
		this._originPos.y=this.y;
		this._targetPos.x=Math.round(x*1000)/1000;
		this._targetPos.y=Math.round(y*1000)/1000;
		var angle=0;
		
		if(this._targetPos.y==this.y){
			if(this._targetPos.x>this.x){
				angle=90;
				this._movement.x=this._speed;
				this._movement.y=0;
			}else if(this._targetPos.x<this.x){
				angle=270;
				this._movement.x=(-this._speed);
				this._movement.y=0;
			}
		}else{
			angle=Math.atan2(this._targetPos.y-this.y,this._targetPos.x-this.x);
			angle=angle*180/Math.PI+90;
			if(angle<0){
				angle+=360;
			}
			
			this._movement.x=Math.round(this._speed+Math.sin(angle*Math.PI/180)*1000)/1000;
			this._movement.y=(-Math.round(this._speed+Math.cos(angle*Math.PI/180)*1000)/1000);
			
			//console.log("mx:"+this._movement.x+" my:"+this._movement.y+" angle:"+angle);
		}
		
		this.attr({rotation:angle});
		this._run=true;
	}
});