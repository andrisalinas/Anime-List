function calcM(){
	u = document.getElementById("kilograms").value;
	v = document.getElementById("grams").value;
	w = document.getElementById("milligrams").value;
	x = document.getElementById("tons").value;
	y = document.getElementById("ounces").value;
	z = document.getElementById("pounce").value;
document.getElementById("kilograms").value = w / 1000000;
document.getElementById("grams").value = w / 1000;
document.getElementById("tons").value = w / 1000000000;
document.getElementById("ounces").value = w * 3.5273961900000;
document.getElementById("pounce").value = w * 2.20462262000000;

}

function calcG(){
	u = document.getElementById("kilograms").value;
	v = document.getElementById("grams").value;
	w = document.getElementById("milligrams").value;
	x = document.getElementById("tons").value;
	y = document.getElementById("ounces").value;
	z = document.getElementById("pounce").value;
document.getElementById("kilograms").value = v * 1000;
document.getElementById("milligrams").value = v * 1000;
document.getElementById("tons").value = v / 1000000;
document.getElementById("ounces").value = v * 15.4323583529;
document.getElementById("pounce").value = v * 0.00220462262;

}

function calcK(){
	u = document.getElementById("kilograms").value;
	v = document.getElementById("grams").value;
	w = document.getElementById("milligrams").value;
	x = document.getElementById("tons").value;
	y = document.getElementById("ounces").value;
	z = document.getElementById("pounce").value;
document.getElementById("grams").value = u * 1000;
document.getElementById("milligrams").value = u * 1000000;
document.getElementById("tons").value = u / 1000;
document.getElementById("ounces").value = u * 35.2739619496;
document.getElementById("pounce").value = u * 2.20462262185;

}

function calcT(){
	u = document.getElementById("kilograms").value;
	v = document.getElementById("grams").value;
	w = document.getElementById("milligrams").value;
	x = document.getElementById("tons").value;
	y = document.getElementById("ounces").value;
	z = document.getElementById("pounce").value;
document.getElementById("grams").value = x * 1000000;
document.getElementById("milligrams").value = x * 1000000000;
document.getElementById("kilograms").value = x * 1000;
document.getElementById("ounces").value = x * 35273.9619496;
document.getElementById("pounce").value = x * 2204.62262185;

}

function calcO(){
	u = document.getElementById("kilograms").value;
	v = document.getElementById("grams").value;
	w = document.getElementById("milligrams").value;
	x = document.getElementById("tons").value;
	y = document.getElementById("ounces").value;
	z = document.getElementById("pounce").value;
document.getElementById("grams").value = y * 28.349523125;
document.getElementById("milligrams").value = y * 28349.523125;
document.getElementById("kilograms").value = y * 0.02834952312;
document.getElementById("tons").value = y * 2.8349523100000;
document.getElementById("pounce").value = y * 0.0625;

}

function calcP(){
	u = document.getElementById("kilograms").value;
	v = document.getElementById("grams").value;
	w = document.getElementById("milligrams").value;
	x = document.getElementById("tons").value;
	y = document.getElementById("ounces").value;
	z = document.getElementById("pounce").value;
document.getElementById("grams").value = z * 453.59237;
document.getElementById("milligrams").value = z * 453592.37;
document.getElementById("kilograms").value = z * 0.45359237;
document.getElementById("tons").value = z * 0.00045359237;
document.getElementById("ounces").value = z * 16;

}