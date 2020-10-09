function myFunction() {
  // var viewPortWidth = window.innerWidth

    var x = document.getElementById("myDIV");
    // var y = document.getElementsByClassName("bottom-section");

    // if (viewPortWidth < 990){
    //   y.style.display = "none";
    // } else {
    //   y.style.display = "block";
    // }

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }