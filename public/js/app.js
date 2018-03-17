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
  let hidden = function() {
    $('.me-box p').hide();
    $('#my-self').hide();
    $('#my-skills').hide();
    $('#tech-skills').hide();
    $('#my-projects').hide();
  }
 
  hidden();

  // $('#portfolio').on('click', function() {
  //   $('#projects').show().append(
  //     `<div class="home-icon">
  //       <i class="fas fa-home"></i>
  //      </div>`
  //   );
  //   $('#main-box').hide();
  //   $('.home-icon').on('click', function() {
  //     $('#main-box').show();
  //     $('.home-icon').hide();
  //   });
  //   upWindow();
  // });

  // $('#skills').on('click', function() {
  //   $('#my-skills').show().append(
  //     `<div class="home-icon">
  //       <i class="fas fa-home"></i>
  //      </div>`
  //   );
  //   $('#tech-skills').show();
  //   $('#main-box').hide();
  //   $('.home-icon').on('click', function() {
  //     $('#main-box').show();
  //     $('.home-icon').hide();
  //   });
  //   upWindow();
  // });

  // $('#me').on('click', function() {
  //   $('#about-me').show();
  //   $('.my-info').append(
  //     `<div class="home-icon">
  //       <i class="fas fa-home"></i>
  //      </div>`
  //   );
  //   $('#main-box').hide();
  //   $('.home-icon').on('click', function() {
  //     $('#main-box').show();
  //     $('.home-icon').hide();
  //   });
  //   upWindow();
  // });

  let upWindow = function() {
    // var el = document.getElementsByTagName('body');
    var $el = ('body');
    $el.scrollTop = 0;
  }

  let goToMenu = function() {
    window.scrollTo(5, 0);
}

  $("a[id^=menu]").on('click', function(e) {
    // console.log($(this));
    // console.log($(this).attr('data-name'));
    // console.log($('#'+ $(this).attr("data-name")))
    let attr = $(this).attr("data-name")
    $('#'+ attr).show().append(
          `<div class="home-icon" >
            <i class="fas fa-home"></i>
           </div>`
        );
    // $('#home-icon').toggle;
    $('#main-box').hide();
    $('.home-icon').on('click', function() {
      console.log(this);
      $('#main-box').show();
      goToMenu();
      $('.home-icon').hide();
    });


   
  })


  hidden();
  // console.log($("section[id^=my]"))
  
  
  
// });

