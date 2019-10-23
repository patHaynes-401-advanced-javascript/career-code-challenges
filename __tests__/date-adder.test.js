const dateAdder = require('../challenges/date-adder');

describe('date adding and testing', () => {

  it('adds seconds to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const secondsAdded = '10s';
    const seconds = dateAdder(date, secondsAdded);
    expect(seconds.toUTCString()).toEqual('Sun, 20 Jan 2019 18:33:40 GMT');
  });

  it('adds minutes to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const minutesAdded = '10m';
    const minutes = dateAdder(date, minutesAdded);
    expect(minutes.toUTCString()).toEqual('Sun, 20 Jan 2019 18:43:30 GMT');
  });

  it('adds hours to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const hoursAdded = '1h';
    const hours = dateAdder(date, hoursAdded);
    expect(hours.toUTCString()).toEqual('Sun, 20 Jan 2019 19:33:30 GMT');
  });

  it('adds days to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const daysAdded = '1d';
    const days = dateAdder(date, daysAdded);
    expect(days.toUTCString()).toEqual('Mon, 21 Jan 2019 18:33:30 GMT');
  });

  it('adds weeks to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const weeksAdded = '1w';
    const weeks = dateAdder(date, weeksAdded);
    expect(weeks.toUTCString()).toEqual('Sun, 27 Jan 2019 18:33:30 GMT');
  });

  it('adds months to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const hoursAdded = '1M';
    const hours = dateAdder(date, hoursAdded);
    expect(hours.toUTCString()).toEqual('Wed, 20 Feb 2019 18:33:30 GMT');
  });

  it('adds years to the date', () => {
    const date = new Date(2018, 12, 20, 10, 33, 30, 0);
    const yearsAdded = '1y';
    const years = dateAdder(date, yearsAdded);
    expect(years.toUTCString()).toEqual('Mon, 20 Jan 2020 18:33:30 GMT');
  });


});