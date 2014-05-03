function TextureBox() {
	this.OnCreate() ;
	return this ;
} // TextureBox() 

// create container
TextureBox.prototype.OnCreate = function() {
	// texture box
	this.box = new createjs.Container() ;
	this.box.x = 650, this.box.y = 0 ;
	this.box.bg = new createjs.Shape() ;
	this.box.bg.graphics.beginFill( "#FFCCAA" ).drawRect( 0, 0, 250, 550 ) ;
	this.box.addChild( this.box.bg ) ;
	// texture selector container
	this.box.selector = new createjs.Container() ;
	this.box.selector.x = 25, this.box.selector.y = 25 ;
	this.box.addChild( this.box.selector ) ;
	this.box.selector.bg = new createjs.Shape() ;
	this.box.selector.bg.graphics.beginFill( "#FFA54F" ).drawRect( 0, 0, 200, 500 ) ;
	this.box.selector.addChild( this.box.selector.bg ) ;
	// texture selector button - texture
	this.box.selector.buttonA = new createjs.Container() ;
	this.box.selector.buttonA.x = 0, this.box.selector.buttonA.y = 0 ;
	this.box.selector.addChild( this.box.selector.buttonA ) ;
	this.box.selector.buttonA.bg = new createjs.Shape() ;
	this.box.selector.buttonA.bg.graphics.beginFill( "#00BFFF" ).drawRect( 0, 0, 67, 25 ) ;
	this.box.selector.buttonA.text = new createjs.Text( "Texture", "14px comic sans ms", "#000000" ) ;
	this.box.selector.buttonA.text.x = 6, this.box.selector.buttonA.text.y = 7 ;
	this.box.selector.buttonA.addChild( this.box.selector.buttonA.bg, this.box.selector.buttonA.text ) ;
	// texture selector button - walkable
	this.box.selector.buttonB = new createjs.Container() ;
	this.box.selector.buttonB.x = 67, this.box.selector.buttonB.y = 0 ;
	this.box.selector.addChild( this.box.selector.buttonB ) ;
	this.box.selector.buttonB.bg = new createjs.Shape() ;
	this.box.selector.buttonB.bg.graphics.beginFill( "#87CEEB" ).drawRect( 0, 0, 66, 25 ) ;
	this.box.selector.buttonB.text = new createjs.Text( "Walkable", "14px comic sans ms", "#000000" ) ;
	this.box.selector.buttonB.text.x = 3, this.box.selector.buttonB.text.y = 7 ;
	this.box.selector.buttonB.addChild( this.box.selector.buttonB.bg, this.box.selector.buttonB.text ) ;
	// texture selector button - object
	this.box.selector.buttonC = new createjs.Container() ;
	this.box.selector.buttonC.x = 133, this.box.selector.buttonC.y = 0 ;
	this.box.selector.addChild( this.box.selector.buttonC ) ;
	this.box.selector.buttonC.bg = new createjs.Shape() ;
	this.box.selector.buttonC.bg.graphics.beginFill( "#00BFFF" ).drawRect( 0, 0, 67, 25 ) ;
	this.box.selector.buttonC.text = new createjs.Text( "Object", "14px comic sans ms", "#000000" ) ;
	this.box.selector.buttonC.text.x = 10, this.box.selector.buttonC.text.y = 7 ;
	this.box.selector.buttonC.addChild( this.box.selector.buttonC.bg, this.box.selector.buttonC.text ) ;
	// texture selector button - light
	this.box.selector.buttonD = new createjs.Container() ;
	this.box.selector.buttonD.x = 0, this.box.selector.buttonD.y = 25 ;
	this.box.selector.addChild( this.box.selector.buttonD ) ;
	this.box.selector.buttonD.bg = new createjs.Shape() ;
	this.box.selector.buttonD.bg.graphics.beginFill( "#87CEEB" ).drawRect( 0, 0, 67, 25 ) ;
	this.box.selector.buttonD.text = new createjs.Text( "Light", "14px comic sans ms", "#000000" ) ;
	this.box.selector.buttonD.text.x = 18, this.box.selector.buttonD.text.y = 7 ;
	this.box.selector.buttonD.addChild( this.box.selector.buttonD.bg, this.box.selector.buttonD.text ) ;
	// texture selector button - sound
	this.box.selector.buttonE = new createjs.Container() ;
	this.box.selector.buttonE.x = 67, this.box.selector.buttonE.y = 25 ;
	this.box.selector.addChild( this.box.selector.buttonE ) ;
	this.box.selector.buttonE.bg = new createjs.Shape() ;
	this.box.selector.buttonE.bg.graphics.beginFill( "#00BFFF" ).drawRect( 0, 0, 66, 25 ) ;
	this.box.selector.buttonE.text = new createjs.Text( "Sound", "14px comic sans ms", "#000000" ) ;
	this.box.selector.buttonE.text.x = 13, this.box.selector.buttonE.text.y = 7 ;
	this.box.selector.buttonE.addChild( this.box.selector.buttonE.bg, this.box.selector.buttonE.text ) ;
	// texture selector button - save
	this.box.selector.buttonF = new createjs.Container() ;
	this.box.selector.buttonF.x = 133, this.box.selector.buttonF.y = 25 ;
	this.box.selector.addChild( this.box.selector.buttonF ) ;
	this.box.selector.buttonF.bg = new createjs.Shape() ;
	this.box.selector.buttonF.bg.graphics.beginFill( "#87CEEB" ).drawRect( 0, 0, 67, 25 ) ;
	this.box.selector.buttonF.text = new createjs.Text( "Save", "14px comic sans ms", "#000000" ) ;
	this.box.selector.buttonF.text.x = 18, this.box.selector.buttonF.text.y = 7 ;
	this.box.selector.buttonF.addChild( this.box.selector.buttonF.bg, this.box.selector.buttonF.text ) ;
} // OnCreate()