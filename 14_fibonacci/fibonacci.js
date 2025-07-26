const fibonacci = function (nArg) {
  let n;

  if (typeof nArg !== "number") {
    n = parseInt(nArg);
  } else {
    n = nArg;
  }

  let prev = 1;
  let secondPrev = 0;

  if (n < 0) return "OOPS";
  if (n == 0) return 0;

  for (let i = 2; i <= n; i++) {
    let current = prev + secondPrev;
    secondPrev = prev;
    prev = current;
  }

  return prev;
};

// Do not edit below this line
module.exports = fibonacci;
