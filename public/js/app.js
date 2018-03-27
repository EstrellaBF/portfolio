$(document).ready(function () {
  var $menuHome = $('#menu-home-container');
  const arrIconsTech = [
    'bootstrap.png',
    'materialize.png',
    'jquery.png',
    'firebase.png',
    'css3.png',
    'html5.png',
    'javascript.png',
    'nodejs.png',
    'git.png',
    'react.png'
  ]



// Creando un clon del menu justo alado del original
$('#menu-home-container').addClass('original').clone().insertAfter('#menu-home-container').addClass('cloned')
.css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}








  //   $('.cloned').hide();
  //   $('.original').hide();
  // // $menuHome.hide();
  // // $menuHome.css('visibility', 'hidden');

  // // Evento para modificar el menú mientras se baja o sube el scroll
  // window.onscroll = function () {
  //   // var scroll = window.scrollTop();
  //   var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  //   console.log(scroll);
  //   if (scroll > 770) {
  //     console.log('supera a 770');
  //     $('.original').show();
  //     // $menuHome.hide();
  //   } else {
  //     console.log('no supera');
  //   $('.original').hide();
  //     // $menuHome.hide();
  //   }
  // };

  // // ocultando la info del menu
  // let hiddenContent = function () {
  //   // $('.me-box p').hide();
  //   $('#my-self').hide();
  //   $('#my-skills').hide();
  //   $('#tech-skills').hide();
  //   $('#my-projects').hide();
  // }

  // hiddenContent();

  let upWindow = function () {
    // var el = document.getElementsByTagName('body');
    var $el = ('body');
    $el.scrollTop = 0;
  }

  let goToMenu = function () {
    window.scrollTo(5, 0);
  }

  // $("a[id^=menu]").on('click', function () {
  //   let attr = $(this).attr("data-name")
  //   $('#' + attr).show().prepend(
  //     `<div class="menu-home" >
  //         <a href="#main-box">home</a>
  //         <a href="#my-projects">Portafolio</a>
  //         <a href="#my-skills">Habilidades</a>
  //         <a href="#my-self">Conóceme</a>
  //         <a href="#my-contact-info">Contáctame</a>
  //       </div>`);
    // $('#main-box').hide();
    // $('.home-icon').on('click', function () {
    //   $('#main-box').show();
    //   hiddenContent();
    //   goToMenu();
    //   $('.home-icon').hide();
    // });
  // });

  
    arrIconsTech.map(index => 
      $('#tech-skills-box').append(
        `<div class="icon-tech-skill">
          <img src="${'assets/images/' +index}"class="img-responsive">
        </div>`
      )
      // }
  );

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'js/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });

  // $('#contact-me img').on('click', function() {
  //   window.location.href = 'https://www.linkedin.com/in/estrella-benites/';
  // });
});

