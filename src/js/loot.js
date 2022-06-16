export default class Loot {


  static lootRoll () 
  {
    const string = "Level Up";
    const lootWeapon = [20, 30, 40, 50, 60, 70, 80];
    const lootSideArm = [5, 10, 15, 20, 25, 30];
    const lootGold = [25, 100, 150, 200, 250, 300];
    let returnValue;
    
    const rollOne = Math.floor(Math.random() * 4);
    
    switch(rollOne)
    {
    case(0):
      returnValue = string;
      break;
    case(1):
      returnValue = lootWeapon[Math.floor(Math.random() * 7)];
      break;
    case(2):
      returnValue = lootSideArm[Math.floor(Math.random() * 6)];
      break;
    case(3):
      returnValue = lootGold[Math.floor(Math.random() * 6)];
      break;
    }
    returnValue = [rollOne, returnValue];
    return returnValue;
  }
}
    