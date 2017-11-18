$(function() {

    //not confirmed as functioning
    $(".devour-burger").on("click", function(e){
        var id = $(this).data("id");
        var devStatus = $(this).data("devour")
    });


    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})