const Set = require('../challenges/set');


describe('checks to see if set class works', () => {
  //instance methods
  it('creates a set', () => {
    const set = new Set([1, 2, 3]);
    expect(set.array).toEqual([1, 2, 3]);
  });

  it('can add to a set', () => {
    const set = new Set([1, 2, 3]);
    set.add(4);
    expect(set.array).toEqual([1, 2, 3, 4]);
  });

  it('wont add a duplicate item', () => {
    const set = new Set([1, 2, 3]);
    set.add(1);
    expect(set.array).toEqual([1, 2, 3]);
  });

  it('removes an item to set', () => {
    const set = new Set([1, 2, 3]);
    set.remove(1);
    expect(set.array).toEqual([2, 3]);
  });

  it('has an item in set', () => {
    const set = new Set([1, 2, 3]);
    const answer = set.has(3);
    expect(answer).toEqual(true);
  });

  it('takes a set, returns a new set with the intersection of those sets', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 6]);
    const answer = set1.intersection(set2);
    console.log(answer.array);
    expect(answer.array).toEqual([2, 3]);
  });

  it('takes a set, returns a new set with the union of those sets', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 6]);
    const answer = set1.union(set2);
    expect(answer.array).toEqual([1, 2, 3, 6]);
  });

  it('takes a set, returns a new set with the difference of those sets', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 6]);
    const answer = set1.difference(set2);
    expect(answer.array).toEqual([1, 6]);
  });

  //static methods
  it.skip('takes two sets, returns a new set with the intersection of those sets', () => {

  });

  it.skip('takes two sets, returns a new set with the union of those sets', () => {

  });

  it.skip('takes two sets, and returns a new set with the difference of those sets', () => {

  });

});