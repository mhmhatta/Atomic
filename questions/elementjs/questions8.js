// creating an array and passing the number, questions, options, and answers

let questions = [
  {
    numb: 1,
    question: "What is the name of this element? <br><h1>Kr</h1>", 
    answer: "Krypton",
    options: [
      "Krom",
      "Krypton",
      "Kraken",
      "Krunch"
    ]
  },
    {
    numb: 2,
    question: "Group VIII - A Elements are :",
    answer: "Noble Gas",
    options: [
      "Noble Gas",
      "Alkaline Earth",
      "Chalcogen",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol for Helium?",
    answer: "He",
    options: [
      "H",
      "He",
      "Hl",
      "Hm"
    ]
  },
    {
    numb: 4,
    question: "What element is part of Group VIII - A ?",
    answer: "Radon",
    options: [
      "Baron",
      "Radon",
      "Carbon",
      "Proton"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group VIII - A ?",
    answer: "Be",
    options: [
      "He",
      "Ne",
      "Be",
      "Xe"
    ]
  },
];

// Shuffle the questions array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

questions = shuffle(questions);

questions.forEach(function(question) {
  question.options = shuffle(question.options);
});