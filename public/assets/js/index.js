$(document.body).on("click", ".devour", function () {
    var id = $(this).data("id");
    var devourStatusObj = {
        devoured: true
    };
    console.log(devourStatusObj);
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourStatusObj
    }).then(function(){
        location.reload();
    });
});

$("#order_btn").on("click", function(event){
    event.preventDefault();
    var newOrder = {
        burger_name: $("#type_burger_name").val().trim()
    };
    console.log(newOrder);
    $.ajax("/api/burgers", {
        type: "POST",
        data: newOrder
    }).then(function(){
        location.reload();
    });
});