// console.log("good");

document.getElementById("submitBtn").addEventListener("click", calculate);

function calculate(event) {
  event.preventDefault();

  // console.log("test")

  //getting input values
  var total = document.getElementById("total").value;
  var yesterday = document.getElementById("yesterday").value;
  var today = document.getElementById("today").value;

  // console.log(total)
  // console.log(yesterday)
  // console.log(today)

  //check if the input 2 & 3 are less than the parking total space
  if (yesterday.length <= total && today.length <= total) {
    var arrayYesterday = yesterday.split("");
    console.log(arrayYesterday);

    var arrayToday = today.split("");
    console.log(arrayToday);

    var count = 0;

    //get the range() in Total
    var rangeTotal = Array.from({ length: total }, (x, i) => i);

    //check if i in rangeTotal is equal to C
    for (i in rangeTotal) {
      if (arrayYesterday[i] == "C" && arrayToday[i] == "C") {
        count += 1;
      }
    }

    alert(count);
  } else {
    alert(
      "Yesterday's input and today's input should be less or equal to " + total
    );
  }
}
