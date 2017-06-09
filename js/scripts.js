// business logic

var count = function(number) {
  var counting = [];
  counting.push(count);

  for (var index = 0; index < counting.length; index += 1){
     if (counting[index] % 3) {
       $(".numbers").text("ping!");
     } else if (counting[index] % 5) {
       $(".numbers").text("pong!");
     } else if (counting[index] % 15) {
       $(".numbers").text("PING-PONG!");
     }

 // return result;
  };



console.log(number);


//   var numberArr = [];
//   $("input:[#number]").each(function() {
//   var firstNumber = $(this).val();
//   numberArr.push(number);
// })
//   for (var index = 0; index < numberArr.length; index += 1) {
//     alert(index);
// console.log(index);
// return result;
//   if (numberArr[index] % 3) {
//     $(".numbers").text("ping!");
//   } else if (numberArr[index] % 5) {
//     $(".numbers").text("pong!");
//   } else if (numberArr[index] % 15) {
//     $(".numbers").text("PING-PONG!");
//   }

  };



// user interface logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var number = parseInt ($("input#number").val());
    var result = count(number);
console.log(number);

    // if ("#number" === 0) {
    //   $("#result").text("Try again");
    // }
$("#result").append("<li>" + "/<li>");





console.log(number);

    //  $("#result").show();
  });
