var kulcs1 = 5;
var kulcs2 = 18;
var kulcs3 = 27;
var szaz = 100;
var haszonKulcs;

var eredmeny = document.querySelector('.eladasi-ar-mezo');

//--------KULCS KIVÁLASZTÁSA-------
function smallerMarkup() {
    var select1 = document.querySelector('#mark-up45').valueOf();
    if (select1.checked) {
        haszonKulcs = 1.45;
    }
}
function biggerMarkup() {
    var select2 = document.querySelector('#mark-up50').valueOf();
    if (select2.checked) {
        haszonKulcs = 1.50;
    }
}

//--------EGYÉB ÁRU-------
function otAFA() {
    var afaSzazalek = (szaz + kulcs1) / szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;

    var afavalNovelt = beszerzesiAr * afaSzazalek;
    var eladasiAR = afavalNovelt * haszonKulcs;
    var arRes = eladasiAR - afavalNovelt;

    return eredmeny.innerHTML = isNaN(haszonKulcs) ? "<span class='error'>Válasszon haszonkulcsot!</span>" : "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";
}

function tNyolcAFA() {
    var afaSzazalek = (szaz + kulcs2) / szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;

    var afavalNovelt = beszerzesiAr * afaSzazalek;
    var eladasiAR = afavalNovelt * haszonKulcs;
    var arRes = eladasiAR - afavalNovelt;

    return eredmeny.innerHTML = isNaN(haszonKulcs) ? "<span class='error'>Válasszon haszonkulcsot!</span>" : "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";
}
function hHetAFA() {
    var afaSzazalek = (szaz + kulcs3) / szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;

    var afavalNovelt = beszerzesiAr * afaSzazalek;
    var eladasiAR = afavalNovelt * haszonKulcs;
    var arRes = eladasiAR - afavalNovelt;

    return eredmeny.innerHTML = isNaN(haszonKulcs) ? "<span class='error'>Válasszon haszonkulcsot!</span>" : "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";
}
function csakHaszon() {
    var beszerzesiAr = document.querySelector('.termek-ar').value;

    var afavalNovelt = beszerzesiAr;
    var eladasiAR = afavalNovelt * haszonKulcs;
    var arRes = eladasiAR - afavalNovelt;

    return eredmeny.innerHTML = isNaN(haszonKulcs) ? "<span class='error'>Válasszon haszonkulcsot!</span>" : "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";
}

//--------BEVITELI MEZŐ ÜRÍTÉSE-------
function clearInput() {
    var beszerzesiINPUT = document.querySelector('#termek-ar');
    beszerzesiINPUT.value = "";
}