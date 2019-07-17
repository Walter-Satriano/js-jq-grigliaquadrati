/*ESERCIZIO:
Creare una griglia formata da 8x8 quadratini tutti bianchi.
15 di questi quadratini (scelti a caso all’inizio)
se cliccati diventano rossi, gli altri diventano verdi*/


$(document).ready(function(){

  // funzione per far diventare i quadrati scelti di colore rosso
  // numeri quadrati rossi: 1 5 12 15 19 23 28 32 36 45 52 56 59 62 64
  $(".square_red").click(function() {
    $(this).addClass("red");
  });

  // funzione per far diventare gli altri quadrati di colore verde
  $(".square_green").click(function() {
    $(this).addClass("green");
  });

});
