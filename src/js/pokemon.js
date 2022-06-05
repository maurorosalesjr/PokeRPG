

export default class Pokemon {
  static getPokemon(number) {
    return new Promise(function (resolve, reject){
      let request = new XMLHttpRequest();
      console.log("reached!");
      const url = `https://pokeapi.co/api/v2/pokemon/${number}/`
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        }else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
  
}


// completed functions:
// random pokemon calls

//functions we will need
//battle
//level up--wip
//loot
//charecter selection
//random pokemon---done

//https://pokeapi.co/api/v2/pokemon?limit=1126&offset=0

//stats-
//hp, speed, attack, defense, starting expererince 

//attack could add a flat increase to the damage 
//defense subtracts it (maybe make it so you always deal at least 1 damage though?)
//speed decides who hits first. (Maybe speed much higher than opponent lets you swing twice)
//HP: when you hit 0 you die (duh)




//For loot we could have 4 weapon types
//Axes which are strong (extra damage) and heavy (lower speed)
//Spears which are a middle ground
//Swords which are light (extra speed) and weak (lower damage)
//Bows which are accurate (extra hit and crit chance) but worse at everything else


//Loot could be an object with like 4 arrays (one that has all the weapons, one with support items, one with XP, one with gold)
//And then you would have a random roll to decide which array you'll randomly get loot out of
/*
    object loot (weaponArray, xpArray, itemArray){
        weaponArray = (ironSword, steelSword, magicSword, evilSword)
        xpArray = (10, 15, 25, 50)
        itemArray = (gold, more gold, health potato)
    }

And then you would have something like

function lootRoll (loot, enemy)
{
    random(0,3)
    if(random = 0)
    {
        random(0, 4) + enemy.level;
        if(random = 0)
        {
            player.additem (loot.weapons[0])
        }
    }
}
*/

//and gold(score)!

//random pokemon-


//charecters-
//Epicodus student- keyboard taped to a stick, laptop
//Delivery Driver- ranged pizza slice throwing,
//Mother- Barbarian, close range




