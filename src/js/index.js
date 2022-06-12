import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import  Pokemon  from './pokemon.js';
import { Character } from './rpg.js';

// function clearFields() {
//   $('.showPoke').html("");
// }

// function diceRoller() {
//   let rollDice = Math.floor((Math.random() * 256) + 1);
//   return rollDice;
// }







$(document).ready(function() {
  $("#sheetButton").click(function() {
    $("#characterSheet").show();
  });
  $("#closeCharacterSheet").click(function() {
    $("#characterSheet").toggle();
  });
});

/*$(document).ready(function() {
  $("#randomPoke").click(function () {
    let Bob = new Character([0, 0, 0, 0], [0, 0, 0, 0], 0, " ", 0);
    Bob.classStart("Mother", Bob);
    console.log(Bob.growths);
    let number = diceRoller();
    clearFields();
    let promise = Pokemon.getPokemon(number);

    promise.then(function(response) {
      const body = JSON.parse(response);

  
      $('.showPoke').html( `${body.species.name}` + `<img src="${body.sprites.front_default}" id="pokemon" />` );
    });
  });
});*/