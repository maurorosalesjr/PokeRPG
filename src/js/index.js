import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Pokemon   from './pokemon.js';
import Character  from './rpg.js';
import Combat  from "./combat.js";

function clearFields() {
  $('.showPoke').html("");
}

function diceRoller() {
  let rollDice = Math.floor((Math.random() * 256) + 1);
  return rollDice;
}

function stab (player, weaponPower, weaponSpeed, pokemonStr, pokemonSpd, pokemonDfs, playerHP, pokemonHP) {
  console.log(player.bases);
  let outcome = Combat.strike(player.bases[1], player.bases[2], 50, 10, playerHP, pokemonDfs, pokemonSpd, pokemonHP, pokemonStr);
  return outcome;
}

function healPotato (hp, player, pokeStr)
{
  hp = Combat.cheapShot(hp, player.bases[2], pokeStr);
  if (hp < 1)
  {
    return "defeat";
  }
  else
  {
    console.log(hp);
    hp = player.bases[0];
    return hp;
  }
}
//HP = 0, Strength = 1, Defense = 2, Speed = 3


$(document).ready(function() {
  $("#loadPoke").click(function () {
    let number = diceRoller();  
    clearFields();
    let player; 
    player = new Character([100, 50, 50, 50], [0, 0, 0, 0], 0, " ", 0);
    player = player.classStart("Epicodus Student", player);
    let promise = Pokemon.getPokemon(number);

    promise.then(function(response) {
      const body = JSON.parse(response);
      // stats [0]= hp, [1]= attack, [2]=defense, [5]= speed
      $('#enemy').html("<p>The Pokemons base stats are:" + "<br>" + `${body.species.name}`.charAt(0).toUpperCase() + `${body.species.name}`.slice(1)  + "<br>" + "HP: " + `${body.stats[0].base_stat}` + "<br>" + "SPD: " + `${body.stats[5].base_stat}`+  "<br>" + "ATTACK: "  + `${body.stats[1].base_stat}`+ "<br>" + "DEFENSE: "  + `${body.stats[2].base_stat}`+  "</p>" );
      $('#fight').html("You encountered a " + `${body.species.name}`.charAt(0).toUpperCase() + `${body.species.name}`.slice(1) + ". Get ready for a fight!");
      $('.showPoke').html( `<img src="${body.sprites.front_default}" id="pokemon" />` );
      let hpArray = [player.bases[0],  `${body.stats[0].base_stat}`];

      $("#attack").click(function() {
        hpArray = stab(player, 50, 10, `${body.stats[1].base_stat}`, `${body.stats[5].base_stat}`, `${body.stats[2].base_stat}`, hpArray[0], hpArray[1]);
        if (hpArray === "victory") 
        {
          player.levelUp();
          $('#fight').html("<p>Victory! You defeated " + `${body.species.name}`.charAt(0).toUpperCase() + `${body.species.name}`.slice(1) + "! You should look around for more Pokemon. <br> Your remaining HP is: </p>" + player.bases[0]);
        } 
        else if (hpArray === "defeat") 
        {
          $('#fight').html("You have been defeated! Please try again!");
        } 
        else 
        {
          $('#fight').html("<p> " + `${body.species.name}`.charAt(0).toUpperCase() + `${body.species.name}`.slice(1) + " remaining HP: " + hpArray[1] + "<br>" + "Your remaining HP: " + hpArray[0] + "</p>");
        }
      });

      $("#healPotato").click(function(){
        hpArray[0] = healPotato(hpArray[0], player, `${body.stats[1].base_stat}`);
        if (hpArray[0] === "defeat") {
          $('#fight').html("You have been defeated! Please try again!");
        } else {
          $('#fight').html("<p>You have reached into your Potato Bag of Holding and consumed a Heal Potato, giving you all the HP!</p>");
        }
      });

      $("#runAway").click(function () {
        $('.showPoke').html("");
        $('#fight').html("<p>You have run away like a coward! I guess that pokemon was too strong! Look around for another pokemon, if you dare!</p>");

      });

      $("#sheetButton").click(function() {
        $("#characterSheet").show();
        $("#stats").html("<p>Epicodus Student" + "<br>" + "HP: " + player.bases[0] + "<br>" + "Strength: " + player.bases[1] + "<br>" + "Defense: " + player.bases[2] + "<br>" + "Speed: " + player.bases[3]);
    
      });
      $("#closeCharacterSheet").click(function() {
        $("#characterSheet").hide();
      });
    
    });
  });
});

/*
currentHP
currentEnemyHP



function potato () {
  if (current HP < player.bases[0])
  {
    Combat.cheapshot;
    current HP = player.bases[0];
  }

function run () {
  make a new pokemon
}

}
}

*/