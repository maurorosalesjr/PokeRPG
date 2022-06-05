import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { Pokemon } from './pokemon.js';


function diceRoller() {
  let rollDice = Math.floor((Math.random() * 2) + 1);
  return `https://pokeapi.co/api/v2/pokemon/${rollDice}/`;
}

/*function randomPoke(diceRoll) {
  let rollPoke;
  const pokeMap = {
  1 : "zapdos",
  2 : "pikachu",
  };
rollPoke = pokeMap[diceRoll];
return `https://pokeapi.co/api/v2/pokemon/${rollPoke}`
}*/


/*
randomnumber = Math.random(0, 255) + 1

https://pokeapi.co/api/v2/pokemon/[randomnumber]/

*/

$(document).ready(function() {
let promise = Pokemon.getPokemon(number)

promise.then(function(response) {
  const body = JSON.parse(response);
  diceRoller(number);
  
  $('.showPoke').html("<p>hp = </p>" + `${body.stats.base_stat}`);
})
});