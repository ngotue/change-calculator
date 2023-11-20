function changeIssuer(difference) {
  if (difference <= 1 || difference > 9007199254740990) return null;

  if (difference === 3)
    return {
      two: 1,
      five: 0,
      ten: 0,
    };

  const { countOf2, countOf5, countOf10 } = changeCalculator(difference);
  return {
    two: countOf2,
    five: countOf5,
    ten: countOf10,
  };
}

const changeCalculator = (difference) => {
  let countOf10 = Math.floor(difference / 10),
    countOf5 = 0,
    countOf2 = 0;

  const leftAfter10 = difference % 10;
  countOf5 = Math.floor(leftAfter10 / 5);

  if (leftAfter10 === 1 || leftAfter10 === 3) {
    countOf10--;
    countOf5++;
    countOf2 += handle6And8(leftAfter10);
  } else {
    const leftAfter5 = leftAfter10 % 5;

    if (leftAfter5 === 1 || leftAfter5 === 3) {
      countOf5--;
      countOf2 += handle6And8(leftAfter5);
    } else {
      countOf2 = Math.floor(leftAfter5 / 2);
    }
  }
  return { countOf2, countOf5, countOf10 };
};

const handle6And8 = (leftOver) => {
  return leftOver === 1 ? 3 : 4;
};

module.exports = {
  changeIssuer,
};
