const calcBtn = document.getElementById("calc");
const cardBtn = document.getElementById("priceCard__okButton");
const priceCard = document.getElementById("priceCard");
const totalprice = document.getElementById("totalprice");


calcBtn.addEventListener('click',clickCalcBtn() ) 

cardBtn.addEventListener("click", function(){
    priceCard.style.display = "none";
})

function clickCalcBtn() {
    return function () {
        const qualitiy = findRadioValue("qty");
        const colors = findRadioValue("antalFarver");
        const medium = findRadioValue("medium")
        console.log("q: " + qualitiy);
        console.log("c: " + colors);
        console.log("m: " + medium)
        if (qualitiy == undefined)
            alert("Udfyld kvaliti");
        else if (colors == undefined)
            alert("udfhyld farver");
        else if (medium == undefined)
            alert("udfyld medium")
        else { // checker om all mulighder er valgt får dem give en samlet price
            priceCard.style.display = "flex";
            totalprice.innerHTML = qualitiy * colors + medium + "kr";
        }
    };
}

function findRadioValue(name){
    const elements = document.getElementsByName(name)
    for(let x=0; x < elements.length; x++){
        if (elements[x].checked){
            return elements[x].value;
        }
    }
}

