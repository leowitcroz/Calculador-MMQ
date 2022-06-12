

var calcular = document.getElementById("calcular");

calcular.addEventListener("click", MMQ);


function MMQ () {

// x pontos

var x1 = Number.parseFloat(document.getElementById("x1").value);
var x2 = Number.parseFloat(document.getElementById("x2").value);
var x3 = Number.parseFloat(document.getElementById("x3").value);
var x4 = Number.parseFloat(document.getElementById("x4").value);
var x5 = Number.parseFloat(document.getElementById("x5").value);


//y pontos
var y1 = Number.parseFloat(document.getElementById("y1").value);
var y2 = Number.parseFloat(document.getElementById("y2").value);
var y3 = Number.parseFloat(document.getElementById("y3").value);
var y4 = Number.parseFloat(document.getElementById("y4").value);
var y5 = Number.parseFloat(document.getElementById("y5").value);


if ( x1 !== "" && x2 !== "" && x3 !== "" && x4 !== "" && x5 !== "" && y1 !== "" && y2 !== "" && y3 !== "" && y4 !== "" && y5 !== ""){

    //x médio
var xmedio = (x1 + x2 + x3 + x4 +x5)/5



//y medio

var ymedio = (y1 + y2 +y3 +y4 + y5 )/5;


// delta xi

var dxi1 = x1 - xmedio ;
var dxi2 = x2 - xmedio ;
var dxi3 = x3 - xmedio ;
var dxi4 = x4 - xmedio ;
var dxi5 = x5 - xmedio ;


// delta yi

var dyi1 = y1 - ymedio ;
var dyi2 = y2 - ymedio ;
var dyi3 = y3 - ymedio ;
var dyi4 = y4 - ymedio ;
var dyi5 = y5 - ymedio ;


// delta Xi.delta Yi

var xyi1 = dxi1 * dyi1;
var xyi2 = dxi2 * dyi2;
var xyi3 = dxi3 * dyi3;
var xyi4 = dxi4 * dyi4;
var xyi5 = dxi5 * dyi5;


//somatario de dela Xi. deltaYi

var somadosdeltas = xyi1 + xyi2 + xyi3 + xyi4 + xyi5 ;

// dxi ao quadraro

var xi1quadrado = dxi1 * dxi1;
var xi2quadrado = dxi2 * dxi2;
var xi3quadrado = dxi3 * dxi3;
var xi4quadrado = dxi4 * dxi4;
var xi5quadrado = dxi5 * dxi5;


// soma do xi2

var somaXiaoquadrado = xi1quadrado + xi2quadrado + xi3quadrado + xi4quadrado + xi5quadrado ;

// calculo do coeficiente angular

var angular = somadosdeltas/somaXiaoquadrado;

// calculo do linear

var linear = -(angular) * xmedio + ymedio;

resultadoangular.innerHTML = `seu coefieciente angular é ${angular}`;

resultadolinear.innerHTML = `seu coefieciente linear é ${linear}`;


}






}























