// business logic

var count = function(number) {
console.log(number);
  var numberArr = [];
  $("input:[#number]").each(function() {
  var firstNumber = $(this).val();
  numberArr.push(number);
})
  for (var index = 0; index < numberArr.length; index += 1) {
    alert(index);
console.log(index);
return result;
  if (numberArr[index] % 3) {
    $(".numbers").text("ping!");
  } else if (numberArr[index] % 5) {
    $(".numbers").text("pong!");
  } else if (numberArr[index] % 15) {
    $(".numbers").text("PING-PONG!");
  }

  };
 return result;


// user interface logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var number = parseInt ($("input#number").val());
    var result = count(number);
console.log(inputnumber);

    // if ("#number" === 0) {
    //   $("#result").text("Try again");
    // }
console.log(number);
    $(".numbers").text(count);
    $("#result").show();
  });
});
};
