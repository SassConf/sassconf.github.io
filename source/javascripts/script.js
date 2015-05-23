function toggle(id) {
  var e = document.getElementById(id);
  e.classList.toggle('is-active');
  console.log('toggle' + e);
}