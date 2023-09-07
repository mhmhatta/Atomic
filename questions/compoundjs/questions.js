// creating an array and passing the number, questions, options, and answers

let questions = [
  {
    numb: 1,
    question: "Salt is compound that can be found in the kitchen as food preservatives and food seasoning.<br> What is the chemical formula for Salt ?", 
    image: "../../img/Salt.jpg",
    answer: "NaCl",
    options: [
      "NaCl",
      "H2O",
      "NaHCO3",
      "Krunch"
    ]
  },
    {
    numb: 2,
    question: "This compound can be used as pesticide and many more. The chemical formula is NH3.<br>What compound is it?",
    image: "../../img/acetic.jpg",
    answer: "Ammonia",
    options: [
      "Ammonia",
      "Sucrose",
      "Water",
      "Acetic Acid"
    ]
  },
    {
    numb: 3,
    question: "Water is vital for daily life. Water is the reason we have organic life on Earth.<br>What is the chemical formula for water?",
    image: "../../img/Water.jpg",
    answer: "H2O",
    options: [
      "NaCl",
      "CH3COOH",
      "H2O2",
      "NH3"
    ]
  },
    {
    numb: 4,
    question: "This compound can be used as suplement to support body immune system. This compound have other name, Vitamin C.<br> What compound is it?",
    image: "../../img/ascorbic.jpg",
    answer: "Ascorbic Acid",
    options: [
      "Ascorbic Acid",
      "Ammonia",
      "Acetic Acid",
      "Soap"
    ]
  },
    {
    numb: 5,
    question: "Soap is a compound that is used to clean ourself.<br>What is the chemical formula for Soap?",
    image: "../../img/Soaps.jpg",
    answer: "RCOO-Na",
    options: [
      "RCOO-Na",
      "C12H22O11",
      "NaCl",
      "H2O"
    ]
  },
  {
    numb: 6,
    question: "This compound is used to sweeten food.<br>What compound is it?",
    image: "../../img/sugar.jpg",
    answer: "Sucrose",
    options: [
      "Ascorbic Acid",
      "Sucrose",
      "Salt",
      "Soap"
    ]
  },
  {
    numb: 7,
    question: "Mouth wash is an antiseptic solution which is used to reduce the antibacterial load in our oral cavity.<br> What is the chemical formula for Mouthwash?",
    image: "../../img/Mouthwash.jpg",
    answer: "H2O2",
    options: [
      "H2O",
      "H2O2",
      "NaCl",
      "NaHCO3"
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