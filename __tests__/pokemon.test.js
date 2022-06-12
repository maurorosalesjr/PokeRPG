import { resolvePlugin } from '@babel/core';
import Combat from './../src/js/combat.js';
import Character from './../src/js/rpg.js';


describe('Character', () => {
  let bob;
  let sarah;
  beforeEach(() => {
    bob = new Character([1, 0, 0, 0], [100, 0, 0, 0], 0, " ", 0);
    sarah = new Character([0, 0, 0, 0], [0, 0, 0, 0], 0, " ", 0);

  });

  test('Should return a HP growth and base greater than 0', () => {
    (bob.classStart("Mother", bob));
    expect(bob.bases[0]).toBeGreaterThan(0);
  });

  test('Should return a higher base stat than it started with', () => {
    bob.levelUp();
    expect(bob.bases[0]).toBeGreaterThan(0);
  });
  /*test('Should punch a pokemon', () => {

    sarah.classStart("Mother", sarah);
    let meme;
    expect(meme = Combat.strike(sarah.bases[1], sarah.bases[2], 5, 5, sarah.bases[0], 6, 4, 80, 9)[1]).toBeLessThan(80);
  });*/
});