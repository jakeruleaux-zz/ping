// business logic

var count = function(number) {
  var counting = [];
  counting.push(count);
  // var result = [];
  for (var index = 0; index < counting.length; index += 1){
    //  if (counting[index] % 3) {
    //    $(".numbers").text("ping!");
    //  } else if (counting[index] % 5) {
    //    $(".numbers").text("pong!");
    //  } else if (counting[index] % 15) {
    //    $(".numbers").text("PING-PONG!");
    //   result.push(index);
console.log(result);
     }
    //  return result;
};
console.log();
// };

// user interface logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var number = parseInt ($("input#number").val());
    var total = count(number);
console.log(number);
    $("ul").append("<li>" + "</li>");
console.log(number);
  });
});
