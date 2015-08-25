//Variables globales
//Donde insertar los puntos, ya sea elemento, class o id
var place = "body";

//Primero cuenta cantidad de objetos de carrusel
var cuantoson = $('.container .issue').length;

//Dots
function dots() {
    var text = "";
    var i = 0;
    //Loop quue genera cada boton, con una clase especifica
    while (i < cuantoson) {
      var y = i + 1;
      text += "<a href='#' class='dot-" + y + "'>" + y + "</a>"
      i++;
    }
    //Se genera el div contenedor - Se puede integrar en otro lado
    $("<div id='dots'></div>").appendTo(place);

    //Se integra el loop al recien creado div
    //document.getElementById("dots").innerHTML = text;
    $('#dots').append(text);
  } //Function dots

//LLamada de la funcion
dots();

//Agrega clase activo a los primeros elementos
$("#dots a:first-child, .container-telefono div:first-child").addClass("active");

//Boton avanza 1
$("#right").click(function() {

  if ($('.issue').last().prev().hasClass('active')) {
    $('.active').removeClass("active").next().addClass('active')
    $('#right').css('display', 'none');
  } else {
    $('.active').removeClass("active").next().addClass('active');
    $('#right').css('display', 'block');
    $('#left').css('display', 'block');
  }
});

//Boton retrocede 1
$("#left").click(function() {

  if ($('.issue').first().next().hasClass('active')) {
    $('.active').removeClass("active").prev().addClass('active');
    /*$('.active').removeClass("active");
    $('.issue').last().addClass('active');*/
    $('#left').css('display', 'none');
  } else {
    $('.active').removeClass("active").prev().addClass('active');
    $('#right').css('display', 'block');
    $('#left').css('display', 'block');
  }
});

//Puntos superiores
$('#dots a').on('click', function(e) {
  e.preventDefault();
  var numerod = $(this).index();
  $('.container-telefono .issue').removeClass('active').eq(numerod).addClass('active');
  $(this).addClass('active').siblings().removeClass('active');

  var cantidadd = $('#dots a').length;

  //Al presionar el primero punto desaparece la flecha izq
  if (numerod == 0) {
    $('#left').css('display', 'none');
    $('#right').css('display', 'block');
  }

  //Si es la ultima, oculta la flecha derecha
  else if (numerod == cantidadd - 1) {
    $('#right').css('display', 'none');
    $('#left').css('display', 'block');
  }

  //Si no es asi, muestra las 2
  else {
    $('#right').css('display', 'block');
    $('#left').css('display', 'block');
  }

});

//oculta flecha izquierda al empezar
if ($('.issue').first().hasClass('active')) {
  $('#left').css('display', 'none');
}