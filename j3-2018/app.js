// console.log("good");

document.getElementById("submitBtn").addEventListener("click", calculate);

function calculate(event) {
  event.preventDefault();

  // console.log("test");
  var line = document.getElementById("input").value;
  var distance = line.split(" ");

  // console.log(distance);

  var distIndex = Array.from({ length: 4 }, (x, i) => i);

  for (i in distIndex) {
    distance[i] = parseInt(distance[i]);
    // console.log(distance);
  }

  //processing the data
  var cities = [0];

  for (i in distIndex) {
    cities.push(cities[i] + distance[i]);
  }

  // console.log(cities);

  var cityIndex = Array.from({ length: 5 }, (x, i) => i);

  for (i in cityIndex) {
    var calcDistance = [];

    for (j in cityIndex) {
      var x = cities[j] - cities[i];
      if (x < 0) {
        x = x * -1;
      }
      calcDistance.push(x);
    }
    console.log(calcDistance);

    var calcDistanceStr = calcDistance.join(" ");

    var div = document.getElementById("divID");

    div.innerHTML += calcDistanceStr += "<br/>";
  }
}
