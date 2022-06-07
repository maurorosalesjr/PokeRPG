export default class combat {


  strike(str, spd, wpn, wpns, hp, enemyspd, enemydfs, hp, enemyHP) {
    let damage = 0;
    let double = false;

    damage = (str + wpn) - enemydfs;
    speed += (spd + wpns);

    if(spd > enemyspd)
    {
      if(spd > (enemyspd + 4))
      {
        enemyHP = this.takeDamage(damage, enemyHP)
        HP = this.takeDamage(damage, HP)
        enemyHP = this.takeDamage(damage, enemyHP)
      }
      double = true;
    }
    let strikeFeedback = [damage, double];
    return strikeFeedback;
  }
  
  takeDamage(damage, HP) {
    HP -= damage
    return hp;
  }

}

//business logic