//Document ready
$(document).ready(function () {
    //Comedian Buttons
    var comedians = ["Katt Williams", "Micheal Scott", "Lil Duval", "Robin Williams", "Sinbad", "Jessimae Peluso", "Eddie Murphy", "Richard Pryor", "Chelsea Handler", "Jonah Hill", "Seth Rogan", "Tina Fey", "James Franco", "Kate Mckinnon"];

    //Function for each button content
    $(document).on("click", "button", function () {

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
            .then(function (response) {

    
                //Store the data from the AJAX in results
                var results = response.data;
                console.log(results);

                //Loop through each comedian
                for (var i = 0; i < results.length; i++) {
                    //creating a div tag 
                    var comedianDiv = $("<div>");
                    //create a p tag with results ratings
                    var p = $("<p>").text("Rating: " + results[i].rating);
                   
                    //Still URL
                    var still = results[i].images.fixed_height_still.url
                    //Animated URL
                    var animated = results[i].images.fixed_height.url
                    console.log(animated);
                    
                    //create image tag
                    var comedianImage = $("<img>").addClass("giphy").attr("data-still", still).attr("data-animated", animated).attr("data-state", "still");
                    //attribute image with property of resutls
                    comedianImage.attr("src", results[i].images.fixed_height_still.url);
                    
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

    //Pausing gifs
    $(document).on('click', '.giphy', function() {
    
    
        var state = $(this).attr("data-state");
        console.log("State = " + state);
        if(state === "still"){
            //animate
            $(this).attr('src', $(this).attr("data-animated"));
            $(this).attr('data-state', "animated");
        } else {
        //still
        $(this).attr('src', $(this).attr("data-still"));
        $(this).attr('data-state', "still");
        }
    
    });



    //On Click...
    $("#add-gif").on("click", function (event) {
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

