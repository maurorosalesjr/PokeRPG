export default class Combat {

  static strike(str, spd, dfs, wpn, wpns, hp, enemydfs, enemyspd, enemyHP, enemystr) {
    let damage = 0;
    let enemydam = 0;
    let speed = 0;
    let playerdead = false;
    let pokedead = false;
    let results = [];
    
    
    damage = (str + wpn) - enemydfs;
    enemydam = (enemystr - dfs);

    console.log(hp);
    console.log(enemyHP);
    if (damage < 1)
    {
      damage = 1;
    }
    if (enemydam < 1)
    {
      enemydam = 1;
    }
    speed += (spd + wpns);

    if(speed > (enemyspd + 30))
    {
      enemyHP = enemyHP - damage;
      pokedead = this.checker(enemyHP, pokedead);
      if (pokedead === true)
      {
        return ("victory");
      }
      hp = hp - enemydam;
      playerdead = this.checker(hp, playerdead);
      if (playerdead === true)
      {
        return ("defeat");
      }
      enemyHP = enemyHP - damage;
      pokedead = this.checker(enemyHP, pokedead);
      if (pokedead === true)
      {
        return ("victory");
      }
    }

    else if(speed > enemyspd)
    { 
      enemyHP = enemyHP - damage;
      pokedead = this.checker(enemyHP, pokedead);
      if (pokedead === true)
      {
        return ("victory");
      }
      hp = hp - enemydam;
      playerdead = this.checker(hp, playerdead);
      if (playerdead === true)
      {
        return ("defeat");
      }
    }
    else 
    {
      hp = hp - enemydam;
      playerdead = this.checker(hp, playerdead);
      if (playerdead === true)
      {
        return ("defeat");
      }
      enemyHP = enemyHP - damage;
      pokedead = this.checker(enemyHP, pokedead);
      if (pokedead === true)
      {
        return ("victory");
      }
    }
    results = [hp, enemyHP];
    return results;
  }
  

  static checker(hp, death)
  {
    if (hp < 1)
    {
      death=true;
    }
    else 
    {
      death = false;
    }
    return death;
  }

  static cheapShot (hp, defense, pokemonStr)
  {
    hp -= (pokemonStr - defense);
    return hp;
  }
}

//business logic

