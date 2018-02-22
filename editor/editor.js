var editor = document.querySelector('.ppj-editor');
editor.addEventListener('keydown', function(e) {
  if (e.keyCode == 83 && e.ctrlKey) {
    e.preventDefault();
    alert('Salvando!!');
  }
});