// business logic//

function count(number) {
  var counting = [];
  for (var i = 0; i <= number; i += 1){
      if (i % 3 === 0) {
       counting.push("PING");
     } else if (i % 5 === 0) {
       counting.push("PONG");
     } else if (i % 15 === 0) {
       counting.push("PINGPONG!")
     } else {
      counting.push(i);
   }
 }
    // debugger
  return counting;
};
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var counting = count(number);
    counting.forEach(function(counting) {
    $("#result").append("<li>" + (counting) + "</li>");
    console.log(counting);
  });
  });
 });
