import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Pokemon   from './pokemon.js';
import Character  from './rpg.js';
import Combat  from "./combat.js";
import Loot from "./loot.js";

function clearFields() {
  $('.showPoke').html("");
}

function diceRoller() {
  let rollDice = Math.floor((Math.random() * 256) + 1);
  return rollDice;
}

function wheelOfLife ()
{
  let returnValue;
  const rollOne = Math.floor(Math.random() * 4);
    
  switch(rollOne)
  {
  case(0):
    returnValue = "High School Dropout";
    break;
  case(1):
    returnValue = "Scientist";
    break;
  case(2):
    returnValue = "Epicodus Student";
    break;
  case(3):
    returnValue = "Pompous Gentleman";
    break;
  }
  return returnValue;
}

function stab (player, pokemonStr, pokemonSpd, pokemonDfs, playerHP, pokemonHP) {
  let outcome = Combat.strike(player.bases[1], player.bases[3], player.bases[2], player.equipment[0], player.equipment[1], playerHP, pokemonDfs, pokemonSpd, pokemonHP, pokemonStr);
  return outcome;
}

function healPotato (hp, player, pokeStr)
{
  console.log(pokeStr);
  hp = Combat.cheapShot(hp, player.bases[2], pokeStr);
  if (hp < 1)
  {
    return "defeat";
  }
  else
  {
    hp = player.bases[0];
    return hp;
  }
}

function prize(winnings, player)
{
  switch(winnings[0])
  {
  case(0):
    player.levelUp();
    player.description = ("You leveled up! Your stats are now " + player.bases[0] + " HP, " + player.bases[1] + " ATTACK, " + player.bases[2] + " DEFENSE, " + player.bases[3] + " SPEED!");
    break;
  case(1):
    if (winnings[1] > player.equipment[0])
    {
      player.equipment[0] = winnings[1];
      player.description = ("You find a new keyboard! It lets you do " + player.equipment[0] + " extra damage!");
    }
    else
    {
      player.description = ("You don't find anything worth keeping");
    }
    break;
  case(2):
    if (winnings[1] > player.equipment[1])
    {
      player.equipment[1] = winnings[1];
      player.description = ("You find a new mouse! It lets attack with " + player.equipment[1] + " extra speed!");
    }
    else
    {
      player.description = ("You don't find anything worth keeping");
    }
    break;
  case(3):
    player.gold += winnings[1];
    player.description = ("You find " + winnings[1] + "Gold! \n You now have " + player.gold + " gold!");
    break;
  }
  return player;
}


//HP = 0, Strength = 1, Defense = 2, Speed = 3 Hello World! Testing testing blah blah blah

$(document).ready(function() {
  //let corpsePile = 0;
  let player;
  let occupation = wheelOfLife();
  player = new Character([120, 40, 20, 10], [0, 0, 0, 0], [5, 5], 0, " ");
  player = player.classStart(occupation, player); 
  $("#loadPoke").click(function () {
    $('#falseAttackButton').hide();
    $('#falseHealButton').hide();
    $('#falseRunButton').hide();
    $('#falseLoadPoke').show();
    let number = diceRoller();  
    clearFields();
    let promise = Pokemon.getPokemon(number);

    promise.then(function(response) {
      const body = JSON.parse(response);
      // splayer = tats [0]= hp, [1]= attack, [2]=defense, [5]= speed
      $('#enemy').html("<p>The Pokemons base stats are:" + "<br>" + `${body.species.name}`.charAt(0).toUpperCase() + `${body.species.name}`.slice(1)  + "<br>" + "HP: " + `${body.stats[0].base_stat}` + "<br>" + "SPD: " + `${body.stats[5].base_stat}`+  "<br>" + "ATTACK: "  + `${body.stats[1].base_stat}`+ "<br>" + "DEFENSE: "  + `${body.stats[2].base_stat}`+  "</p>" );
      $('#fight').html("You encountered a " + `${body.species.name}`.charAt(0).toUpperCase() + `${body.species.name}`.slice(1) + ". Get ready for a fight!");
      $('.showPoke').html( `<img src="${body.sprites.front_default}" id="pokemon" />` );
      
      let hpArray = [player.bases[0],  `${body.stats[0].base_stat}`];
      $("#attack").click(function() {
        hpArray = stab(player, `${body.stats[1].base_stat}`, `${body.stats[5].base_stat}`, `${body.stats[2].base_stat}`, hpArray[0], hpArray[1]);
        console.log(hpArray);
        if (hpArray === "victory") 
        {
          //corpsePile += 1;
          prize(Loot.lootRoll(), player);
          $('#fight').html("<p>Victory! You defeated " + `${body.species.name}`.charAt(0).toUpperCase() + `${body.species.name}`.slice(1) + "! You should look around for more Pokemon. <br> Your remaining HP is: </p>" + player.bases[0] + "<p>" + player.description + "</p>");
          $('#falseLoadPoke').hide();
        } else if (hpArray === "defeat") {
          $('#fight').html("You have been defeated! Please try again!");
          // $('#falseAttackButton').show();
          // $('#falseRunButton').show();
          // $('#falseHealButton').show();
          // console.log("defeat");
          //corpsePile = 0;
        } else {
          $('#fight').html("<p> " + `${body.species.name}`.charAt(0).toUpperCase() + `${body.species.name}`.slice(1) + " remaining HP: " + hpArray[1] + "<br>" + "Your remaining HP: " + hpArray[0] + "</p>");
          console.log("Keep fighting");
        }
      });

      $("#healPotato").click(function(){
        hpArray[0] = healPotato(hpArray[0], player, `${body.stats[1].base_stat}`);
        if (hpArray[0] === "defeat") {
          $('#fight').html("You have been defeated! Please try again!");
        } else {
          $('#fight').html("<br>You have reached into your Potato Bag of Holding and consumed a Heal Potato, healing you back up to " + hpArray[0] + " hp");
        }
      });

      $("#runAway").click(function () {
        $('.showPoke').html("");
        $('#fight').html("<p>You have run away like a coward! I guess that pokemon was too strong! Look around for another pokemon, if you dare!</p>");
        $('#falseAttackButton').show();
        $('#falseRunButton').show();
        $('#falseLoadPoke').hide();
      });

      $("#sheetButton").click(function() {
        $("#characterSheet").show();
        $("#stats").html("<p>Character Class: " + occupation + "<br>" + "HP: " + player.bases[0] + "<br>" + "Strength: " + player.bases[1] + "<br>" + "Defense: " + player.bases[2] + "<br>" + "Speed: " + player.bases[3]);
        $('#score').html("<p>" + player.gold + " gold </p>");
        $('#equipment').html("<p>plus " + player.equipment[0] + " keyboard power" + "<br>" + "plus " + player.equipment[1] + " mouse speed" );
      });
      $("#closeCharacterSheet").click(function() {
        $("#characterSheet").hide();
      });
    });
  });
});

/*
function randomBackground() { 

  let rando = Math.floor((Math.random() * 3) + 1);
  return rando;
} 

function randomBack(rando){
  let something;
  const backgroundMap = {
    1: "<img src='assets/images/dungeonwall1.jpeg'>",
    2: "<img src='assets/images/dungeonwall2.jpeg'>",
    3: "<img src='assets/images/dungeonwall3.jpeg'>"
  };
  something = backgroundMap[rando];
  return something
}

let something = randomBack(randomBackground());

$('#backgroundImg').html(something);
*/