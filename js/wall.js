
function Wall(overligger, underligger, vegg, omlegg) {
    var overligger = overligger;
    var underligger = underligger;
    var avstand = vegg;
    var minsteOmlegg = omlegg;

    var inndelingsOmlegg;

    var debug = false;

    this.toString = function() {
        var s =
            "overligger: " + overligger + "\n" +
            "underligger: " + underligger + "\n" +
            "avstand: " + avstand  + "\n" +
            "omlegg: " + inndelingsOmlegg + "\n";
        return s;
    }

    this.calculate = function() {
        var idealmodul = this.idealmodul(overligger, underligger, minsteOmlegg);
            if (debug) console.log("**idealmodul: " + idealmodul + ", ");
        var antallModuler = this.antallModuler(avstand, idealmodul);
        var inndelingsmodul = this.inndelingsmodul(avstand, antallModuler);
        inndelingsOmlegg = this.inndelingsomlegg(overligger, underligger, inndelingsmodul);
        if (debug) {
            console.log("idealmodul: " + idealmodul + ", ");
            console.log("antallModuler: " + antallModuler + ", ");
            console.log("inndelingsmodul: " + inndelingsmodul + ", ");
            console.log("inndelingsOmlegg: " + inndelingsOmlegg + ", ");
        }
        var liste = [antallModuler];
        //liste[0] = 0;
        for (i = 0; i < antallModuler; i++) {
            liste[i] = (i + 1)*inndelingsmodul;
        }
        if (debug) console.log(liste.toString());
        return liste;
    }

    this.idealmodul = function(overligger, underligger, omlegg) {
       if (debug) console.log(overligger, underligger, omlegg);
       return overligger + underligger - 2*omlegg;
    }

    this.antallModuler = function(avstand, idealmodul) {
       var resultat = avstand/idealmodul;
       if (debug) console.log("resultat: " + avstand);
       if (resultat - Math.floor(resultat) == 0) return floor(resultat);
       else {
           avrundet = Math.floor(resultat + 1);
           if (debug) console.log("antall idealmoduler som får plass " +
                   "på vegg-seksjonen: " + resultat + " rundet av til " + avrundet);
           return avrundet;
       }
    }

    this.inndelingsmodul = function(avstand, antallModuler) {
        return avstand/antallModuler;
    }

    this.inndelingsomlegg = function(overligger, underligger, inndelingsmodul) {
        var inndelingsomlegg = (overligger + underligger - inndelingsmodul)/2.0;
        return inndelingsomlegg;
    }

    this.getInndelingsOmlegg = function() {
        return inndelingsOmlegg;
    }
}
