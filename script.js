var slider = document.getElementById("slider-amount");
var output = document.getElementById("amount");
var inputbox = document.getElementById("value");
var slider1 = document.getElementById("slider-year");
var output1 = document.getElementById("year");
var inputbox1 = document.getElementById("year-length");



output.addEventListener = slider.value;

slider.oninput = function () {
    inputbox.value = this.value;
}

output1.addEventListener = slider1.value;

slider1.oninput = function () {
    inputbox1.value = this.value;
}


function calc() {
    var amount = parseInt(slider.value);
    var year = parseInt(slider1.value);


    if (amount > 0 & year > 0);
    document.getElementById("monthlycost").value = Math.round(((((belopp)*(0.0665))*år)+(belopp))/(år*12)+19); 
}

document.getElementById('slider-amount').onchange = function () {
    console.log("Hej1");
    calc();
};

document.getElementById('slider-år').onchange = function () {
    console.log("Hej11");
    calc();
};





slider.värde = function () {
    inputbox.value = this.value;

    calc();
}



slider1.värde = function () {
    inputbox.value = this.value;

    calc();
}





