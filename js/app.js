$(document).ready(function () {
  var $menuHome = $('#menu-home-container');
  const arrIconsTech = [
    'jquery.png',
    'firebase.png',
    'js.png',
    'node.png',
    'git.png',
    'react.png',
    'redux.png',
    'sass.png',
    'gulp.png'
  ]

  // Creando un clon del menu justo alado del original
  $('#menu-home-container').addClass('original').clone().insertAfter('#menu-home-container').addClass('cloned')
    .css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();

  scrollIntervalID = setInterval(stickIt, 10);

  $('.original').find("a").css({
    "color": "#fff"
  });

  function stickIt() {
    var orgElementPos = $('.original').offset();

    orgElementTop = orgElementPos.top;
    // console.log(orgElementTop)  //700         

    if ($(window).scrollTop() >= (orgElementTop)) {
      // scrolled past the original position; now only show the cloned, sticky element.
      // Cloned element should always have same left position and width as original element.     
      orgElement = $('.original');
      coordsOrgElement = orgElement.offset();
      leftOrgElement = coordsOrgElement.left;

      widthOrgElement = orgElement.css('width');

      $('.cloned').css({'left': leftOrgElement + 'px', 'width': widthOrgElement,'top': 0, "box-shadow":"0px 0px 4px 1px rgba(0, 0, 0, 0.15)"})
      .show();
      $('.original').css('visibility', 'hidden');
    } else {
      // not scrolled past the menu; only show the original menu.
      $('.cloned').hide();
      $('.original').css('visibility', 'visible');
    }
  }
// 
  let upWindow = function () {
    // var el = document.getElementsByTagName('body');
    var $el = ('body');
    $el.scrollTop = 0;
  }

  let goToMenu = function () {
    window.scrollTo(5, 0);
  }

// Adding icons
  arrIconsTech.map(index =>
    $('#tech-skills-box').append(
      `<div class="icon-tech-skill">
          <img src="${'assets/images/' + index}"class="img-responsive">
        </div>`
    )
    // }
  );

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'js/particles.json', function () {
    // console.log('callback - particles.js config loaded');
  });

});

