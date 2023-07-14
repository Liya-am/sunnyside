function menuClicked() {
  var menuImg = document.getElementById('menu-img');
  var menuH = document.getElementById('hidden-menu');
  if (menuH.style.visibility === 'visible') {
    menuH.style.visibility = 'hidden';
    menuImg.style.transform = "rotate(0deg)";
  } else {
    menuH.style.visibility = 'visible';
    menuImg.style.transform = "rotate(90deg)";
  }
}
