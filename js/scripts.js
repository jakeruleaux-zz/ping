// business logic
// var count = function(number) {
  // if ((number % 3 === "ping!") && (number % 5 !== "pong!") || ((number % 15 === "PING-PONG!")) {
var count = [];
$("input:[#number]").each(function() {
  var firstNumber = $(this).val();
  count.push(number);
})
for (var index = 0; index < count.length; index += 1) {
  if (count % 3) {
    $(.numbers).text("ping!");
  } else if (count % 5) {
    $(.numbers).text("pong!");
  } else if (count % 15) {
    $(.numbers).text("PING-PONG!");
  }
  };
};


// user interface logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();



    var number = parseInt($("input#number").val());
    var result = count(number);
    if ("#number" === 0) {
      $("#result").text("Try again");
    }
    $(".numbers").text(count);

             // same as writing if (result === false)


    $("#result").show();
  });
});
