// business logic//

var count = function(number) {
  var counting = [];

  for (var i = 0; i < counting.length; i += 1){
      if (counting[i] % 3) {
        return counting;
      } else (counting[i] % 5) {
        return counting;
      }
};
console.log();
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var total = count(number);
    total.forEach(function() {
    $("#result").append("<li>" + "</li>");
  });
  });
});
