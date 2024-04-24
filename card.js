let tcolorA = document.getElementsById('tcolorA'),
tcolorB = document.getElementsById('tcolorB'),
tcolorC = document.getElementsById('tcolorC'),
iconA = document.querySelector('.fa-credit-card'),
iconB = document.querySelector('.fa-building-columns'),
iconC = document.querySelector('.fa-wallet'),
cDetails = document.querySelector('.card-details');

function doFun(){
    tcolorA.style.color = "greenyellow";
    tcolorB.style.color = "#444";
    tcolorC.style.color = "#444";
    iconA.style.color = "greenyellow";
    iconB.style.color = "#aaa";
    iconC.style.color = "#aaa";
    cDetails.style.display = "block";
}
function doFunA(){
    tcolorA.style.color = "#444";
    tcolorB.style.color = "greenyellow";
    tcolorC.style.color = "#444";
    iconA.style.color = "#aaa";
    iconB.style.color = "greenyellow";
    iconC.style.color = "#aaa";
    cDetails.style.display = "none";
}
function doFunB(){
    tcolorA.style.color = "#444";
    tcolorB.style.color = "#444";
    tcolorC.style.color = "greenyellow";
    iconA.style.color = "#aaa";
    iconB.style.color = "#aaa";
    iconC.style.color = "greenyellow";
    cDetails.style.display = "none";
}
let cNumber = document.getElementById('number');

cNumber.addEventListener('keyup', function(e) {
    let num = cNumber.value;
    let newValue = '';
    
    num = num.replace(/\s/g, '');
    
    for (let i = 0; i < num.length; i++) {
        if (i % 4 === 0 && i > 0) {
            newValue = newValue.concat(' ');
        }
        newValue = newValue.concat(num[i]);
    }
    
    cNumber.value = newValue;
    
    let ccNum = document.getElementById('c-Number');
    if (num.length > 16) {
        ccNum.style.border = '1px solid red';
    } else {
        ccNum.style.border = '1px solid greenyellow';
    }
});
let eDate = document.getElementById('e-Date');

eDate.addEventListener('keyup', function(e) {
    let newInput = eDate.value;

    if (e.which !== 8) {
        var numChars = e.target.value.length;
        if (numChars == 2) {
            var thisVal = e.target.value;
            thisVal += '/';
            e.target.value = thisVal;
            console.log(thisVal.length);
        }
    }

    if (newInput.length > 5) {
        eDate.style.border = "1px solid red";
    } else {
        eDate.style.border = "1px solid greenyellow";
    }
});

let cvv = document.getElementById('cvv');

cvv.addEventListener('keyup', function(e) {
    let elen = cvv.value;
    let cvvBox = document.getElementById('cvvBox');
    
    if (elen.length > 3) {
        cvvBox.style.border = "1px solid red";
    } else {
        cvvBox.style.border = "1px solid greenyellow";
    }
});
