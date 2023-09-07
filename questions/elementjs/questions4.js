// creating an array and passing the number, questions, options, and answers

let questions = [
  {
    numb: 1,
    question: "What is the name of this element? <br><h1>C</h1>", 
    answer: "Carbon",
    options: [
      "Carbon",
      "Calcium",
      "Chlorine",
      "Cesium"
    ]
  },
    {
    numb: 2,
    question: "Group IV - A Elements are :",
    answer: "Carbon",
    options: [
      "Carbon",
      "Noble Gas",
      "Alkali",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Silicon?",
    answer: "Si",
    options: [
      "S",
      "Si",
      "Sl",
      "Sn"
    ]
  },
    {
    numb: 4,
    question: "Which element is part of Group IV - A ?",
    answer: "Ge",
    options: [
      "Ge",
      "N",
      "Te",
      "Xe"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group II - A ?",
    answer: "P",
    options: [
      "Si",
      "Ge",
      "P",
      "Pb"
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