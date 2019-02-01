jQuery(document).ready(function(){

    "use strict";

    $(function(){
		$('#menu').slicknav({
			label:'',
		});
	});

    // $(window).scroll(function() {
	// 	var top = $(window).scrollTop();
	// 	if(top>=60){
    //         $("header").addClass("secondary-dark-blue-bg");
    //         document.getElementById("myLogo").style.width = "100px"
    //         document.getElementById("myLogo").style.height = "70px"
    //     }
	// 	else
	// 	if($("header").hasClass("secondary-dark-blue-bg")) {
	// 		$("header").removeClass("secondary-dark-blue-bg");
    //         document.getElementById("myLogo").style.width = "150px"
    //         document.getElementById("myLogo").style.height = "90px"       
    //     }
			
	// })

$('.animation').each(function(){

		var waypoint = new Waypoint({
		  element: this,
		  handler: function(direction) {
		    var animation = $(this.element).attr('data-animation');
		    $(this.element).css('opacity','1');
		    $(this.element).addClass("animated " + animation);
		  },
		  offset: '75%' 
		})
	});



});