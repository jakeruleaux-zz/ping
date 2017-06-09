// business logic
var count = function(number) {
  if ((number % 3 === "ping!") && (number % 5 !== "pong!") || ((number % 15 === "PING-PONG!")) {
    return true;
  } else {
    return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#numer").val());
    var result = count(number);

    $(".numbers").text(number);

             // same as writing if (result === false)
    

    $("#result").show();
  });
});
