import Character from './../src/js/rpg.js';

describe('Character', () => {
   let bob;
  beforeEach(() => {
    bob = new Character([1, 0, 0, 0], [100, 0, 0, 0], 0, " ", 0);

  });

  test('Should return a HP growth and base greater than 0', () => {
    (bob.classStart("Mother", bob));
    expect(bob.bases[0]).toBeGreaterThan(0);
  });

  test('Should return a higher base stat than it started with', () => {
    //console.log(bob.bases);
    bob.levelUp();
    expect(bob.bases[0]).toBeGreaterThan(0);
  });
});

