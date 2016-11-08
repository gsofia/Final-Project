// on clicking of a word, show the modal 
$("#moreButton").on('click', function(){
  $(".modal").addClass("modalShow");
});

// on clicking of the close button, hide the modal
$(".modalClose").on("click", function(){
  $(".modal").removeClass("modalShow");
});

