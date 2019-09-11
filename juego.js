
const avatar = document.getElementById('avatar');
const velocidad = 58 ; 
const velocidad2 = 110;
var mTop = 200; //26 , 200
var mLeft = 45; //45, 1035
var pos = 0;

//Restricciones de paredes de acuerdo a la posición
const abajo = [2,3,4,7,8,10,12,13,14,15,18,19,21,24,25,26,28,30,33,34,37,43,45,48,50,51,52,54,57,58,62,63,64,65,66,68,69,70,71,72,73,74,75,76,77,78,79,80];
const arriba = [1,2,3,4,5,6,7,8,9,10,12,13,14,17,18,20,22,23,24,25,28,29,31,34,35,36,38,40,43,44,47,53,55,58,60,61,62,64,67,68,72,73,74,75,76,78,79,80];
const izquierda = [1,5,8,11,16,17,20,21,23,27,28,31,32,33,36,37,39,40,41,42,44,47,48,51,53,55,56,59,60,61,64,67,71];
const derecha = [4,7,15,16,19,20,22,26,27,30,31,32,35,36,38,39,40,41,43,46,47,50,52,54,55,58,59,60,63,66,70,80];


function iniciar(){
	avatar.style.marginTop = 200 + "px";
	avatar.style.marginLeft = 45 + "px";	
	mTop=200; mLeft=45;
}

function ganar(){
	if(mTop==26 && mLeft == 1145){
		alert("FELICIDADES, HAS GANADO")
		var respuesta = prompt('Quiéres jugar otra vez?',)
		if(respuesta != "no"){iniciar()}
		else{alert("FIN DEL JUEGO")}
	}
}

function trampa(){
	avatar.style.marginTop = 200 + "px";
	avatar.style.marginLeft = 45 + "px";
	mTop = 200; mLeft=45
}

iniciar();

document.getElementById('boton').addEventListener('click',leerCaja);

function leerCaja(){
	let texto = document.getElementById('caja').value;
	comparar(texto);
}

function comparar(texto){
	if(texto.match(/derecha/i) !=null ||  texto==="d" || texto.match(/right/i) != null){ 
		moverDerecha();
		decir(texto);
	}

	else if(texto.match(/izq/i) !=null ||  texto==="i" || texto.match(/left/i) != null){ 
		moverIzquierda();
		decir(texto);
	}

	else if(texto.match(/arriba/i) !=null ||  texto==="ar" || texto.match(/up/i) != null){ 
		moverArriba();
		decir(texto);
	}

	else if(texto.match(/abajo/i)  != null || texto === "ab" || texto.match(/down/i) != null){ 
		moverAbajo();
		decir(texto);
	}
}
//------------------Funciones de movimiento------------------------//

function moverDerecha(){
	getPos();
	if(derecha.includes(pos)==true){
		alert("Movimiento inválido, regresas al inicio por tramposo");
		trampa();	
	}
	else{
		mLeft += velocidad2;
		avatar.style.marginLeft = mLeft + "px";
	} 
	ganar();
}

function moverIzquierda(){
	getPos();
	if(izquierda.includes(pos)==true){
		alert("Movimiento inválido, regresas al inicio por tramposo")
		trampa();	
	}
	else{
		mLeft -= velocidad2;
		avatar.style.marginLeft = mLeft + "px";
	} 
}

function moverArriba(){
	getPos();
	if(arriba.includes(pos)==true){
		alert("Movimiento inválido, regresas al inicio por tramposo")
		trampa();	
	}
	else{
		mTop -= velocidad;
		avatar.style.marginTop = mTop + "px";
	}
}

function moverAbajo(){	
	getPos();
	if(abajo.includes(pos)==true){
		alert("Movimiento inválido, regresas al inicio por tramposo")
		trampa();	
	}
	else{
		mTop += velocidad;
		avatar.style.marginTop = mTop + "px";
	} 
}


//------------------Funciones de síntesis de voz-----------------------//
function decir(texto)
{
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

// Asignar posicion a cada casilla
function getPos(){
	if(mTop == 26){
		if(mLeft==45){pos=1;} else if(mLeft==155){pos=2;}else if(mLeft==265){pos=3;}else if(mLeft==375){pos=4;}else if(mLeft==485){pos=5;}else if(mLeft==595){pos=6;}else if(mLeft==705){pos=7;}else if(mLeft==815){pos=8;}else if(mLeft==925){pos=9;}else if(mLeft=1035){pos=10;}else if(mLeft=1145){pos=11;}
	}
	else if(mTop == 84){
		if(mLeft==45){pos=11;}else if(mLeft==155){pos=12;}else if(mLeft==265){pos=13;}else if(mLeft==375){pos=14;}else if(mLeft==485){pos=15;}else if(mLeft==595){pos=16;}else if(mLeft==705){pos=17;}else if(mLeft==815){pos=18;}else if(mLeft==925){pos=19;}else if(mLeft=1035){pos=20;} 
	}
	else if(mTop == 142){
		if(mLeft==45){pos=21;}else if(mLeft==155){pos=22;}else if(mLeft==265){pos=23;}else if(mLeft==375){pos=24;}else if(mLeft==485){pos=25;}else if(mLeft==595){pos=26;}else if(mLeft==705){pos=27;}else if(mLeft==815){pos=28;}else if(mLeft==925){pos=29;}else if(mLeft=1035){pos=30;} 
	} 
	else if(mTop == 200){
		if(mLeft==45){pos=31;}else if(mLeft==155){pos=32;}else if(mLeft==265){pos=33;}else if(mLeft==375){pos=34;}else if(mLeft==485){pos=35;}else if(mLeft==595){pos=36;}else if(mLeft==705){pos=37;}else if(mLeft==815){pos=38;}else if(mLeft==925){pos=39;}else if(mLeft=1035){pos=40;} 
	} 
	else if(mTop == 258){
		if(mLeft==45){pos=41;}else if(mLeft==155){pos=42;}else if(mLeft==265){pos=43;}else if(mLeft==375){pos=44;}else if(mLeft==485){pos=45;}else if(mLeft==595){pos=46;}else if(mLeft==705){pos=47;}else if(mLeft==815){pos=48;}else if(mLeft==925){pos=49;}else if(mLeft=1035){pos=50;} 
	} 
	else if(mTop == 316){
		if(mLeft==45){pos=51;}else if(mLeft==155){pos=52;}else if(mLeft==265){pos=53;}else if(mLeft==375){pos=54;}else if(mLeft==485){pos=55;}else if(mLeft==595){pos=56;}else if(mLeft==705){pos=57;}else if(mLeft==815){pos=58;}else if(mLeft==925){pos=59;}else if(mLeft=1035){pos=60;} 
	} 
	else if(mTop == 374){
		if(mLeft==45){pos=61;}else if(mLeft==155){pos=62;}else if(mLeft==265){pos=63;}else if(mLeft==375){pos=64;}else if(mLeft==485){pos=65;}else if(mLeft==595){pos=66;}else if(mLeft==705){pos=67;}else if(mLeft==815){pos=68;}else if(mLeft==925){pos=69;}else if(mLeft=1035){pos=70;} 
	} 
	else if(mTop == 432){
		if(mLeft==45){pos=71;}else if(mLeft==155){pos=72;}else if(mLeft==265){pos=73;}else if(mLeft==375){pos=74;}else if(mLeft==485){pos=75;}else if(mLeft==595){pos=76;}else if(mLeft==705){pos=77;}else if(mLeft==815){pos=78;}else if(mLeft==925){pos=79;}else if(mLeft=1035){pos=80;}
	}   
}
