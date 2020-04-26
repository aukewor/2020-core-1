





var houseIndex = 0;
function house() {
  var x = document.getElementsByClassName ("house");
  for ( var i = 0; i < x.length; i++ ) {
    x[i].style.display = "none";
  }
  houseIndex++;
  if (houseIndex > x.length) {houseIndex = 1}
  x[houseIndex-1].style.display = "block";
  setTimeout(house,160);
}
