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
  let outcome = Combat.strike(player.bases[1], player.bases[2], 50, 10, playerHP, pokemonDfs, pokemonSpd, pokemonHP, pokemonStr);
  return outcome;
    }

  function healPotato (hp, player, pokeStr)
  {
    hp = Combat.strike(hp, player.bases[2], pokeStr)
    if (hp < 1)
    {
      return "defeat"
    }
    else
    {
      hp = player.bases[0]
      return hp;
    }
  }


$(document).ready(function() {
  $("#sheetButton").click(function() {
    $("#characterSheet").show();
  });
  $("#closeCharacterSheet").click(function() {
    $("#characterSheet").toggle();
  });
});

$(document).ready(function() {
  $("#loadPoke").click(function () {
    let number = diceRoller();
    
  
    clearFields();

    let player; 
    player = new Character([100, 50, 50, 50], [0, 0, 0, 0], 0, "Epicodus Student", 0);
    let promise = Pokemon.getPokemon(number);

    promise.then(function(response) {
      const body = JSON.parse(response);
      // stats [0]= hp, [1]= attack, [2]=defense, [5]= speed
      $('#enemy').html("<p>The Pokemons base stats are:" + "<br>" + `${body.species.name}` + "<br>" + "HP: " + `${body.stats[0].base_stat}` + "<br>" + "SPD: " + `${body.stats[5].base_stat}`+  "<br>" + "ATTACK: "  + `${body.stats[1].base_stat}`+ "<br>" + "DEFENSE: "  + `${body.stats[2].base_stat}`+  "</p>" );
      $('.showPoke').html( `<img src="${body.sprites.front_default}" id="pokemon" />` );
      let hpArray = [player.bases[0],  `${body.stats[0].base_stat}`]

  $("#attack").click(function() {
      
      hpArray = stab(player, 50, 10, `${body.stats[1].base_stat}`, `${body.stats[5].base_stat}`, `${body.stats[2].base_stat}`, hpArray[0], hpArray[1]);
      console.log(hpArray);

      if (hpArray === "victory") 
      {
        player.levelUp();
        $('#fight').html("<p>Victory! You defeated " + `${body.species.name}` + "! You should look around for more Pokemon.");
      } 
      else if (hpArray === "defeat") 
      {
        alert ("You have been defeated! Please try again!");
        $('#fight').html("You have been defeated! Please try again!");
      } 
      else 
      {
        $('#fight').html("<p> " + `${body.species.name}` + " remaining HP: " + hpArray[1] + "<br>" + "Your remaining HP: " + hpArray[0] + "</p>");
      }

    
    });

  $("#healPotato").click(function(){
      hpArray[0] = healPotato(hpArray[0], player, `${body.stats[1].base_stat}`)
      if (hpArray[0] === "defeat") {
        alert ("You have been defeated! Please try again!");
        $('#fight').html("You have been defeated! Please try again!");
      }
  })
    
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