$(document).ready(function(){
//Comedian Buttons
var comedians = ["Kevin Hart", "Micheal Scott", "Lil Duval", "The Rock", "Sinbad", "Deray Davis", "Eddie Murphy", "Richard Pryor", "Ricky Gervais", "Jonah Hill", "Will Ferrell", "Seth Rogan", "Adam Sandler", "Anna Feris"];

//Function for each button content
$(document).on("click","button", function() {
    
    //get value from the button..
    var comedian = $(this).attr("data-comedian");
    //URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    comedian + "&api_key=cTX1XUHM9bC87I9402kXdzN6NJybk1ct&limit=10";
    //AJAX request using the URL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    //Once the data comesback, get the response
    .then(function(response) {
        
        // console.log(queryURL);

        // console.log(response);
        //Store the data from the AJAX in results
        var results = response.data;

        //Loop through each comedian
        for (var i = 0; i < results.length; i++) {
            //creating a div tag 
            var comedianDiv = $("<div>");
            //create a p tag with results ratings
            var p = $("<p>").text("Rating: " + results[i].rating);
            //create image tag
            var comedianImage = $("<img>");
            //attribute image with property of resutls
            comedianImage.attr("src", results[i].images.fixed_height.url);

            //Append to div
            comedianDiv.append(p);
            comedianDiv.append(comedianImage);
            //Add the div to the page
            $("#gif-appear-here").prepend(comedianDiv);

        }
    });
});


//Make a function to display the data (comedians name)
function renderButtons() {

    //Clear the old buttons before appending the new ones
    $("#button-view").empty();

    //Loop thru old buttons...
    for (var i = 0; i < comedians.length; i++) {

        //Create a button for each loop in the array
        var a = $("<button>");
        //Giving the button a class..
        a.addClass("comedian");
        //data attribute
        a.attr("data-comedian", comedians[i]);
        //putting text on the button
        a.text(comedians[i]);
        //Putting the button on the page
        $("#button-view").append(a);
    }
}



//On Click...
$("#add-gif").on("click", function(event) {
    //Dont want the form to submit..
   
    event.preventDefault();
    
    //Get user input & trim their text
    var add = $("#gif-input").val().trim();

    //Add the user input to the array
    comedians.push(add);

    //call the function that displays the new button
    renderButtons();

});


//call the function that displays the new button
renderButtons();
});