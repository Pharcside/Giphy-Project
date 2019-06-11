
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
/*
// This function handles events where a movie button is clicked
$("#add-movie").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var movie = $("#movie-input").val().trim();

  // Adding movie from the textbox to our array
  movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".movie-btn", displayMovieInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons(); 
*/