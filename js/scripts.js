// business logic

var count = function(number) {
  // if ((number % 3 === "ping!") && (number % 5 !== "pong!") || ((number % 15 === "PING-PONG!"))
var numberArr = [];
$("input:[#number]").each(function() {
  var firstNumber = $(this).val();
  numberArr.push(number);
})
for (var index = 0; index < numberArr.length; index += 1) {


  if (numberArr[index] % 3) {
    $(".numbers").text("ping!");
  } else if (numberArr[index] % 5) {
    $(".numbers").text("pong!");
  } else if (numberArr[index] % 15) {
    $(".numbers").text("PING-PONG!");
  }
  // return result;
  };



// user interface logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();



    var number = parseInt( ($("input#number").val().split("")));
    var result = count(number);
    if ("#number" === 0) {
      $("#result").text("Try again");
    }
    $(".numbers").text(count);

             // same as writing if (result === false)


    $("#result").show();
  });
});
