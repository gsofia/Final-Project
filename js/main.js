var dataSign;

// on clicking of a word, show the modal 
$(".circle").on('click', function(){
  dataSign = $(this).attr('data-sign');
  $("#" + dataSign + "Modal").addClass("modalShow");
  $(".modal").animate({
  	top: '0px',
  	left: '0px',
  	width: "100%",
  	height: "100%" 
  	});

});

// on clicking of the close button, hide the modal
$(".modalClose").on("click", function(){
  $(".modal").removeClass("modalShow");
});

