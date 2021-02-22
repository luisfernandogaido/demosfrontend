const pesquisar = () => {
  const pars = new URLSearchParams({
    search: search.value,
  });
  history.pushState(null, null, '#' + pars.toString());
  pesquisa().then();
};

const pesquisa = async () => {
  const pars = new URLSearchParams({
    search: search.value,
  });
  const res = await fetch('pesquisa.php?' + pars.toString());
  const r = await res.json();
  if (pars.get('search') !== search.value) {
    return;
  }
  const ctn = document.querySelector('#resultado');
  ctn.innerHTML = '';
  r.forEach(p => {
    ctn.append(p, ' ');
  });
};

const enterPesquisa = ev => {
  if (ev.key === 'Enter') {
    ev.preventDefault();
    pesquisar();
  }
};

const update = () => {
  const pars = new URLSearchParams(location.hash.substr(1));
  search.value = pars.get('search');
  pesquisa().then();
};

const digitar = () => {
  clearTimeout(timer);
  timer = setTimeout(pesquisar, 5000);
};
let timer;

const search = document.querySelector('input[type=search]');
search.addEventListener('input', digitar);
search.addEventListener('keydown', enterPesquisa);
window.addEventListener('popstate', update);
update();

