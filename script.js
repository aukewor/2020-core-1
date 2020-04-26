





var templateIndex = 0;
function template() {
  var x = document.getElementsByClassName ("template");
  for ( var i = 0; i < x.length; i++ ) {
    x[i].style.display = "none";
  }
  templateIndex++;
  if (templateIndex > x.length) {templateIndex = 1}
  x[templateIndex-1].style.display = "block";
  setTimeout(template,160);
}
