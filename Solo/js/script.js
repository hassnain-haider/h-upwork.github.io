/*=============================
    Preloader
 ==============================*/
$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});
/*=============================
    Team
 ==============================*/
$(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
    },
  });
});
/*=============================
    Progress Bar
 ==============================*/
$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate({ width: $(this).attr("aria-valuenow") + "%" }, 1000);
      });
      this.destroy();
    },
    { offset: "bottom-in-view" }
  );
});
/*=============================
    Responsive Tabs
 ==============================*/
$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});
/*=============================
    Portfolio Filtering
 ==============================*/
$(window).on("load", function () {
  // Start Isotope
  $("#isotope-container").isotope({});
  // Filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    // Get filter value
    var filterValue = $(this).attr("data-filter");
    // Filter Portfolio
    $("#isotope-container").isotope({
      filter: filterValue,
    });
    //Active Button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
/*=============================
    Magnific Popup
 ==============================*/
$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", // child items selector by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
/*=============================
    Testimonials Slider
 ==============================*/
$(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});
/*=============================
    Stats
 ==============================*/
$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});
/*=============================
   CLients
 ==============================*/
$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});
/*=============================
   Google Map
 ==============================*/
$(window).on("load", function () {
  // Map Veriables
  var addressSting = "Walled City of Lahore, Lahore, Punjab";
  var myLating = { lat: -25.78596, lng: 28.08132 };
  // Render Google Map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLating,
  });
  // Add Marker
  var marker = new google.maps.Marker({
    position: myLating,
    map: map,
    title: "Click To See Address",
  });
  // Add Info Window
  var infowindow = new google.maps.InfoWindow({
    content: addressSting,
  });
  // Show info window when user click marker
  marker.addListner("click", function () {
    infowindow.open(map, marker);
  });
});
/*=============================
   Navigation
 ==============================*/
/* Show and hide white navigation */
$(function () {
  // show hide on page load
  showHideNav();
  $(window).scroll(function () {
    // show hide nav on window scroll
    showHideNav();
  });
  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      // Show white nav
      $("nav").addClass("white-nav-top");
      // Show dark logo
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
      //Show back to top button
      $("#back-to-top").fadeIn();
    } else {
      // Hide white nav
      $("nav").removeClass("white-nav-top");
      // Show white logo
      $(".navbar-brand img").attr("src", "img/logo/logo.png");
      //Hide back to top button
      $("#back-to-top").fadeOut();
    }
  }
});
// Smooth scrolling
$(function () {
  $("a.smooth-scroll").click(function (event) {
    // prevent default behaviour
    event.preventDefault();
    // get section id
    var sectionId = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(sectionId).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});
