$(document).ready(function() {
  
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 10
    var userGuess = "";
    var running = false;
    var qCount = options.length;
  
    var options = [
    {
      question: "Who founded the Simpsons' town?",
      choice: [
        "Jebadiah Springfield",
        "Zachariah Springfield",
        "Springfield Manhattan"
      ],
      answer: 0
    },
    {
      question: "What is the name of Lisa's jazz mentor?",
      choice: [
        "Billy Jazzman",
        "Blind Willy Witherspoon",
        "Bleeding Gums Murphy"
      ],
      answer: 2
    },
    {
      question: "Which one of these is a catchphrase Bart uses?",
      choice: ["Aye Carumba", "Eat my shorts Springfield", "Wohooo"],
      answer: 0
    },
    {
      question: "Who runs the Kwik-E-Mart?",
      choice: ["Homer", "Apu", "Moe"],
      answer: 1
    },
    {
      question:
        "How many days was Marge in prison when she was caught shoplifting?",
      choice: ["15 days", "30 days", "45 days"],
      answer: 1
    },
    {
      question: "Who ran over Bart w/ his car?",
      choice: ["Mr. Burns", "Smithers", "Duff Man"],
      answer: 0,
    },
    {
      question: "Who was named PLOW KING?",
      choice: ["Ned", "Maggie", "Barney"],
      answer: 1,
    },
    {
      question: "Who is the Simpsons Neighbor? ",
      choice: ["Barney Gumble", "Principal Skinner", "Ned Flanders"],
      answer: 2,
    }
  ];

  

  $("#reset").hide();
  //click start button to start game
  $("#start").on("click", function() {
    $("#start").hide();
    displayQuestion();
    for (var i = 0; i < options.length; i++) {
      holder.push(options[i]);
      console.log(options);
      
    }
  });
 
  
   