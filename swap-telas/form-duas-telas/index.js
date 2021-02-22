const update = () => {
  switch (window.location.hash) {
    case '#cargos':
      document.querySelector('#t1').classList.add('oculto');
      document.querySelector('#t2').classList.remove('oculto');
      break;
    default :
      document.querySelector('#t1').classList.remove('oculto');
      document.querySelector('#t2').classList.add('oculto');
  }
};

window.addEventListener('popstate', update);
update();