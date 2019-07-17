/*ESERCIZIO:
Creare una griglia formata da 8x8 quadratini tutti bianchi.
15 di questi quadratini (scelti a caso all’inizio)
se cliccati diventano rossi, gli altri diventano verdi*/


$(document).ready(function(){


  var redSquare = $(".square-1, .square-5, .square-12, .square-15, .square-19, .square-23, .square-28, .square-32, .square-36, .square-45, .square-52, .square-56, .square-59, .square-62, .square-64");

  // funzione per far diventare i quadrati scelti di colore rosso
  redSquare.click(function() {
    $(this).addClass("square_red");
  });


  // TO DO: cercare soluzione per i quadrati di colore verde
  $(".square-2").click(function() {
    $(this).addClass("square_green");
  });


});
