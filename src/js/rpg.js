export class Character {
  constructor (bases, growths, health, equipment, xp) { 
    this.bases = bases;
    this.growths = growths;
    this.health = health;
    this.equipment = equipment;
  }

  stats (meow) {
    for (i = 0; i < 4; i++)
    {
      meow[i] += Math.floor(Math.random() * 15) + 5;
    }
    return meow;
  }

  stats2 (bases) {
  for (i = 0; i < 4; i++)
  {
    bases[i] += Math.floor(Math.random() * 10) + 20;
  }
  return bases;
}

  levelUp(bases, growths) {
  for (i = 0; i < growths.length; i++)
  {
      let chance = Math.floor(Math.random() * 100)
      if (chance < growths[i])
      {
          bases[i] += 10;
      }
  }
}

//HP = 0, Strength = 1, Defense = 2, Speed = 3
  classStart(job, char) {
  let growths = [0, 0, 0, 0]
  let bases = [0, 0, 0, 0]

  switch(job)
  {
  case("High School Dropout"):
    char.bases[0] += 5;
    char.bases[4] += 5;
    char.growths[0] += 50;
    char.growths[4] += 50;
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
    char.bases[4] += 5;
    char.growths[0] += 25;
    char.growths[3] += 50;
    char.growths[4] += 25;
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
    char.growths[4] += 20;
    break;
  }

  char.growths = stats (char.growths);
  char.bases = stats2 (char.bases);
  
  
  return char;
}
}
Bob = new character([0, 0, 0, 0], [0, 0, 0, 0], 0, " ", 0);
classStart("Mother", Bob);
console.log(Bob.growths);