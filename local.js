// TOGGLE MENU
function toggleMenu() {
  var home = $('.home.section-container '),
      about = $('.about.section-container '),
      yc = $('.yc.section-container '),
      invest = $('.invest.section-container '),
      contact = $('.contact.section-container a.contact');
  $('.contact.section-container a.contact').on('click', function() {
    $('.contact.section-container .menu').toggleClass('show');
    $('.contact.section-container').toggleClass('selected');
  })
  
  
  $('div.content').on('click', function() {
    if ($('.contact.section-container .menu').hasClass('show')) {
      $('.contact.section-container .menu').removeClass('show');
    }
  })
}




// WINDOW ON LOAD
window.onload = function() {
  monotoneBreather('.loader', 2000);
  removeLoader('.loader', 'no-opacity', 9000, 9400);
  setTimeout(function() {
    automatedText('.company-branding p', 1000, [''], 1000, '-break-', 800);
  }, 9750);
  toggleMenu();
}
