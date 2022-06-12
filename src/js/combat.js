export default class Combat {

  

  static strike(str, spd, wpn, wpns, hp, enemyspd, enemydfs, enemyHP, enemystr) {
    let damage = 0;
    let speed = 0;
    let playerdead = false;
    let pokedead = false;
    

    damage = (str + wpn) - enemydfs;
    speed += (spd + wpns);

    if(spd > enemyspd)
    {
      if(spd > (enemyspd + 4))
      {
        enemyHP = enemyHP - damage;
        this.checker();
        if (pokedead === true)
        {
          return ("victory");
        }
        hp -= enemystr;
         //playerdead = false;
         enemyHP = enemyHP - damage;
         this.checker();
        if (pokedead === true)
        {
          return ("victory");
        }
      }
      
      enemyHP = enemyHP - damage;
      this.checker();
      if (pokedead === true)
      {
        return ("victory");
      }
      hp -= enemystr;
    }
    else {

      hp -= enemystr;
        enemyHP = enemyHP - damage;
      this.checker();
      if (pokedead === true)
      {
        return ("victory");
      }
    }
    console.log(str, spd, wpn, wpns, hp, enemyspd, enemydfs, enemyHP, enemystr)
    const results = [hp, enemyHP];
    return results;
  }
  

  static checker()
  {
    if (this.enemyHP < 1)
    {
      this.pokedead=true;
    }
}
}

//business logic