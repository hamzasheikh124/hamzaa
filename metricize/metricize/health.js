/**
 * get calculator button 
 */
let bmiBtn = document.querySelector('#bmi')
let calorierBtn = document.querySelector('#calorier')
let fatBtn = document.querySelector('#fat')
let bmrBtn = document.querySelector('#bmr')
let idealWeightBtn = document.querySelector('#idealWeight')
let paceBtn = document.querySelector('#pace')
let armyBtn = document.querySelector('#army')


/** 
 * get calculoator section 
**/
let fitness = document.querySelector('.fitness')

/**
 * get calculator
**/
let bmiCal = document.querySelector('.bmi-calculator')
let calorierCal = document.querySelector('.calorier-calculator')
let fatCal = document.querySelector('.fat-calculator')
let bmrCal = document.querySelector('.bmr-calculator')
let idealWeightCal = document.querySelector('.idealWeight-calculator')
let paceCal = document.querySelector('.pace-calculator')
let armyCal = document.querySelector('.army-calculator')


/**
 * calculator functions
 */
bmiBtn.addEventListener("click",function(){
    bmiCal.style.display = 'block'
    fitness.style.display = 'none'
})
calorierBtn.addEventListener("click",function(){
    calorierCal.style.display = 'block'
    fitness.style.display = 'none'
})
fatBtn.addEventListener("click",function(){
    fatCal.style.display = 'block'
    fitness.style.display = 'none'
})
bmrBtn.addEventListener("click",function(){
    bmrCal.style.display = 'block'
    fitness.style.display = 'none'
})
idealWeightBtn.addEventListener("click",function(){
    idealWeightCal.style.display = 'block'
    fitness.style.display = 'none'
})
paceBtn.addEventListener("click",function(){
    paceCal.style.display = 'block'
    fitness.style.display = 'none'
})
armyBtn.addEventListener("click",function(){
    armyCal.style.display = 'block'
    fitness.style.display = 'none'
})


function calculateBMI() {
    var height = document.getElementById('bmiheight').value;
    var weight = document.getElementById('bmiweight').value;

    if (height === "" || weight === "") {
        alert("Please enter both height and weight.");
        return;
    }

    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    var result = document.getElementById('bmiresult');
    result.innerHTML = "Your BMI is: " + bmi;

    if (bmi < 18.5) {
        result.innerHTML += "<br>You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        result.innerHTML += "<br>You have a normal weight.";
    } else if (bmi >= 25 && bmi < 30) {
        result.innerHTML += "<br>You are overweight.";
    } else {
        result.innerHTML += "<br>You are obese.";
    }
}
function calculateCalories() {
    var weight = document.getElementById('calorierweight').value;
    var height = document.getElementById('calorierheight').value;
    var age = document.getElementById('calorierage').value;
    var gender = document.getElementById('caloriergender').value;

    if (weight === "" || height === "" || age === "") {
        alert("Please enter all fields.");
        return;
    }

    var bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    var result = document.getElementById('calorieresult');
    result.innerHTML = "Your Basal Metabolic Rate (BMR) is: " + bmr.toFixed(2) + " calories per day.";
}
function calculateBodyFat() {
    var weight = document.getElementById('fatweight').value;
    var waist = document.getElementById('fatwaist').value;
    var hip = document.getElementById('fathip').value;

    if (weight === "" || waist === "" || hip === "") {
        alert("Please enter all fields.");
        return;
    }

    var bodyFat = calculateFormula(weight, waist, hip);

    var result = document.getElementById('fatresult');
    result.innerHTML = "Your body fat percentage is: " + bodyFat.toFixed(2) + "%.";
}

function calculateFormula(weight, waist, hip) {
    var waistToHipRatio = waist / hip;
    var bodyFat = (0.29288 * waistToHipRatio) - (0.0005 * Math.pow(waist, 2)) + (0.15845 * weight) - 5.76377;
    return bodyFat;
}
function calculateBMR() {
    var weight = document.getElementById('bmrweight').value;
    var height = document.getElementById('bmrheight').value;
    var age = document.getElementById('bmrage').value;
    var gender = document.getElementById('bmrgender').value;

    if (weight === "" || height === "" || age === "") {
        alert("Please enter all fields.");
        return;
    }

    var bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    var result = document.getElementById('bmrresult');
    result.innerHTML = "Your Basal Metabolic Rate (BMR) is: " + bmr.toFixed(2) + " calories per day.";
}
function calculateIdealWeight() {
    var height = document.getElementById('idealWeightheight').value;
    var gender = document.getElementById('idealWeightgender').value;

    if (height === "") {
        alert("Please enter your height.");
        return;
    }

    var idealWeight;
    if (gender === "male") {
        idealWeight = (height - 100) * 0.9;
    } else {
        idealWeight = (height - 100) * 0.85;
    }

    var result = document.getElementById('idealWeightresult');
    result.innerHTML = "Your ideal weight is: " + idealWeight.toFixed(2) + " kg.";
}
function calculatePace() {
    var distance = document.getElementById('pacedistance').value;
    var time = document.getElementById('pacetime').value;

    if (distance === "" || time === "") {
        alert("Please enter both distance and time.");
        return;
    }

    var pace = time / distance;
    var paceMinutes = Math.floor(pace);
    var paceSeconds = Math.round((pace - paceMinutes) * 60);

    var result = document.getElementById('paceresult');
    result.innerHTML = "Your pace is: " + paceMinutes + " minutes " + paceSeconds + " seconds per kilometer.";
}
function calculateBodyFat() {
    var weight = document.getElementById('armyweight').value;
    var waist = document.getElementById('armywaist').value;
    var neck = document.getElementById('armyneck').value;
    var gender = document.getElementById('armygender').value;

    if (weight === "" || waist === "" || neck === "") {
        alert("Please enter all fields.");
        return;
    }

    var bodyFatPercentage;
    if (gender === "male") {
        bodyFatPercentage = calculateMaleBodyFat(weight, waist, neck);
    } else {
        bodyFatPercentage = calculateFemaleBodyFat(weight, waist, neck);
    }

    var result = document.getElementById('armyresult');
    result.innerHTML = "Your body fat percentage is: " + bodyFatPercentage.toFixed(2) + "%.";
}

function calculateMaleBodyFat(weight, waist, neck) {
    var waistMeasurement = parseFloat(waist);
    var neckMeasurement = parseFloat(neck);
    var weightMeasurement = parseFloat(weight);
    var bodyFatPercentage = 86.010 * Math.log10(waistMeasurement - neckMeasurement) - 70.041 * Math.log10(weightMeasurement) + 36.76;
    return bodyFatPercentage;
}

function calculateFemaleBodyFat(weight, waist, neck) {
    var waistMeasurement = parseFloat(waist);
    var neckMeasurement = parseFloat(neck);
    var weightMeasurement = parseFloat(weight);
    var bodyFatPercentage = 163.205 * Math.log10(waistMeasurement + neckMeasurement - 58.097 * Math.log10(weightMeasurement)) - 97.684;
    return bodyFatPercentage;
}