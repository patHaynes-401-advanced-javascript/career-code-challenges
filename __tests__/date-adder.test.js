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

  it('adds hours to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const hoursAdded = '1h';
    const hours = dateAdder(date, hoursAdded);
    expect(hours.toString()).toEqual('Sun Jan 20 2019 11:33:30 GMT-0800 (Pacific Standard Time)');
  });

  it('adds days to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const daysAdded = '1d';
    const days = dateAdder(date, daysAdded);
    expect(days.toString()).toEqual('Mon Jan 21 2019 10:33:30 GMT-0800 (Pacific Standard Time)');
  });

  it('adds weeks to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const weeksAdded = '1w';
    const weeks = dateAdder(date, weeksAdded);
    expect(weeks.toString()).toEqual('Sun Jan 27 2019 10:33:30 GMT-0800 (Pacific Standard Time)');
  });

  it('adds months to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const hoursAdded = '1M';
    const hours = dateAdder(date, hoursAdded);
    expect(hours.toString()).toEqual('Wed Feb 20 2019 10:33:30 GMT-0800 (Pacific Standard Time)');
  });

  it('adds years to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const yearsAdded = '1y';
    const years = dateAdder(date, yearsAdded);
    expect(years.toString()).toEqual('Mon Jan 20 2020 10:33:30 GMT-0800 (Pacific Standard Time)');
  });


});