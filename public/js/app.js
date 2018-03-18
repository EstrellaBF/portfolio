// $(document).ready(function() {

  // Evento para modificar el menú mientras se baja o sube el scroll
  window.onscroll = function() {
    // var scroll = window.scrollTop();
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll > 170) {
      console.log('supera a 170');
    } else {
      console.log('no 170');
    }
  };

  // ocultando la info del menu
  let hiddenContent = function() {
    // $('.me-box p').hide();
    $('#my-self').hide();
    $('#my-skills').hide();
    $('#tech-skills').hide();
    $('#my-projects').hide();
  }

  hiddenContent();

  let upWindow = function() {
    // var el = document.getElementsByTagName('body');
    var $el = ('body');
    $el.scrollTop = 0;
  }

  let goToMenu = function() {
    window.scrollTo(5, 0);
}

  $("a[id^=menu]").on('click', function() {
    let attr = $(this).attr("data-name")
    $('#'+ attr).show().append(
          `<div class="home-icon" >
            <i class="fas fa-home"></i>
           </div>`);
    $('#main-box').hide();
    $('.home-icon').on('click', function() {
      $('#main-box').show();
      hiddenContent();
      goToMenu();
      $('.home-icon').hide();
    });   
  })

  

  

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
  
// $('#contact-me img').on('click', function() {
//   window.location.href = 'https://www.linkedin.com/in/estrella-benites/';
// });
// });

