$(function(){


/**
 * ================================
 * PRELOADER                     
 * ================================
 */
// makes sure the whole site is loaded
$(window).on('load', function() {
  // will first fade out the loading animation
  $("#loader").fadeOut();
  //then background color will fade out slowly
  $("#loader-wrapper").delay(200).fadeOut("slow");

});

/**
 * ================================
 * ANIMATION                    
 * ================================
 */

var wow = new WOW({ mobile: false });
       wow.init();


/**
 * ================================
 * nAVIGATION                   
 * ================================
 */


// Handle active menu item on click
$("#top-navigation-bar li").on("click", function () {
    $("#top-navigation-bar li.active").removeClass("active");
    $(this).addClass("active");
});

// Set active menu item based on current URL
var str = location.href.toLowerCase();
$("#top-navigation-bar li a").each(function () {
  if (str.indexOf(this.href.toLowerCase()) > -1) {
    $("#top-navigation-bar li.active").removeClass("active");
    $(this).parent("li").addClass("active");
  }
});

});
  // Auto-collapse mobile menu on click
  $('.navbar-nav>li>a').on('click', function(){
      if ($('.navbar-toggler').is(':visible')) {
          $('.navbar-collapse').collapse('hide');
      }
  });	
/**
* ================================
* SMOOTH SCROLL FOR ANCHOR LINKS
* ================================
*/
$('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (!target.length) return;

    e.preventDefault();

    var navHeight = $('.navbar-fixed-top').outerHeight() || 0;

    // allow Bootstrap collapse to finish first (IMPORTANT on mobile)
    setTimeout(function () {
        $('html, body').animate({
            scrollTop: target.offset().top - navHeight
        }, 600);
    }, 300);
});
/**
 * ================================
 * FULL SCREEN VIEW                    
 * ================================
 */


$(window).on("load resize", function(){
  $(".full-height").css("height",window.innerHeight);
  })


/**
 * ================================
 * GOOGLE MAPS                    
 * ================================
 */


map=new GMaps({
  div: '#map',
  lat: 23.790223,
  lng: 90.414036,
})

map.addMarker({
        lat: 23.790223,
        lng: 90.414036,
        title: 'GhuGhu',
        infoWindow: {
            content: '<span class="map-header">Ghu Ghu Headquarters</span><span class="map-address">Build-A/6, Mirpur 14 , Dhaka</span'
        }
    });


/**
 * ================================
 * CONTACT FORM                    
 * ================================
 */

$('#contact-form').validate({
	rules:{
		name:'required',
		email: 'required',
		message: 'required'
	},

	messages:{
		name:'Please enter your name',
		email:'Please enter a valid email',
		message: 'Please write down your messsage'
	},

    errorClass:"local-error",

	submitHandler: function(){     
    }
});


}); // end of $(function(){})



