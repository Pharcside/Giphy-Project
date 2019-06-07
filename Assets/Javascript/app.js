
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=t9XaTz3Lmiu7wjZiGy52wwCquCAYtfF4";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

