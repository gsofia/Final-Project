var dataSign;
var currentModal;

// my variables: an array with the modals, incremental counters for modal index and current modal
var modals = $(".modal"); 
var modalIndex = 0;
var currentModalIndex = 0;

// on clicking of a word, show the modal 
$(".circle").on('click', function(){
  dataSign = $(this).attr('data-sign');
  // currentModal = $("#" + dataSign + "Modal");
  currentModalIndex = $("#" + dataSign + "Modal").attr("data-index");

  openModal($("#" + dataSign + "Modal"));
});

function openModal(element){
	element.animate({
	  	top: '0px',
	  	left: '0px',
	  	width: "100%",
	  	height: "100%"
 	}, function(){
  		element.find(".modalContent").animate({
  			opacity: "1"
  		});
  	});
}

function closeModal(element){
	element.animate({
	  	opacity: "0"
 	}, function(){
  		element.find(".modalContent").animate({
  			top: "50%",
  			left: "50%",
  			width: "0",
  			height: "0"
  		});
  	});
}

// on clicking of the close button, hide the modal
$(".modalClose").on("click", function(){
  // $("#" + dataSign + "Modal").removeClass("modalShow");
  closeModal($("#" + dataSign + "Modal"));
  // $("#" + dataSign + "Modal .modalContent").animate({
  // 	opacity: "0"
  // }, function(){
  // 	$("#" + dataSign + "Modal").animate({
  // 		top: '50%',
  // 		left: '50%',
  // 		width: "0",
  // 		height: "0"
  // 	});
  // });

  
  // closeModal("#" + dataSign + "Modal");
});


// function closeModal(el){
// 	$(el).animate({
// 		top: '50%',
// 		left: '50%',
// 		width: "0",
// 		height: "0"
// 		}, function(){
// 			$(el).find(".modalContent").animate({
// 				opacity: "0"
// 			});
// 		});
// }



// this is a function to find the value of the previous image 
function prevImage(){
	if (modalIndex === 0) {
		modalIndex = modals.length-1;
	} else {
		modalIndex--;
	}
}

// this is a function to find the value of the next image
function nextImage(){
	console.log(modalIndex);
	// hide prev modal
	$(modals[currentModalIndex]).find(".modalContent").animate({
		opacity: "0"
	}, function(){
		$(modals[currentModalIndex]).animate({
			top: '50%',
			left: '50%',
			width: "0",
			height: "0"
		}, function(){

				if (currentModalIndex === modals.length-1) {
					modalIndex = 0;
				} else {
					modalIndex++;
				}
				console.log(currentModalIndex,modalIndex);

				// show new modal
				openModal($(modals[modalIndex]));
				currentModalIndex = modalIndex;

		});

		

	});
	// $("#main-image").attr("src", modals[modalIndex]);
	//the text above returns the image path that is stored in the array
}

// on click next or prev find the next or prev image (using the functions created)
$(".next").on("click", nextImage);
$(".prev").on("click", prevImage);


