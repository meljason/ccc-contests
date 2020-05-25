//selectors


//event listeners
document.getElementById("submitBtn").addEventListener("click", happiness);

//functions
function happiness(event) {

    event.preventDefault();

    //variables
    var s = document.getElementById("s").value;
    var m = document.getElementById("m").value;
    var l = document.getElementById("l").value;

     if ((s >= 0 && s <= 10) && (m >= 0 && m <= 10) && (l >= 0 && l <= 10)) {
        // console.log("good")
        var formula = (1 * s) + (2 * m) + (3 * l);
        console.log(formula);
        
        formula <= 10 ? alert("sad") : alert("happy");

     } else {
        alert("Numbers inputted should be positive integer less or equal to 10")
     }
}