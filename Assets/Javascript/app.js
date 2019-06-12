$(document).ready(function () {
var topics =["pearl jam","smashing pumpkins","nirvana","NIN","red hot chilli peppers","janes adiction","REM","foo fighters"];
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=t9XaTz3Lmiu7wjZiGy52wwCquCAYtfF4";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

function renderButtons(){

}
}

// Function to handle events when button is clicked

//grab input from text box

//add gif from textbox to array

// call render btn to handle process of the gif array

//add click event listener

//call functions



