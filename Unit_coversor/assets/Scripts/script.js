//function to convert celsius to fahrenheit
function temperature(){
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32

    document.getElementById("fahrenheit").value = f
}

//Function to convert KGs to Pounds
function weight(){
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2

    document.getElementById("pounds").value = p
}

//Function to convert Kms to Miles
function distance(){
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    
    document.getElementById("miles").value = m
}