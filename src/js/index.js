import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
//import  Pokemon  from './pokemon.js';
//import { Character } from './rpg.js';

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