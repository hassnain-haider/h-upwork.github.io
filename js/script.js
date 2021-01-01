// Smooth scroll
$(function(){
  $("a.smooth-scroll").click(function(event){
     event.preventDefault();
     // get section id like #home, #about etc
     var section_id = $(this).attr("href");
     $("html, body").animate({
         scrollTop: $(section_id).offset().top
     }, 650);
  });
});