$(document).ready(function(){
  const $projects = $('#projects');

  $(".button-collapse").sideNav();

  // Evento para la ventanas en el navegador
  $projects.find('#preview-sn').on('click', (e) => {
    console.log(e.target);
    window.open('https://estrellabf.github.io/social-network/','','width=600,height=400,left=50,top=50,toolbar=yes');
    // <input type="button" value="Nueva ventana" onclick="javascript:window.open('http://norfipc.com/','','width=600,height=400,left=50,top=50,toolbar=yes');" />
  });

  $projects.find('#preview-fm').on('click', () => {
    window.open('https://estrellabf.github.io/foodmap/','','width=600,height=400,left=50,top=50,toolbar=yes');
  });

  $projects.find('#preview-tc').on('click', () => {
    window.open('','','width=600,height=400,left=50,top=50,toolbar=yes');
  });


  $('#modal1').modal();
});
