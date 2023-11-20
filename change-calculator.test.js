//Tests, feel free to add more

const { changeIssuer } = require("./change-calculator");
const { when, it, test } = require("./test.utils.js");

when(
  "Calculate the optimal number of bank notes (10) and coins (5 and 2) for a given amount of change",
  () => {}
);

when("difference is 0", () => {
  it("should return null", () => {
    test(changeIssuer(0), null);
  });
});

when("difference is 1", () => {
  it("should return null", () => {
    test(changeIssuer(1), null);
  });
});

when("difference is greater than 9007199254740991", () => {
  it("should return null", () => {
    test(changeIssuer(9007199254740990 + 1), null);
  });
});

when("difference is 9007199254740990", () => {
  it("should return { two: 0, five: 0, ten: 900719925474099 }", () => {
    test(changeIssuer(9007199254740990), {
      two: 0,
      five: 0,
      ten: 900719925474099,
    });
  });
});

when("difference is 3", () => {
  it("should return { two: 1, five: 0, ten: 0 }", () => {
    test(changeIssuer(3), { two: 1, five: 0, ten: 0 });
  });
});

when("difference is 4", () => {
  it("should return { two: 2, five: 0, ten: 0 }", () => {
    test(changeIssuer(4), { two: 2, five: 0, ten: 0 });
  });
});

when("difference is 6", () => {
  it("should return { two: 3, five: 0, ten: 0 }", () => {
    test(changeIssuer(6), { two: 3, five: 0, ten: 0 });
  });
});

when("difference is 7", () => {
  it("should return { two: 1, five: 1, ten: 0 }", () => {
    test(changeIssuer(7), { two: 1, five: 1, ten: 0 });
  });
});

when("difference is 8", () => {
  it("should return { two: 4, five: 0, ten: 0 }", () => {
    test(changeIssuer(8), { two: 4, five: 0, ten: 0 });
  });
});

when("difference is 12", () => {
  it("should return { two: 1, five: 0, ten: 1 }", () => {
    test(changeIssuer(12), { two: 1, five: 0, ten: 1 });
  });
});

when("difference is 10*X + 1 (X >= 1)", () => {
  it("should return 10*(X-1) + 5 + 2*3", () => {
    test(changeIssuer(10 * 1 + 1), { two: 3, five: 1, ten: 0 });
  });
});

when("difference is 10*X + 3 (X >= 1)", () => {
  it("should return 10*(X-1) + 5 + 2*4", () => {
    test(changeIssuer(10 * 1 + 3), { two: 4, five: 1, ten: 0 });
  });
});

when("difference is 10*X + 6 (X >= 1)", () => {
  it("should return 10*X + 2*3", () => {
    test(changeIssuer(10 * 1 + 6), { two: 3, five: 0, ten: 1 });
  });
});

when("difference is 10*X + 8 (X >= 1)", () => {
  it("should return 10*X + 2*4", () => {
    test(changeIssuer(10 * 1 + 8), { two: 4, five: 0, ten: 1 });
  });
});
