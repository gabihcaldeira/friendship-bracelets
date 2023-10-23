const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const countLetters = (string) => {
  let res = [];
  const strArr = string.split("");
  alphabet.forEach((letter) => {
    const qntLetter = strArr.filter((e) => e.toUpperCase() === letter);
    if (qntLetter.length > 0) {
      res.push({
        letter,
        qnt: qntLetter.length,
      });
    }
  });

  return res;
};
