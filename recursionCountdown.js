function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }

  function countUp(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countUp(n - 1);
      arr.push(n);
      return arr;
    }
  }

  console.log(countdown(5));