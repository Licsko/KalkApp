var kulcs1 = 5;
var kulcs2 = 18;
var kulcs3 = 27;
var haszonEgyeb = 50;
var haszonTej = 45;
var szaz = 100;

var eredmeny = document.querySelector('.eladasi-ar-mezo');

function otAFA() {
    var afaSzazalek = (szaz + kulcs1)/szaz;
    var haszonkulcs = (szaz + haszonEgyeb)/szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;
    
    var afavalNovelt =beszerzesiAr*afaSzazalek;
    var eladasiAR = afavalNovelt*haszonkulcs;
    var arRes = eladasiAR - afavalNovelt;
    
return eredmeny.innerHTML= "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";
}

function tNyolcAFA() {
    var afaSzazalek = (szaz + kulcs2)/szaz;
    var haszonkulcs = (szaz + haszonEgyeb)/szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;
    
    var afavalNovelt =beszerzesiAr*afaSzazalek;
    var eladasiAR = afavalNovelt*haszonkulcs;
    var arRes = eladasiAR - afavalNovelt;
    
return eredmeny.innerHTML= "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";}

function hHetAFA() {
    var afaSzazalek = (szaz + kulcs3)/szaz;
    var haszonkulcs = (szaz + haszonEgyeb)/szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;
    
    var afavalNovelt =beszerzesiAr*afaSzazalek;
    var eladasiAR = afavalNovelt*haszonkulcs;
    var arRes = eladasiAR - afavalNovelt;
    
return eredmeny.innerHTML= "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";}


//--------TEJTERMÉK-------
function otAFATEJ() {
    var afaSzazalek = (szaz + kulcs1)/szaz;
    var haszonkulcs = (szaz + haszonTej)/szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;
    
    var afavalNovelt =beszerzesiAr*afaSzazalek;
    var eladasiAR = afavalNovelt*haszonkulcs;
    var arRes = eladasiAR - afavalNovelt;
    
return eredmeny.innerHTML= "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";}
 
function tNyolcAFATEJ() {
    var afaSzazalek = (szaz + kulcs2)/szaz;
    var haszonkulcs = (szaz + haszonTej)/szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;
    
    var afavalNovelt =beszerzesiAr*afaSzazalek;
    var eladasiAR = afavalNovelt*haszonkulcs;
    var arRes = eladasiAR - afavalNovelt;
    
return eredmeny.innerHTML= "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";}
 

function hHetAFATEJ() {
    var afaSzazalek = (szaz + kulcs3)/szaz;
    var haszonkulcs = (szaz + haszonTej)/szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;
    
    var afavalNovelt =beszerzesiAr*afaSzazalek;
    var eladasiAR = afavalNovelt*haszonkulcs;
    var arRes = eladasiAR - afavalNovelt;
    
return eredmeny.innerHTML= "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";}
 

function csakHaszon50() {
    var haszonkulcs = (szaz + haszonEgyeb)/szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;
    
    var afavalNovelt =beszerzesiAr;
    var eladasiAR = afavalNovelt*haszonkulcs;
    var arRes = eladasiAR - afavalNovelt;
    
return eredmeny.innerHTML= "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";
}
function csakHaszon45() {
    var haszonkulcs = (szaz + haszonTej)/szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;
    
    var afavalNovelt =beszerzesiAr;
    var eladasiAR = afavalNovelt*haszonkulcs;
    var arRes = eladasiAR - afavalNovelt;
    
return eredmeny.innerHTML= "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";
}