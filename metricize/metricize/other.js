/**
 * get calculator button 
 */
let ageBtn = document.querySelector('#age')
let dateBtn = document.querySelector('#date')
let timeBtn = document.querySelector('#time')
let hourBtn = document.querySelector('#hour')
let dayBtn = document.querySelector('#day')
let ipBtn = document.querySelector('#ip')
let passwordBtn = document.querySelector('#Password')
let BandwidthBtn = document.querySelector('#Bandwidth')
let windBtn = document.querySelector('#wind')
let heatBtn = document.querySelector('#heat')
let dewBtn = document.querySelector('#dew')

/** 
 * get calculoator section 
**/
let date = document.querySelector('.date')
let internet = document.querySelector('.internet')
let wheather = document.querySelector('.wheather')

/**
 * get calculator
**/
let ageCal = document.querySelector('.age-calculator')
let dateCal = document.querySelector('.date-calculator')
let timeCal = document.querySelector('.time-calculator')
let hourCal = document.querySelector('.hour-calculator')
let dayCal = document.querySelector('.day-calculator')
let ipCal = document.querySelector('.ip-calculator')
let passwordCal = document.querySelector('.password-calculator')
let BandwidthCal = document.querySelector('.Bandwidth-calculator')
let windCal = document.querySelector('.wind-calculator')
let heatCal = document.querySelector('.heat-calculator')
let dewCal = document.querySelector('.dew-calculator')


/**
 * calculator functions
 */
ageBtn.addEventListener("click",function(){
    ageCal.style.display = 'block'
    date.style.display = 'none'
    internet.style.display = 'none'
    wheather.style.display = 'none'
})
dateBtn.addEventListener("click",function(){
    dateCal.style.display = 'block'
    date.style.display = 'none'
    internet.style.display = 'none'
    wheather.style.display = 'none'
})
timeBtn.addEventListener("click",function(){
    timeCal.style.display = 'block'
    date.style.display = 'none'
    internet.style.display = 'none'
    wheather.style.display = 'none'
})
hourBtn.addEventListener("click",function(){
    hourCal.style.display = 'block'
    date.style.display = 'none'
    internet.style.display = 'none'
    wheather.style.display = 'none'
})
dayBtn.addEventListener("click",function(){
    dayCal.style.display = 'block'
    date.style.display = 'none'
    internet.style.display = 'none'
    wheather.style.display = 'none'
})
ipBtn.addEventListener("click",function(){
    ipCal.style.display = 'block'
    date.style.display = 'none'
    internet.style.display = 'none'
    wheather.style.display = 'none'
})
passwordBtn.addEventListener("click",function(){
    passwordCal.style.display = 'block'
    date.style.display = 'none'
    internet.style.display = 'none'
    wheather.style.display = 'none'
})
BandwidthBtn.addEventListener("click",function(){
    BandwidthCal.style.display = 'block'
    date.style.display = 'none'
    internet.style.display = 'none'
    wheather.style.display = 'none'
})
windBtn.addEventListener("click",function(){
    windCal.style.display = 'block'
    date.style.display = 'none'
    internet.style.display = 'none'
    wheather.style.display = 'none'
})
heatBtn.addEventListener("click",function(){
    heatCal.style.display = 'block'
    date.style.display = 'none'
    internet.style.display = 'none'
    wheather.style.display = 'none'
})
dewBtn.addEventListener("click",function(){
    dewCal.style.display = 'block'
    date.style.display = 'none'
    internet.style.display = 'none'
    wheather.style.display = 'none'
})




function calculateAge() {
    var dob = document.getElementById("agedob").value;
    var dobDate = new Date(dob);
    var today = new Date();
    
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    
    document.getElementById("ageresult").innerHTML = "Your age is: " + age + " years.";
}
function calculateDifference() {
    var startDate = new Date(document.getElementById("startDate").value);
    var endDate = new Date(document.getElementById("endDate").value);

    var difference = endDate.getTime() - startDate.getTime();
    var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("dateresult").innerHTML = "The difference between the dates is: " + daysDifference + " days.";
}

function calculateTime() {
    var time1 = document.getElementById("time1").value;
    var time2 = document.getElementById("time2").value;
    var operation = document.getElementById("timeoperation").value;

    var [hours1, minutes1] = time1.split(":").map(Number);
    var [hours2, minutes2] = time2.split(":").map(Number);

    var totalMinutes1 = hours1 * 60 + minutes1;
    var totalMinutes2 = hours2 * 60 + minutes2;

    var resultMinutes;
    switch (operation) {
        case "add":
            resultMinutes = totalMinutes1 + totalMinutes2;
            break;
        case "subtract":
            resultMinutes = totalMinutes1 - totalMinutes2;
            break;
        case "multiply":
            resultMinutes = totalMinutes1 * totalMinutes2;
            break;
        case "divide":
            if (totalMinutes2 === 0) {
                document.getElementById("timeresult").innerHTML = "Cannot divide by zero!";
                return;
            }
            resultMinutes = totalMinutes1 / totalMinutes2;
            break;
        default:
            document.getElementById("timeresult").innerHTML = "Invalid operation!";
            return;
    }

    var hoursResult = Math.floor(resultMinutes / 60);
    var minutesResult = resultMinutes % 60;

    document.getElementById("timeresult").innerHTML = "Result: " + hoursResult + " hours " + minutesResult + " minutes.";
}
function calculateHours() {
    var hours1 = parseInt(document.getElementById("hours1").value);
    var minutes1 = parseInt(document.getElementById("minutes1").value);
    var hours2 = parseInt(document.getElementById("hours2").value);
    var minutes2 = parseInt(document.getElementById("minutes2").value);
    var operation = document.getElementById("houroperation").value;

    var totalMinutes1 = hours1 * 60 + minutes1;
    var totalMinutes2 = hours2 * 60 + minutes2;

    var resultMinutes;
    switch (operation) {
        case "add":
            resultMinutes = totalMinutes1 + totalMinutes2;
            break;
        case "subtract":
            resultMinutes = totalMinutes1 - totalMinutes2;
            break;
        case "multiply":
            resultMinutes = totalMinutes1 * totalMinutes2;
            break;
        case "divide":
            if (totalMinutes2 === 0) {
                document.getElementById("hourresult").innerHTML = "Cannot divide by zero!";
                return;
            }
            resultMinutes = totalMinutes1 / totalMinutes2;
            break;
        default:
            document.getElementById("hourresult").innerHTML = "Invalid operation!";
            return;
    }

    var hoursResult = Math.floor(resultMinutes / 60);
    var minutesResult = resultMinutes % 60;

    document.getElementById("hourresult").innerHTML = "Result: " + hoursResult + " hours " + minutesResult + " minutes.";
}
function calculateDays() {
    var startDate = new Date(document.getElementById("daystartDate").value);
    var endDate = new Date(document.getElementById("dayendDate").value);

    // Convert both dates to milliseconds
    var startDateMs = startDate.getTime();
    var endDateMs = endDate.getTime();

    // Calculate the difference in milliseconds
    var differenceMs = endDateMs - startDateMs;

    // Convert the difference in milliseconds to days
    var daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    document.getElementById("dayresult").innerHTML = "The difference between the dates is: " + daysDifference + " days.";
}
function calculateSubnet() {
    var ipAddress = document.getElementById("ipAddress").value;
    var prefixLength = parseInt(document.getElementById("ipprefixLength").value);

    // Regular expression to match IP address
    var ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;

    // Check if IP address is valid
    if (!ipRegex.test(ipAddress)) {
        document.getElementById("ipresult").innerHTML = "Invalid IP address!";
        return;
    }

    // Check if prefix length is valid
    if (prefixLength < 0 || prefixLength > 32 || isNaN(prefixLength)) {
        document.getElementById("ipresult").innerHTML = "Invalid prefix length!";
        return;
    }

    // Convert IP address to array of integers
    var ipOctets = ipAddress.split('.').map(Number);

    // Calculate subnet mask
    var subnetMask = [];
    for (var i = 0; i < 4; i++) {
        if (prefixLength >= 8) {
            subnetMask.push(255);
            prefixLength -= 8;
        } else {
            subnetMask.push(256 - Math.pow(2, 8 - prefixLength));
            prefixLength = 0;
        }
    }

    // Calculate network address
    var networkAddress = ipOctets.map(function (octet, index) {
        return octet & subnetMask[index];
    });

    // Calculate broadcast address
    var broadcastAddress = networkAddress.slice();
    for (var i = prefixLength; i < 32; i++) {
        broadcastAddress[Math.floor(i / 8)] |= 1 << (7 - i % 8);
    }

    // Calculate number of hosts
    var numberOfHosts = Math.pow(2, 32 - prefixLength) - 2;

    // Format results
    var network = networkAddress.join('.');
    var broadcast = broadcastAddress.join('.');
    var subnetMaskString = subnetMask.join('.');

    // Display results
    document.getElementById("ipresult").innerHTML = `
        Network Address: ${network}<br>
        Broadcast Address: ${broadcast}<br>
        Subnet Mask: ${subnetMaskString}<br>
        Number of Hosts: ${numberOfHosts}
    `;
}
function generatePassword() {
    var length = document.getElementById("plength").value;
    var includeUppercase = document.getElementById("puppercase").checked;
    var includeLowercase = document.getElementById("plowercase").checked;
    var includeNumbers = document.getElementById("pnumbers").checked;
    var includeSymbols = document.getElementById("psymbols").checked;

    var charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()-_=+[]{};:,.<>?";

    var password = "";
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById("passwordresult").innerHTML = "Generated Password: " + password;
}
function calculatetime() {
    var fileSizeMB = parseFloat(document.getElementById("bfileSize").value);
    var speedMbps = parseFloat(document.getElementById("bspeed").value);

    // Check if inputs are valid
    if (isNaN(fileSizeMB) || fileSizeMB <= 0 || isNaN(speedMbps) || speedMbps <= 0) {
        document.getElementById("bresult").innerHTML = "Invalid input!";
        return;
    }

    // Convert file size to bits and internet speed to bits per second
    var fileSizeBits = fileSizeMB * 8 * 1024 * 1024; // 1 MB = 8 * 1024 * 1024 bits
    var speedBitsPerSecond = speedMbps * 1024 * 1024; // 1 Mbps = 1024 * 1024 bits per second

    // Calculate time in seconds
    var timeSeconds = fileSizeBits / speedBitsPerSecond;

    // Convert time to hours, minutes, and seconds
    var hours = Math.floor(timeSeconds / 3600);
    timeSeconds %= 3600;
    var minutes = Math.floor(timeSeconds / 60);
    var seconds = Math.round(timeSeconds % 60);

    // Format time
    var timeString = "";
    if (hours > 0) {
        timeString += hours + " hours ";
    }
    if (minutes > 0) {
        timeString += minutes + " minutes ";
    }
    timeString += seconds + " seconds";

    // Display result
    document.getElementById("bresult").innerHTML = "Time to download: " + timeString;
}
function calculateWindChill() {
    var temperature = parseFloat(document.getElementById("windtemperature").value);
    var windSpeed = parseFloat(document.getElementById("windSpeed").value);

    // Check if inputs are valid
    if (isNaN(temperature) || isNaN(windSpeed)) {
        document.getElementById("windresult").innerHTML = "Please enter valid numbers!";
        return;
    }

    // Calculate wind chill using the formula
    var windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);

    // Display result
    document.getElementById("windresult").innerHTML = "Wind Chill: " + windChill.toFixed(2) + " °C";
}
function calculateHeatIndex() {
    var temperatureF = parseFloat(document.getElementById("heattemperature").value);
    var humidity = parseFloat(document.getElementById("heathumidity").value);

    // Check if inputs are valid
    if (isNaN(temperatureF) || isNaN(humidity)) {
        document.getElementById("heatresult").innerHTML = "Please enter valid numbers!";
        return;
    }

    // Check if temperature is within the valid range
    if (temperatureF < 80 || temperatureF > 120) {
        document.getElementById("heatresult").innerHTML = "Temperature must be between 80°F and 120°F!";
        return;
    }

    // Check if humidity is within the valid range
    if (humidity < 0 || humidity > 100) {
        document.getElementById("heatresult").innerHTML = "Humidity must be between 0% and 100%!";
        return;
    }

    // Calculate heat index using the formula
    var heatIndex = -42.379 + 2.04901523 * temperatureF + 10.14333127 * humidity
        - 0.22475541 * temperatureF * humidity - 6.83783e-3 * temperatureF * temperatureF
        - 5.481717e-2 * humidity * humidity + 1.22874e-3 * temperatureF * temperatureF * humidity
        + 8.5282e-4 * temperatureF * humidity * humidity - 1.99e-6 * temperatureF * temperatureF * humidity * humidity;

    // Round the heat index to two decimal places
    heatIndex = Math.round(heatIndex * 100) / 100;

    // Display result
    document.getElementById("heatresult").innerHTML = "Heat Index: " + heatIndex + " °F";
}
function calculateDewPoint() {
    var temperatureC = parseFloat(document.getElementById("dewtemperature").value);
    var humidity = parseFloat(document.getElementById("dewhumidity").value);

    // Check if inputs are valid
    if (isNaN(temperatureC) || isNaN(humidity)) {
        document.getElementById("dewresult").innerHTML = "Please enter valid numbers!";
        return;
    }

    // Check if temperature is within the valid range
    if (temperatureC < -80 || temperatureC > 50) {
        document.getElementById("dewresult").innerHTML = "Temperature must be between -80°C and 50°C!";
        return;
    }

    // Check if humidity is within the valid range
    if (humidity < 0 || humidity > 100) {
        document.getElementById("dewresult").innerHTML = "Humidity must be between 0% and 100%!";
        return;
    }

    // Calculate saturation vapor pressure (in hPa)
    var saturationVaporPressure = 6.112 * Math.exp(17.67 * temperatureC / (temperatureC + 243.5));

    // Calculate actual vapor pressure (in hPa)
    var actualVaporPressure = (humidity / 100) * saturationVaporPressure;

    // Calculate dew point temperature (in °C)
    var dewPoint = (243.5 * Math.log(actualVaporPressure / 6.112)) / (17.67 - Math.log(actualVaporPressure / 6.112));

    // Round the dew point to two decimal places
    dewPoint = Math.round(dewPoint * 100) / 100;

    // Display result
    document.getElementById("dewresult").innerHTML = "Dew Point: " + dewPoint + " °C";
}



let privacy = document.querySelector('#privacy').addEventListener('click',function(){
    document.querySelector('.privacy').style.display = 'block'
    date.style.display = 'none'
    internet.style.display = 'none'
    wheather.style.display = 'none'
})