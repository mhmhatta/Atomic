// creating an array and passing the number, questions, options, and answers

let questions = [
  {
    numb: 1,
    question: "What is the name of this element? <br><h1>B</h1>", 
    answer: "Boron",
    options: [
      "Boron",
      "Beryllium",
      "Barium",
      "Bonbon"
    ]
  },
    {
    numb: 2,
    question: "Group III - A Elements are :",
    answer: "Boron",
    options: [
      "Boron",
      "Chalcogen",
      "Alkali",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Indium?",
    answer: "In",
    options: [
      "I",
      "In",
      "Id",
      "Im"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the element 'Tl' ?",
    answer: "Thallium",
    options: [
      "Tellurium",
      "Thallium",
      "Thulium",
      "Thorium"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group III - A ?",
    answer: "Ba",
    options: [
      "B",
      "Al",
      "Ba",
      "Ga"
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