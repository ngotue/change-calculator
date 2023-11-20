const equal = (x, y) => {
  const ok = Object.keys,
    tx = typeof x,
    ty = typeof y;
  return x && y && tx === "object" && tx === ty
    ? ok(x).length === ok(y).length &&
        ok(x).every((key) => equal(x[key], y[key]))
    : x === y;
};

const logWithColor = (statement) =>
  `${statement ? "\x1b[32m" : "\x1b[31m"} ${
    statement ? String.fromCodePoint("0x2714") : String.fromCodePoint("0x2716")
  }`;

const when = (clause, callback) => {
  console.log(`\x1b[94m\n${clause}\x1b[0m`);
  callback();
};

const it = (clause, callback) => {
  callback();
  console.log(` ${clause}\x1b[0m`);
};

const test = (result, expected) => {
  const statement = equal(result, expected);
  process.stdout.write(logWithColor(statement));
};

module.exports = {
  equal,
  when,
  it,
  test,
};
