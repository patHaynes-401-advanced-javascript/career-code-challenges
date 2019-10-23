const dateAdder = require('../challenges/date-adder');

describe('date adding and testing', () => {

  it('adds seconds to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const secondsAdded = '10s';
    const seconds = dateAdder(date, secondsAdded);
    expect(seconds.toString()).toEqual('Sun Jan 20 2019 10:33:40 GMT-0800 (Pacific Standard Time)');
  });

  it('adds minutes to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const minutesAdded = '10m';
    const minutes = dateAdder(date, minutesAdded);
    expect(minutes.toString()).toEqual('Sun Jan 20 2019 10:43:30 GMT-0800 (Pacific Standard Time)');
  });

  it.skip('adds hours to the date', () => {

  });

  it.skip('adds days to the date', () => {

  });

  it.skip('adds weeks to the date', () => {

  });

  it.skip('adds months to the date', () => {

  });

  it.skip('adds years to the date', () => {

  });



});