(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"StoryGame_atlas_", frames: [[0,0,1386,512],[1654,0,264,134],[1388,136,264,134],[1388,0,264,134],[1654,136,241,55],[0,1156,767,121],[962,514,960,640],[0,514,960,640]]}
];


// symbols:



(lib.bus = function() {
	this.initialize(ss["StoryGame_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["StoryGame_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["StoryGame_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["StoryGame_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["StoryGame_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["StoryGame_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.StartScreen = function() {
	this.initialize(ss["StoryGame_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.StartScreen2 = function() {
	this.initialize(ss["StoryGame_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bus();
	this.instance.parent = this;
	this.instance.setTransform(693,-256,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-693,-256,1386,512);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bus();
	this.instance.parent = this;
	this.instance.setTransform(693,-256,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-693,-256,1386,512);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Rainy Day", "78px 'Vanilla Twilight Script'", "#8DA1DB");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 364;
	this.text.parent = this;
	this.text.setTransform(221,2);

	this.instance = new lib.CachedTexturedBitmap_5();
	this.instance.parent = this;
	this.instance.setTransform(0,72.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(0,0,405,133.1), null);


(lib.startScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Rain2",-1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29));

	// Layer_1
	this.instance = new lib.StartScreen();
	this.instance.parent = this;
	this.instance.setTransform(960,0,1,1,0,0,180);

	this.instance_1 = new lib.StartScreen2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,0,1,1,0,0,180);

	this.instance_2 = new lib.StartScreen2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,0,1,1,0,0,180);

	this.instance_3 = new lib.StartScreen2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,0,1,1,0,0,180);

	this.instance_4 = new lib.CachedTexturedBitmap_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(220.6,581.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},7).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,640);


(lib.startButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("multimedia_rollover_044");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer_1
	this.text = new cjs.Text("Start", "46px 'Poor Richard'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 54;
	this.text.lineWidth = 127;
	this.text.parent = this;
	this.text.setTransform(64.45,6.25);

	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:64.45,y:6.25}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:65.45,y:4.75}}]},1).to({state:[{t:this.instance_2},{t:this.text,p:{x:65.45,y:4}}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.5,132.5,70.7);


(lib.bus_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(693,256);

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-274.95,256);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-274.95},34).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},34).wait(27).to({x:-278.9},0).to({x:-1763.25},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2456.2,0,3842.2,512);


// stage content:
(lib.StoryGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver ();
		
		let _this = this;
		
		function hideState() {
			_this.busMove.visible=false;
			_this.busMove.stop();
		};
		
		hideState();
		
		this.start.addEventListener ("click",startGame);
		 
		function stopBus() {
			if (_this.bus.x=1700) {
				_this.busMove.visible=false;
			}
			else {
				_this.busMove.visible=true;
			}
		};
			
		function startGame() {
			_this.start.visible=false;
			_this.busMove.x=1700;
			_this.busMove.y=370;
			_this.busMove.visible=true;
			_this.busMove.play();
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Action
	this.busMove = new lib.bus_1();
	this.busMove.name = "busMove";
	this.busMove.parent = this;
	this.busMove.setTransform(1577,384,1,1,0,0,0,693,256);

	this.timeline.addTween(cjs.Tween.get(this.busMove).wait(1));

	// Layer_3
	this.start = new lib.startButton();
	this.start.name = "start";
	this.start.parent = this;
	this.start.setTransform(102.55,363.05,1,1,0,0,0,65.5,33);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.startButton(), 3);

	this.titleScreen = new lib.title();
	this.titleScreen.name = "titleScreen";
	this.titleScreen.parent = this;
	this.titleScreen.setTransform(467.5,112.95,1,1,0,0,0,202.5,66.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.titleScreen},{t:this.start}]}).wait(1));

	// Start_Screen
	this.startPage = new lib.startScreen();
	this.startPage.name = "startPage";
	this.startPage.parent = this;
	this.startPage.setTransform(480,320,1,1,0,0,0,480,320);

	this.timeline.addTween(cjs.Tween.get(this.startPage).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,320,1790,320);
// library properties:
lib.properties = {
	id: '6580656BDEDC3848A49CEC7487A9FC25',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/StoryGame_atlas_.png?1623718690700", id:"StoryGame_atlas_"},
		{src:"sounds/multimedia_rollover_044.mp3?1623718690942", id:"multimedia_rollover_044"},
		{src:"sounds/Rain2.mp3?1623718690942", id:"Rain2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6580656BDEDC3848A49CEC7487A9FC25'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;