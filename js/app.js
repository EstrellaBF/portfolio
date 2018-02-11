$(document).ready(function () {
  const $projects = $('#projects');
  let $modalTrigger = $('.modal-trigger');

  // menu mobile
  $('.button-collapse').sideNav();

  // Evento para la ventanas en el navegador
  $projects.find('#preview-sn').on('click', (e) => {
    console.log(e.target);
    window.open('https://estrellabf.github.io/social-network/', '', 'width=600,height=400,left=50,top=50,toolbar=yes');
    // <input type="button" value="Nueva ventana" onclick="javascript:window.open('http://norfipc.com/','','width=600,height=400,left=50,top=50,toolbar=yes');" />
  });

  $projects.find('#preview-fm').on('click', () => {
    window.open('https://estrellabf.github.io/foodmap/', '', 'width=600,height=400,left=50,top=50,toolbar=yes');
  });

  $projects.find('#preview-tc').on('click', () => {
    window.open('', '', 'width=600,height=400,left=50,top=50,toolbar=yes');
  });

  // activando modal con materilize
  $('#modal1').modal();

  // Recorriendo los menús en la vista mobile
  let menuMobile = (e) => {
    $.each($modalTrigger, (i, val) => {
      this.menuMobile();
      console.log(this);
      // // console.log(i); // posición: 0, 1, 2.3 => 0
      // console.log(val); // etiqueta completa => <a class="modal-trigger">About Me</a>
      // let linkMobileMenu = $modalTrigger.eq(i).text();
      // console.log(linkMobileMenu); // palabra contenida => About Me
      // // if($modalTrigger.val()==='About Me'){
      // // } else {
      // //   console.log('no');
      // // };
      
    });
    e.preventDefault();
  }


  // Evento
  $modalTrigger.on('click', menuMobile);

});
