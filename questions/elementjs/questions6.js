// creating an array and passing the number, questions, options, and answers

let questions = [
  {
    numb: 1,
    question: "What is the name of this element? <br><h1>Te</h1>", 
    answer: "Tellurium",
    options: [
      "Tellurium",
      "Thalium",
      "Titanium",
      "Technetium"
    ]
  },
    {
    numb: 2,
    question: "Group VI - A Elements are :",
    answer: "Nitrogen",
    options: [
      "Transition",
      "Nitrogen",
      "Chalcogen",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Oxygen?",
    answer: "O",
    options: [
      "Ox",
      "O",
      "Oy",
      "On"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the element 'S' ?",
    answer: "Sulfur",
    options: [
      "Sulfur",
      "Selenium",
      "Strontium",
      "Scandium"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group VI - A ?",
    answer: "Xe",
    options: [
      "O",
      "Se",
      "Xe",
      "Te"
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