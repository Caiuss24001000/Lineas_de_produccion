var stage, loader, instruct, instructText, times, timesText;
var tutorialST = "torial";
var showDiagram = false;
var nstations = 4;
var estacionI1, cursor, cursor2, flecha1, flecha2, flecha3, flechaI1, flechaI2;

function init(){
	stage = new createjs.StageGL("animationCanvas");
	
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener("tick", stage);
	
	var background = new createjs.Shape();
	background.graphics.beginLinearGradientFill(["#2573BB", "#6CB8DA", "#E9FCFF"], [0, 0.85, 1], 0, 0, 0, 910)
	.drawRect(0, 0, 1860, 910);
	background.x = 0;
	background.y = 0;
	background.name = "background";
	background.cache(0, 0, 1860, 910);
	
	stage.addChild(background);
	
	//cursorDown.src = "img/cursorDown.png";
	var manifest = [
		{"src": "station.png", "id": "station"},
		{"src": "transicion1.png", "id": "transicion1"},
		{"src": "transicion2.png", "id": "transicion2"},
		{"src": "transicion3.png", "id": "transicion3"},
		{"src": "transiI1.png", "id": "transicionI1"},
		{"src": "transiI2.png", "id": "transicionI2"},
		{"src": "cursor.png", "id": "cursor"},
		{"src": "cursorUp.png", "id": "cursor2"},
		{"src": "banda.png", "id": "banda"},
	];
	
	loader = new createjs.LoadQueue(true);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(manifest, true, "./img/");
}
function handleComplete(){
	//createStations();
	//createCursor();
}
function loadSound(){
	document.getElementById("display").innerText = "Cargando...";
	document.getElementById("loadBtn").disabled = "Deshabilitado";
	createjs.Sound.addEventListener("fileload", handleFileLoad);
	createjs.Sound.registerSound("assets/KirbyTutorial.mp3", tutorialST);
}
function handleFileLoad(event){
	document.getElementById("display").innerHTML = "Reproduciendo...";
	document.getElementById("stopBtn").disabled = "";
	createjs.Sound.play(event.src);
}
function lolini(){
	var hello = new createjs.Text('Hola Mundo!', '16px Arial', 'green');
	hello.x = 100;
	hello.y = 750;
	stage.addChild(hello);
	stage.update();
	
}
function createCursor(){
	cursor = (new createjs.Bitmap(loader.getResult("cursor")));
	cursor.x = 163;//->463
	cursor.y = 220;//->370
	cursor.alpha = 0;
	
	stage.addChild(cursor);
}
function animarCursor(){
	createjs.Tween.get(cursor, {loop: false})
		.to({alpha: 0, y: cursor.y-10})
		.to({alpha: 1, y: cursor.y}, 500, createjs.Ease.getPowInOut(2));
}
function animarCursor_1(y){
	createjs.Tween.get(cursor, {loop:true})
		.to({y: cursor.y+y+10}, 1000, createjs.Ease.getPowInOut(2))
		.to({y: cursor.y+y}, 1000, createjs.Ease.getPowInOut(2));
}
function createCursor2(){
	cursor2 = (new createjs.Bitmap(loader.getResult("cursor2")));
	cursor2.x = 163;//->463
	cursor2.y = 430;//->280
	cursor2.alpha = 0;
	
	stage.addChild(cursor2);
}
function animarCursor2(){
	createjs.Tween.get(cursor2, {loop: false})
		.to({alpha: 0, y: cursor2.y+10})
		.to({alpha: 1, y: cursor2.y}, 500, createjs.Ease.getPowInOut(2));
}
function animarCursor2_1(y){
	createjs.Tween.get(cursor2, {loop:true})
		.to({y: cursor2.y-y-10}, 1000, createjs.Ease.getPowInOut(2))
		.to({y: cursor2.y-y}, 1000, createjs.Ease.getPowInOut(2));
}
function animarCursor_2(){
	createjs.Tween.get(cursor, {loop: false})
		.to({x: cursor.x+300, y: cursor.y+150}, 1000, createjs.Ease.getPowInOut(2));
}
function animarCursor2_2(){
	createjs.Tween.get(cursor2, {loop: false})
		.to({x: cursor2.x+300, y: cursor2.y-150}, 1000, createjs.Ease.getPowInOut(2));
}
async function cursores(){//////////////////////////////////////////////////////Función de dibujo
	circle(-1, 3);
	animarCircle();
	await delay(0.5);
	transiI1(1);
	animarArrowI1();
	transiI2(1);
	animarArrowI2();
	await delay(1);
	for(var i=0; i<4; i++){
		circle(i, 2);
		animarCircle();
		circle(i, 1);
		animarCircle();
		await delay(0.5);
		transi1(i+1, 2);
		animarArrow1();
		transi1(i+1, 1);
		animarArrow1();
		await delay(0.5);
	}
	transiI1(2);
	animarArrowI1();
	transiI2(2);
	animarArrowI2();
	await delay(0.5);
	circle(4, 3);
	animarCircle();
	await delay(0.5);
	createinstruct();
}///////////////////////////////////////////////////////////////////////////////Función de dibujo
function circle(i, j){
	if(j==1){
		j = 300;
	}
	else if(j==2){
		j=0;
	}
	else if(j==3){
		j = 150;
	}
	else{
		j = 0;
	}
	estacionI1 = (new createjs.Bitmap(loader.getResult("station")));
	estacionI1.x = 450+(i*300);
	estacionI1.y = 170+j;
	estacionI1.alpha = 0;
	stage.addChild(estacionI1);
}
function animarCircle(){
	createjs.Tween.get(estacionI1, {loop: false})
		.to({alpha: 0, x: estacionI1.x-10})
		.to({alpha: 1, x: estacionI1.x}, 500, createjs.Ease.getPowInOut(2));
}
function animarArrow1(){
	createjs.Tween.get(flecha1, {loop: false})
		.to({alpha: 0, x: flecha1.x-10})
		.to({alpha: 1, x: flecha1.x}, 500, createjs.Ease.getPowInOut(2));
}
function animarArrow2(){
	createjs.Tween.get(flecha2, {loop: false})
		.to({alpha: 0, x: flecha2.x-10})
		.to({alpha: 1, x: flecha2.x}, 500, createjs.Ease.getPowInOut(2));
}
function animarArrow3(){
	createjs.Tween.get(flecha3, {loop: false})
		.to({alpha: 0, x: flecha3.x-10})
		.to({alpha: 1, x: flecha3.x}, 500, createjs.Ease.getPowInOut(2));
}
function animarArrowI1(){
	createjs.Tween.get(flechaI1, {loop: false})
		.to({alpha: 0, x: flechaI1.x-10})
		.to({alpha: 1, x: flechaI1.x}, 500, createjs.Ease.getPowInOut(2));
}
function animarArrowI2(){
	createjs.Tween.get(flechaI2, {loop: false})
		.to({alpha: 0, x: flechaI2.x-10})
		.to({alpha: 1, x: flechaI2.x}, 500, createjs.Ease.getPowInOut(2));
}
function transi1(i, j){
	if(j==1){
		j = 300;
	}
	else if(j==2){
		j=0;
	}
	else{
		j = 0;
	}
	flecha1 = (new createjs.Bitmap(loader.getResult("transicion1")));
	if(i<4){
		flecha1.x = 250+(i*300);
		flecha1.y = 187+j;
		flecha1.alpha = 0;
		stage.addChild(flecha1);
	}
}
function transi2(i){
	flecha2 = (new createjs.Bitmap(loader.getResult("transicion2")));
	if(i<4){
		flecha2.x = 260+(i*300);
		flecha2.y = 287;
		flecha2.alpha = 0;
		stage.addChild(flecha2);
	}
}
function transi3(i){
	flecha3 = (new createjs.Bitmap(loader.getResult("transicion3")));
	if(i<4){
		flecha3.x = 260+(i*300);
		flecha3.y = 287;
		flecha3.alpha = 0;
		stage.addChild(flecha3);
	}
}
function transiI1(j){
	if(j==1){
		j = 0;
		var i = 0;
	}
	else if(j==2){
		j = 1200;
		var i = 150
	}
	else if(j==3){
		j = 300;
		var i = 150;
	}
	else{
		j = 0;
		var i = 0;
	}
	flechaI1 = (new createjs.Bitmap(loader.getResult("transicionI1")));
	flechaI1.x = 265+j;
	flechaI1.y = 220+i;
	flechaI1.alpha = 0;
	stage.addChild(flechaI1);
}
function transiI2(j){
	if(j==1){
		j = 0;
		var i = 0;
	}
	else if(j==2){
		j = 1200;
		var i = 150
	}
	else if(j==3){
		j = 300;
		var i = 150;
	}
	else{
		j = 0;
		var i = 0;
	}
	flechaI2 = (new createjs.Bitmap(loader.getResult("transicionI2")));
	flechaI2.x = 265+j;
	flechaI2.y = 370-i;
	flechaI2.alpha = 0;
	stage.addChild(flechaI2);
}
async function createinstruct(){
	times = [18];
	timesText1 = [18];
	timesText2 = [18];
	times[0] = 10;
	times[1] = 12;
	times[2] = 4;
	times[3] = 2;
	times[4] = 7;
	times[5] = 9;
	times[6] = 5;
	times[7] = 10;
	times[8] = 4;
	times[9] = 2;
	times[10] = 3;
	times[11] = 1;
	times[12] = 5;
	times[13] = 8;
	times[14] = 2;
	times[15] = 4;
	times[16] = 18;
	times[17] = 7;
	for(var i=0; i<18; i++){
		timesText1[i] = (times[i].toString()).concat("hrs");
	}
	instruct = [10];
	instructText = [10];
	instruct[0] = "Hola, bienvenidos a la explicación de Bottom Up.";
	instruct[1] = "Lo que ven en pantalla es un diagrama que representa \nlíneas de producción, de autos, en este caso.";
	instruct[2] = "Cada línea tiene un número igual de estaciones.";
	instruct[3] = "Todos los chasis de los automóviles empiezan en este \npunto de partida.";
	instruct[4] = "Cuando el proceso empieza, los chasis se mueven \na través de las líneas que se le haya asignado.";
	instruct[5] = "Este viaje es algo tardado, no es sencillo \nmover un chasis."
	instruct[6] = "Además, el chasis pasa un tiempo en cada estación \nmientras trabajan en el...";
	instruct[7] = "Cuando por fin sale de su estación, es llevada a la \nestación siguiente, también tarda un tiempo en llegar.";
	instruct[8] = "Nótese que también puede ser trasladado a la siguiente \nestación, pero de la línea contraria.";
	instruct[9] = "Toda una maravilla...";
	for(var i=0; i<9; i++){
		if(i==3){
			createCursor();
			animarCursor();
			animarCursor_1(0);
			createCursor2();
			animarCursor2();
			animarCursor2_1(0);
		}
		if(i==4){
			animarCursor_2();
			animarCursor2_2();
			animarCursor_1(150);
			animarCursor2_1(150);
		}
		if(i==5){
			for(var j=0; j<2; j++){
				timesText2[j] = new createjs.Text(timesText1[j], "bold 24px Arial", "#000000");
				timesText2[j].textAlign = "center";
				timesText2[j].textBaseline = "middle";
				timesText2[j].x = 313;
				timesText2[j].y = 270+(j*150);
				timesText2[j].alpha = 1;
				var bounds1 = timesText2[j].getBounds();
				timesText2[j].cache(-40, -20, bounds1.width*3 + Math.abs(bounds1.x), bounds1.height + Math.abs(bounds1.y));
				stage.addChild(timesText2[j]);
			}
		}
		if(i==8){
			for(var j=1; j<4; j++){
				transi2(j);
				animarArrow2();
				transi3(j);
				animarArrow3();
			}
		}
		instructText[i] = new createjs.Text(instruct[i], "bold 48px Arial", "#000000");
		instructText[i].textAlign = "center";
		instructText[i].textBaseline = "middle";
		instructText[i].x = 1960/2;
		instructText[i].y = 100;
		instructText[i].alpha = 0;
		var bounds = instructText[i].getBounds();
		instructText[i].cache(-650, -40, bounds.width*3 + Math.abs(bounds.x), bounds.height + Math.abs(bounds.y));
		
		stage.addChild(instructText[i]);
		
		createjs.Tween.get(instructText[i], {loop: false})
		.to({alpha: 1}, 500, createjs.Ease.getPowInOut(2));
		await delay(6);
		createjs.Tween.get(instructText[i], {loop: false})
		.to({alpha: 0}, 500, createjs.Ease.getPowInOut(2));
		
		stage.removeChild(instructText[i]);
	}
}
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}