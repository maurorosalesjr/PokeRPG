import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import  Pokemon  from './pokemon.js';

function clearFields() {
  $('.showPoke').html("")
}

function diceRoller() {
  let rollDice = Math.floor((Math.random() * 256) + 1);
  return rollDice;
}






$(document).ready(function() {
  $("#randomPoke").click(function () {
let number = diceRoller();
clearFields();
let promise = Pokemon.getPokemon(number);

promise.then(function(response) {
  const body = JSON.parse(response);

  
  $('.showPoke').html("<p>the pokemon you are facing is</p> " + `${body.species.name}` + `<img src="${body.sprites.front_default}"/>` + "<p> hp = </p>" + `${body.stats[0].base_stat}`);
    })
  })
});