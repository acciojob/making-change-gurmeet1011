const makeChange = (c) => {
  // your name here
  const coin = {
    "q": 0,  // Quarters
    "d": 0,  // Dimes
    "n": 0,  // Nickels
    "p": 0   // Pennies
  };

  c = Number(c);  // Convert input to number

  while (c > 0) {
    if (c >= 25) {
      coin.q = Math.floor(c / 25);
      c = c % 25;
    } else if (c >= 10) {
      coin.d = Math.floor(c / 10);
      c = c % 10;
    } else if (c >= 5) {
      coin.n = Math.floor(c / 5);
      c = c % 5;
    } else {
      coin.p = Math.floor(c / 1);
      c = c % 1;
    }
  }
  return coin;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

