// creating an array and passing the number, questions, options, and answers

let questions = [
  {
    numb: 1,
    question: "Which element is part of Group V - A ?  ", 
    answer: "Arsenic",
    options: [
      "Arsenic",
      "Oxygen",
      "Chlorine",
      "Iodine"
    ]
  },
    {
    numb: 2,
    question: "Group V - A Elements are :",
    answer: "Chalcogen",
    options: [
      "Transition",
      "Alkaline Earth",
      "Chalcogen",
      "Halogen"
    ]
  },
    {
    numb: 3,
    question: "What is the symbol of Antimony?",
    answer: "Sb",
    options: [
      "Sb",
      "An",
      "Am",
      "Ai"
    ]
  },
    {
    numb: 4,
    question: "What is the name of the element 'N' ?",
    answer: "Nitrogen",
    options: [
      "Neon",
      "Natrium",
      "Nihonium",
      "Nickel"
    ]
  },
    {
    numb: 5,
    question: "Which element is not part of Group V - A ?",
    answer: "Ba",
    options: [
      "Ba",
      "As",
      "N",
      "P"
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