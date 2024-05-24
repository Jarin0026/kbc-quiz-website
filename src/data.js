const data = [
    
  {
    id: 1,
    question: "Which data structure is used for implementing recursion?",
    answers: [
      {
        text: "Stack",
        correct: true,
      },
      {
        text: "List",
        correct: false,
      },
      {
        text: "Queue",
        correct: false,
      },
      {
        text: "Array",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Which of this is not a network edge device?",
    answers: [
      {
        text: "Switch",
        correct: true,
      },
      {
        text: "PC",
        correct: false,
      },
      {
        text: "Smartphones",
        correct: false,
      },
      {
        text: "Servers",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: " Which topology requires a multipoint connection?",
    answers: [
      {
        text: "Ring",
        correct: false,
      },
      {
        text: "Bus",
        correct: true,
      },
      {
        text: "Star",
        correct: false,
      },
      {
        text: "Mesh",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "Which of this is not a network edge device?",
    answers: [
      {
        text: "Switch",
        correct: true,
      },
      {
        text: "PC",
        correct: false,
      },
      {
        text: "Smartphones",
        correct: false,
      },
      {
        text: "Servers",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Which feature of OOP indicates code reusability?",
    answers: [
      {
        text: "Abstraction",
        correct: false,
      },
      {
        text: "Polymorphism",
        correct: false,
      },
      {
        text: "Encapsulation",
        correct: false,
      },
      {
        text: "Inheritance",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: "Which one of the following is not a real time operating system?",
    answers: [
      {
        text: "Kotlin",
        correct: false,
      },
      {
        text: "SmallTalk",
        correct: true,
      },
      {
        text: "Java",
        correct: false,
      },
      {
        text: "C",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "When OOP concept did first came into picture?",
    answers: [
      {
        text: "1980’s",
        correct: false,
      },
      {
        text: "1995",
        correct: false,
      },
      {
        text: "1970’s",
        correct: true,
      },
      {
        text: "1993",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "Which one of the following is not a real time operating system?",
    answers: [
      {
        text: "RTLinux",
        correct: false,
      },
      {
        text: "Palm OS",
        correct: true,
      },
      {
        text: "QNX",
        correct: false,
      },
      {
        text: "VxWorks",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "If a process fails, most operating system write the error information to a ______",
    answers: [
      {
        text: "new file",
        correct: false,
      },
      {
        text: "another running process",
        correct: false,
      },
      {
        text: "log file",
        correct: true,
      },
      {
        text: "none of the mentioned",
        correct: false,
      },
    ],
  },
  {
  id: 10,
  question: "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
  answers: [
    {
      text: "Priority",
      correct: false,
    },
    {
      text: "Round Robin",
      correct: false,
    },
    {
      text: "Shortest Job First",
      correct: false,
    },
    {
      text: "All of the mentioned",
      correct: true,
    },
  ],
},
{
  id: 11,
  question: "Where was the BRICS summit held in 2014?",
  answers: [
    {
      text: "Brazil",
      correct: true,
    },
    {
      text: "India",
      correct: false,
    },
    {
      text: "Russia",
      correct: false,
    },
    {
      text: "China",
      correct: false,
    },
  ],
},
{
  id: 12,
  question: "Which of these spices is the smallest in size?",
  answers: [
    {
      text: "Ajwain",
      correct: true,
    },
    {
      text: "Jeera",
      correct: false,
    },
    {
      text: "Saunf",
      correct: false,
    },
    {
      text: "Methi Seeds",
      correct: false,
    },
  ],
},
{
  id: 13,
  question:
    "Which battle in 1757 marked the beginning of British occupation in India?",
  answers: [
    {
      text: "Plassey",
      correct: true,
    },
    {
      text: "Assaye",
      correct: false,
    },
    {
      text: "Buxar",
      correct: false,
    },
    {
      text: "Cuddalore",
      correct: false,
    },
  ],
},
{
  id: 14,
  question: "Which is the second most spoken language of Nepal?",
  answers: [
    {
      text: "Bajjika",
      correct: false,
    },
    {
      text: "Nepali",
      correct: false,
    },
    {
      text: "Maithili",
      correct: true,
    },
    {
      text: "Bhojpuri",
      correct: false,
    },
  ],
},
{
  id: 15,
  question: "In which of these two sports is the term ‘free hit’ used?",
  answers: [
    {
      text: "Football, Squash",
      correct: false,
    },
    {
      text: "Badminton, Tennis",
      correct: false,
    },
    {
      text: "Badminton, Cricket",
      correct: true,
    },
    {
      text: "Hockey, Cricket",
      correct: true,
    },
  ],
},

];
  
  const prizeMoney = [
    { id: 1, amount: "₹ 5000" },
    { id: 2, amount: "₹ 15000" },
    { id: 3, amount: "₹ 30000" },
    { id: 4, amount: "₹ 60000" },
    { id: 5, amount: "₹ 100000" },
    { id: 6, amount: "₹ 150000" },
    { id: 7, amount: "₹ 250000" },
    { id: 8, amount: "₹ 400000" },
    { id: 9, amount: "₹ 600000" },
    { id: 10, amount: "₹ 1000000" },
    { id: 11, amount: "₹ 5000000" },
    { id: 12, amount: "₹ 100000000" },
    { id: 13, amount: "₹ 300000000" },
    { id: 14, amount: "₹ 500000000" },
    { id: 15, amount: "₹ 1000000000" },
  ].reverse();
  
  export { prizeMoney, data };




  