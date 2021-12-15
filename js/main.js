// Smooth Scroll
$(document).ready(function(){
  // // Add smooth scrolling to all links
  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 800)
  })

   // Active link switching
   $(window).scroll(function() {
    var scrollbarlocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarlocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  })
});