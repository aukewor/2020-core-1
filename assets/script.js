





var coffeeIndex = 0;
function coffee() {
  var x = document.getElementsByClassName ("coffee");
  for ( var i = 0; i < x.length; i++ ) {
    x[i].style.display = "none";
  }
  coffeeIndex++;
  if (coffeeIndex > x.length) {coffeeIndex = 1}
  x[coffeeIndex-1].style.display = "block";
  setTimeout(coffee,160);
}
