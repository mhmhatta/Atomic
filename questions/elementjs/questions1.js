// creating an array and passing the number, questions, options, and answers

let questions = [
  {
    numb: 1,
    question: "What is the name of this element? <br><h1>H</h1>", 
    answer: "Hydrogen",
    options: [
      "Hydrogen",
      "Hafnium",
      "Helium",
      "Halogen"
    ]
  },
    {
    numb: 2,
    question: "Group I - A Elements are :",
    answer: "Alkali",
    options: [
      "Transition",
      "Alkaline Earth",
      "Alkali",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Hydrogen?",
    answer: "H",
    options: [
      "Hy",
      "Ho",
      "Hb",
      "H"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the element 'Li' ?",
    answer: "Lithium",
    options: [
      "Limun",
      "Lithium",
      "Lima",
      "Lina"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group I - A?",
    answer: "Ca",
    options: [
      "H",
      "Ca",
      "Li",
      "Na"
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