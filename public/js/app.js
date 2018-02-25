$(document).ready(function() {
  $menu = $('.menu');

  // Evento para modificar el menú mientras se baja o sube el scroll
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll > 80 && scroll< 179) {
      $menu.css('top', '12em');
    // } else if (scroll > 180) {
    //   $menu.css({'position': 'fixed'}); // arreglar
    } else {
      $menu.css('top', '0');
    }
  });

  // // Evento para los menú
  // $menu.on('click', 'h3', function(e) {
  //   console.log(e.target.innerHTML);
  //   if(e.target.innerHTML === '') {}
  // });

});
