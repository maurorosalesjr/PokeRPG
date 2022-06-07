export default class Character {
  constructor(bases, growths, health, equipment, xp) { 
    this.bases = bases;
    this.growths = growths;
    this.health = health;
    this.equipment = equipment;
    this.xp = xp;
  }
 


  stats (growths) {
    for (let i = 0; i < 4; i++)
    {
      growths[i] += Math.floor(Math.random() * 15) + 5;
    }
    return growths;
  }

  stats2 (bases) {
    for (let i = 0; i < 4; i++)
    {
      bases[i] += Math.floor(Math.random() * 10) + 20;
    }
    return bases;
  }

  levelUp() {
    for (let i = 0; i < this.growths.length; i++)
    {
      let chance = Math.floor(Math.random() * 100);
      if (chance < this.growths[i])
      {
        this.bases[i] += 10;
      }
    }
  }

  //HP = 0, Strength = 1, Defense = 2, Speed = 3
  classStart(job, char) {

    switch(job)
    {
    case("High School Dropout"):
      char.bases[0] += 5;
      char.bases[3] += 5;
      char.growths[0] += 50;
      char.growths[3] += 50;
      break;
    case("Scientist"):
      char.bases[1] += 5;
      char.bases[2] += 5;
      char.growths[1] += 50;
      char.growths[2] += 50;
      break;
    case("Epicodus Student"):
      char.bases[0] += 5;
      char.bases[3] += 5;
      char.bases[3] += 5;
      char.growths[0] += 25;
      char.growths[3] += 50;
      char.growths[3] += 25;
      break;
    case("Pompous Gentleman"):
      char.growths[0] += 50;
      char.growths[3] += 50;
      break;
    case("Mother"):
      char.growths[1] += 33;
      char.growths[2] += 34;
      char.growths[3] += 33;
      break;
    case("Delivery Driver"):
      char.growths[0] += 20;
      char.growths[1] += 20;
      char.growths[2] += 20;
      char.growths[3] += 20;
      char.growths[3] += 20;
      break;
    }


  
    this.stats(char.growths);
    this.stats2(char.bases);
    return char;
  }
}
