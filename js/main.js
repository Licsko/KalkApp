var kulcs1 = 5;
var kulcs2 = 18;
var kulcs3 = 27;
var szaz = 100;
var haszonKulcs;
var arRes;
var afavalNovelt;

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
    afavalNovelt = beszerzesiAr * afaSzazalek;
    var eladasiAR = afavalNovelt * haszonKulcs;
    arRes = eladasiAR - afavalNovelt;

    return Number(eladasiAR.toFixed(0));
}

function tNyolcAFA() {
    var afaSzazalek = (szaz + kulcs2) / szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;
    afavalNovelt = beszerzesiAr * afaSzazalek;
    var eladasiAR = afavalNovelt * haszonKulcs;
    arRes = eladasiAR - afavalNovelt;

    return Number(eladasiAR.toFixed(0));
}
function hHetAFA() {
    var afaSzazalek = (szaz + kulcs3) / szaz;
    var beszerzesiAr = document.querySelector('.termek-ar').value;

    afavalNovelt = beszerzesiAr * afaSzazalek;
    var eladasiAR = afavalNovelt * haszonKulcs;
    arRes = eladasiAR - afavalNovelt;

    return Number(eladasiAR.toFixed(0));
}
function csakHaszon() {
    var beszerzesiAr = document.querySelector('.termek-ar').value;
    afavalNovelt = beszerzesiAr;
    var eladasiAR = afavalNovelt * haszonKulcs;
    arRes = eladasiAR - afavalNovelt;

    return Number(eladasiAR.toFixed(0));
}

//--------BEVITELI MEZŐ ÜRÍTÉSE-------
function clearInput() {
    var beszerzesiINPUT = document.querySelector('#termek-ar');
    beszerzesiINPUT.value = "";
}

var buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', function() {
        var numberInput = [String(otAFA()), String(arRes.toFixed(0))];
        var lastDigit = [numberInput[0].slice(numberInput[0].length - 1), numberInput[1].slice(numberInput[1].length - 1)];

        if (lastDigit[0] < 1) {
            lastDigit[0] = 0;
        } else if (lastDigit[0] > 0 && lastDigit[0] < 6) {
            lastDigit[0] = 5;
        } else {
            lastDigit[0] = 9;
        }
        if (lastDigit[1] < 1) {
            lastDigit[1] = 0;
        } else if (lastDigit[1] > 0 && lastDigit[1] < 6) {
            lastDigit[1] = 5;
        } else {
            lastDigit[1] = 9;
        }

        var number = [Number(numberInput[0].slice(0, numberInput[0].length - 1).concat(lastDigit[0])), Number(numberInput[1].slice(0, numberInput[1].length - 1).concat(lastDigit[1]))];

        if (lastDigit[0] == 9) {
            number[0] = number[0] + 1;
        }
        if (lastDigit[1] == 9) {
            number[1] = number[1] + 1;
        }

        eredmeny.innerHTML = isNaN(haszonKulcs) ? "<span class='error'>Válasszon haszonkulcsot!</span>" : "Eladási ár: <b>" + Number(number[0]) + ",-Ft</b><br><small>Árrés: <i>" + Number(number[0] - parseInt(afavalNovelt)) + ",-Ft</i></small>";
    });
    buttons[1].addEventListener('click', function() {
        var numberInput = [String(tNyolcAFA()), String(arRes.toFixed(0))];
        var lastDigit = [numberInput[0].slice(numberInput[0].length - 1), numberInput[1].slice(numberInput[1].length - 1)];

        if (lastDigit[0] < 1) {
            lastDigit[0] = 0;
        } else if (lastDigit[0] > 0 && lastDigit[0] < 6) {
            lastDigit[0] = 5;
        } else {
            lastDigit[0] = 9;
        }
        if (lastDigit[1] < 1) {
            lastDigit[1] = 0;
        } else if (lastDigit[1] > 0 && lastDigit[1] < 6) {
            lastDigit[1] = 5;
        } else {
            lastDigit[1] = 9;
        }

        var number = [Number(numberInput[0].slice(0, numberInput[0].length - 1).concat(lastDigit[0])), Number(numberInput[1].slice(0, numberInput[1].length - 1).concat(lastDigit[1]))];

        if (lastDigit[0] == 9) {
            number[0] = number[0] + 1;
        }
        if (lastDigit[1] == 9) {
            number[1] = number[1] + 1;
        }

        eredmeny.innerHTML = isNaN(haszonKulcs) ? "<span class='error'>Válasszon haszonkulcsot!</span>" : "Eladási ár: <b>" + Number(number[0]) + ",-Ft</b><br><small>Árrés: <i>" + Number(number[0] - parseInt(afavalNovelt)) + ",-Ft</i></small>";
    });
    buttons[2].addEventListener('click', function() {
        var numberInput = [String(hHetAFA()), String(arRes.toFixed(0))];
        var lastDigit = [numberInput[0].slice(numberInput[0].length - 1), numberInput[1].slice(numberInput[1].length - 1)];

        if (lastDigit[0] < 1) {
            lastDigit[0] = 0;
        } else if (lastDigit[0] > 0 && lastDigit[0] < 6) {
            lastDigit[0] = 5;
        } else {
            lastDigit[0] = 9;
        }
        if (lastDigit[1] < 1) {
            lastDigit[1] = 0;
        } else if (lastDigit[1] > 0 && lastDigit[1] < 6) {
            lastDigit[1] = 5;
        } else {
            lastDigit[1] = 9;
        }

        var number = [Number(numberInput[0].slice(0, numberInput[0].length - 1).concat(lastDigit[0])), Number(numberInput[1].slice(0, numberInput[1].length - 1).concat(lastDigit[1]))];

        if (lastDigit[0] == 9) {
            number[0] = number[0] + 1;
        }
        if (lastDigit[1] == 9) {
            number[1] = number[1] + 1;
        }

        eredmeny.innerHTML = isNaN(haszonKulcs) ? "<span class='error'>Válasszon haszonkulcsot!</span>" : "Eladási ár: <b>" + Number(number[0]) + ",-Ft</b><br><small>Árrés: <i>" + Number(number[0] - parseInt(afavalNovelt)) + ",-Ft</i></small>";
    });
    buttons[3].addEventListener('click', function() {
        var numberInput = [String(csakHaszon()), String(arRes.toFixed(0))];
        var lastDigit = [numberInput[0].slice(numberInput[0].length - 1), numberInput[1].slice(numberInput[1].length - 1)];

        if (lastDigit[0] < 1) {
            lastDigit[0] = 0;
        } else if (lastDigit[0] > 0 && lastDigit[0] < 6) {
            lastDigit[0] = 5;
        } else {
            lastDigit[0] = 9;
        }
        if (lastDigit[1] < 1) {
            lastDigit[1] = 0;
        } else if (lastDigit[1] > 0 && lastDigit[1] < 6) {
            lastDigit[1] = 5;
        } else {
            lastDigit[1] = 9;
        }

        var number = [Number(numberInput[0].slice(0, numberInput[0].length - 1).concat(lastDigit[0])), Number(numberInput[1].slice(0, numberInput[1].length - 1).concat(lastDigit[1]))];

        if (lastDigit[0] == 9) {
            number[0] = number[0] + 1;
        }
        if (lastDigit[1] == 9) {
            number[1] = number[1] + 1;
        }

        eredmeny.innerHTML = isNaN(haszonKulcs) ? "<span class='error'>Válasszon haszonkulcsot!</span>" : "Eladási ár: <b>" + Number(number[0]) + ",-Ft</b><br><small>Árrés: <i>" + Number(number[0] - parseInt(afavalNovelt)) + ",-Ft</i></small>";
    });

//isNaN(haszonKulcs) ? "<span class='error'>Válasszon haszonkulcsot!</span>" : "Eladási ár: <b>" + Number(eladasiAR.toFixed(0)) + ",-Ft</b><br><small>Árrés: <i>" + Number(arRes.toFixed(0)) + ",-Ft</i></small>";
