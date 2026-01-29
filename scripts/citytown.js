function openTown(townName) {
  var i;
  var x = document.getElementsByClassName("town");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(townName).style.display = "block";
}