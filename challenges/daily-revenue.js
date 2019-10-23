function revenue(transactions) {

  let dailyRevenue = {};

  for(let i = 0; i < transactions.length; i++) {
    const date = new Date(transactions[i].timestamp);

    const formattedDate = date.toUTCString().slice(date.length - 16, 16);
    const newDate = new Date(formattedDate).toDateString();

    if(!dailyRevenue[newDate]) {
      dailyRevenue[newDate] = transactions[i].price;
    } else dailyRevenue[newDate] += transactions[i].price;
  }
  return dailyRevenue;
}

module.exports = revenue; 