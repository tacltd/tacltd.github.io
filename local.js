// TOGGLE MENU
function toggleMenu() {
  var home = $('.home.section-container '),
      about = $('.about.section-container '),
      yc = $('.yc.section-container '),
      invest = $('.invest.section-container '),
      contact = $('.contact.section-container a.contact');
  $('.contact.section-container a.contact').on('click', function() {
    $('.contact.section-container .menu').toggleClass('show');
  })
  
  
  $('div.content').on('click', function() {
    if ($('.contact.section-container .menu').hasClass('show')) {
      $('.contact.section-container .menu').removeClass('show');
    }
  })
}




// WINDOW ON LOAD
window.onload = function() {
  toggleMenu();
}
