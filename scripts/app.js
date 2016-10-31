'use strict';

$( document ).ready(function whenLoaded(){

  // Your jQuery here
  // 1. Get the value "Hello There".
  $('#greeting').text();

  // 2. Change (or set) the value to "Hola".
  $('#greeting').text('Hola');

  // 3. Add an h1 to the page that says "A Spanish Greeting".
  var $newH1 = $('<h1>A Spanish Greeting</h1>');
  $('body').append($newH1);

  // 4. Add a second greeting ("Que tal?"), in a second column to the right of the first.
  var $secondNewH1 = $('<h1>Que tal</h1>');
  $('body').append($secondNewH1);

  $('h1').css('display', 'inline-block');
  $('h1').css('margin', '20px');
  // 5. Add the class "blue" to both greetings.
    $('h1').css('background-color', 'blue');
});
