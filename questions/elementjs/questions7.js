// creating an array and passing the number, questions, options, and answers

let questions = [
  {
    numb: 1,
    question: "What is the name of this element? <br><h1>Br</h1>", 
    answer: "Bromine",
    options: [
      "Baron",
      "Bromine",
      "Beryllium",
      "Barium"
    ]
  },
    {
    numb: 2,
    question: "Group VII - A Elements are :",
    answer: "Halogen",
    options: [
      "Noble Gas",
      "Alkaline Earth",
      "Alkali",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Chlorine ?",
    answer: "Cl",
    options: [
      "Cl",
      "Ch",
      "C",
      "Cr"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the element 'I' ?",
    answer: "Iodine",
    options: [
      "Ion",
      "Iodine",
      "Iridium",
      "Indium"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group VII - A ?",
    answer: "O",
    options: [
      "F",
      "Cl",
      "O",
      "Br"
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