$(function() {
  $(".change-status").on("click", function(event)
{
  var id = $(this).data("id");
  var newStatus = $(this).data("newstatus");

  var newStatusState = {
    status: newStatus
  };

  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newStatusState
  }).then(
    function() {
      console.log("changed status to", newStatus)
      ;
      location.reload();
    }
  );
});

$(".create-form").on("submit", function(event)
{
  event.preventDefault();

  var newBurger = {
    name: $("#bu").val().trim(),
    status: $("[name=status]:checked").val().trim()
  };

$.ajax("/api/burgers", {
  type: "POST",
  data: newBurger
}).then(
  function() {
    console.log("created new burger");
    location.reload();
  }
);
});
});