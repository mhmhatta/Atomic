// creating an array and passing the number, questions, options, and answers

let questions = [
  {
    numb: 1,
    question: "What is the name of this element? <br><h1>Ca</h1>", 
    answer: "Calcium",
    options: [
      "Caliber",
      "Carrot",
      "Carbon",
      "Calcium"
    ]
  },
    {
    numb: 2,
    question: "Group II - A Elements are :",
    answer: "Alkaline Earth",
    options: [
      "Transition",
      "Alkaline Earth",
      "Alkali",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Magnesium?",
    answer: "Mg",
    options: [
      "Mg",
      "M",
      "Ma",
      "Mn"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the element 'Ba' ?",
    answer: "Barium",
    options: [
      "Ban",
      "Balloon",
      "Baron",
      "Barium"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group II - A ?",
    answer: "K",
    options: [
      "Be",
      "Mg",
      "K",
      "Sr"
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