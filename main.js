//Comedian Buttons
var comedians = ["Kevin Hart", "Micheal Scott", "Lil Duval", "Chris Rock", "Dave Chappelle", "Deray Davis", "Eddie Murphy", "Amy Schumer", "Ricky Gervais", "Dane Cook", "Will Ferrell", "Seth Rogan", "Adam Sandler", "Anna Feris"];


//Make a function to display the data (comedians name)
function displayComedians() {

    //Clear the old buttons before appending the new ones
    // $("#button-view").empty();

    //Loop thru old buttons...
    for (var i = 0; i < comedians.length; i++) {

        //Create a button for each loop in the array
        var a = $("<button>");
        //Giving the button a class..
        a.addClass("comedian");
        //
        a.attr("data-name", comedians[i]);
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
    displayComedians();

});


//call the function that displays the new button
displayComedians();
