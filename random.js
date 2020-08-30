var randomBodyParts = ["face", "eye", "hair", "work", "hardwork", "presence"];
var randomAdjectives = [
  "pretty",
  "beautiful",
  "pleasing",
  "enjoyable",
  "pleasant",
  "pleasing",
  "pleasurable",
  "delightful",
  "great",
  "nice",
  "appreciated",
  "amusing",
];
var randomWords = ["in the city", "in the house ", "in the world"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 6)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 12)];
var randomWord = randomWords[Math.floor(Math.random() * 3)];
var randomInsult =
  "Your " + randomBodyPart + " is " + randomAdjective + " " + randomWord + "!!";
document.write(randomInsult);
