// requires wall.js

function get_distances() {
   overligger = document.getElementById("overligger").value;
   underligger = document.getElementById("underligger").value;
   vegg = document.getElementById("vegg").value;
   omlegg = document.getElementById("omlegg").value;
   
   overligger = parseInt(overligger, 10);
   underligger = parseInt(underligger, 10);
   vegg = parseInt(vegg, 10);
   omlegg = parseInt(omlegg, 10);

   var wall = new Wall(overligger, underligger, vegg, omlegg);
   liste = wall.calculate();
   omlegg = wall.getInndelingsOmlegg();
   omlegg = Math.round(omlegg);
   listeStreng = "Omlegg: " + omlegg + "mm";
   listeStreng += "<br>";
   for (i = 0; i < liste.length; i++) {
      a = Math.round(liste[i]); //*10)/10.0;
      listeStreng += "<br>" + a + " mm";
   }
   document.getElementById("numbers_output").innerHTML = listeStreng;

}
