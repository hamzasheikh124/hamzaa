/**
 * get calculator button 
 */
let fractionBtn = document.querySelector('#fraction')
let percentageBtn = document.querySelector('#percentage')
let rnumberBtn = document.querySelector('#rnumber')
let matrixBtn = document.querySelector('#matrix')
let ratioBtn = document.querySelector('#ratio')
let factorBtn = document.querySelector('#factor')
let daviationBtn = document.querySelector('#daviation')
let sequenceBtn = document.querySelector('#sequence')
let samplesizeBtn = document.querySelector('#samplesize')
let statisticsBtn = document.querySelector('#statistics')
let triangleBtn = document.querySelector('#triangle')
let volumeBtn = document.querySelector('#volume')
let areaBtn = document.querySelector('#area')
let distanceBtn = document.querySelector('#distance')

/** 
 * get calculoator section 
**/
let maths = document.querySelector('.maths')
let statistics = document.querySelector('.statistics')
let geometry = document.querySelector('.geometry')

/**
 * get calculator
**/
let fractionCal = document.querySelector('.fraction-calculator')
let percentageCal = document.querySelector('.percentage-calculator')
let rnumberCal = document.querySelector('.rnumber-calculator')
let matrixCal = document.querySelector('.matrix-calculator')
let ratioCal = document.querySelector('.ratio-calculator')
let factorCal = document.querySelector('.factor-calculator')
let daviationCal = document.querySelector('.deviation-calculator')
let sequenceCal = document.querySelector('.sequence-calculator')
let samplesizeCal = document.querySelector('.samplesize-calculator')
let statisticsCal = document.querySelector('.statistics-calculator')
let triangleCal = document.querySelector('.triangle-calculator')
let volumeCal = document.querySelector('.volume-calculator')
let areaCal = document.querySelector('.area-calculator')
let distanceCal = document.querySelector('.distance-calculator')


/**
 * calculator functions
 */
fractionBtn.addEventListener("click",function(){
    fractionCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
percentageBtn.addEventListener("click",function(){
    percentageCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
rnumberBtn.addEventListener("click",function(){
    rnumberCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
matrixBtn.addEventListener("click",function(){
    matrixCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
ratioBtn.addEventListener("click",function(){
    ratioCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
factorBtn.addEventListener("click",function(){
    factorCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
daviationBtn.addEventListener("click",function(){
    daviationCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
sequenceBtn.addEventListener("click",function(){
    sequenceCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
samplesizeBtn.addEventListener("click",function(){
    samplesizeCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
statisticsBtn.addEventListener("click",function(){
    statisticsCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
triangleBtn.addEventListener("click",function(){
    triangleCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
volumeBtn.addEventListener("click",function(){
    volumeCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
areaBtn.addEventListener("click",function(){
    areaCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})
distanceBtn.addEventListener("click",function(){
    distanceCal.style.display = 'block'
    maths.style.display = 'none'
    statistics.style.display = 'none'
    geometry.style.display = 'none'
})


function fraction() {
    var num1 = parseInt(document.getElementById('numerator1').value);
    var denom1 = parseInt(document.getElementById('denominator1').value);
    var num2 = parseInt(document.getElementById('numerator2').value);
    var denom2 = parseInt(document.getElementById('denominator2').value);

    var resultNum = (num1 * denom2) + (num2 * denom1);
    var resultDenom = denom1 * denom2;
    var gcd = function gcd(a, b) {
      return b ? gcd(b, a % b) : a;
    };
    var common = gcd(resultNum, resultDenom);

    document.getElementById('fractionresult').value = (resultNum / common) + '/' + (resultDenom / common);
  }

  function calculatePercentage() {
    var total = parseFloat(document.getElementById('ptotal').value);
    var percent = parseFloat(document.getElementById('percent').value);

    if (!isNaN(total) && !isNaN(percent)) {
        var result = (total * percent) / 100;
        document.getElementById('percentageresult').innerText = "Result: " + result.toFixed(2);
    } else {
        document.getElementById('percentageresult').innerText = "Please enter valid numbers.";
    }
}
function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  document.getElementById('rnumberresult').innerText = "Random Number: " + randomNumber;
}
function addMatrices() {
  var rows1 = parseInt(document.getElementById('rows1').value);
  var cols1 = parseInt(document.getElementById('cols1').value);
  var rows2 = parseInt(document.getElementById('rows2').value);
  var cols2 = parseInt(document.getElementById('cols2').value);

  if (rows1 === rows2 && cols1 === cols2) {
      var result = "Result:<br>";
      for (var i = 0; i < rows1; i++) {
          for (var j = 0; j < cols1; j++) {
              var value1 = parseInt(prompt("Enter value for matrix 1[" + (i + 1) + "][" + (j + 1) + "]"));
              var value2 = parseInt(prompt("Enter value for matrix 2[" + (i + 1) + "][" + (j + 1) + "]"));
              result += (value1 + value2) + " ";
          }
          result += "<br>";
      }
      document.getElementById('matrixresult').innerHTML = result;
  } else {
      document.getElementById('matrixresult').innerText = "Matrices should have the same dimensions for addition.";
  }
}

function multiplyMatrices() {
  var cols1 = parseInt(document.getElementById('cols1').value);
  var rows2 = parseInt(document.getElementById('rows2').value);

  if (cols1 === rows2) {
      var result = "Result:<br>";
      var rows1 = parseInt(document.getElementById('rows1').value);
      var cols2 = parseInt(document.getElementById('cols2').value);
      var matrix1 = [];
      var matrix2 = [];

      for (var i = 0; i < rows1; i++) {
          matrix1[i] = [];
          for (var j = 0; j < cols1; j++) {
              matrix1[i][j] = parseInt(prompt("Enter value for matrix 1[" + (i + 1) + "][" + (j + 1) + "]"));
          }
      }

      for (var i = 0; i < rows2; i++) {
          matrix2[i] = [];
          for (var j = 0; j < cols2; j++) {
              matrix2[i][j] = parseInt(prompt("Enter value for matrix 2[" + (i + 1) + "][" + (j + 1) + "]"));
          }
      }

      for (var i = 0; i < rows1; i++) {
          for (var j = 0; j < cols2; j++) {
              var sum = 0;
              for (var k = 0; k < cols1; k++) {
                  sum += matrix1[i][k] * matrix2[k][j];
              }
              result += sum + " ";
          }
          result += "<br>";
      }
      document.getElementById('matrixresult').innerHTML = result;
  } else {
      document.getElementById('matrixresult').innerText = "Number of columns of Matrix 1 should be equal to number of rows of Matrix 2 for multiplication.";
  }
}
function calculateRatio() {
  var value1 = parseFloat(document.getElementById('value1').value);
  var value2 = parseFloat(document.getElementById('value2').value);

  if (!isNaN(value1) && !isNaN(value2)) {
      var gcd = findGCD(value1, value2);
      var ratio = (value1 / gcd) + ":" + (value2 / gcd);
      document.getElementById('ratioresult').innerText = "Ratio: " + ratio;
  } else {
      document.getElementById('ratioresult').innerText = "Please enter valid numbers.";
  }
}

function findGCD(x, y) {
  while (y) {
      var t = y;
      y = x % y;
      x = t;
  }
  return x;
}
function calculateFactors() {
  var number = parseInt(document.getElementById('factornumber').value);
  var factors = [];

  if (!isNaN(number) && number > 0) {
      for (var i = 1; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
              factors.push(i);
              if (number / i !== i) {
                  factors.push(number / i);
              }
          }
      }
      factors.sort(function(a, b){return a - b});
      document.getElementById('factorresult').innerText = "Factors: " + factors.join(', ');
  } else {
      document.getElementById('factorresult').innerText = "Please enter a valid positive integer.";
  }
}
function calculateStandardDeviation() {
  var numbersInput = document.getElementById('daviationnumbers').value;
  var numbers = numbersInput.split(',').map(function(item) {
      return parseFloat(item.trim());
  });

  var n = numbers.length;
  var mean = numbers.reduce(function(a, b) { return a + b; }) / n;
  var deviations = numbers.map(function(x) { return Math.pow(x - mean, 2); });
  var variance = deviations.reduce(function(a, b) { return a + b; }) / n;
  var standardDeviation = Math.sqrt(variance);

  document.getElementById('daviationresult').innerText = "Standard Deviation: " + standardDeviation.toFixed(2);
}

function generateSequence() {
  var sequenceType = document.getElementById('sequenceType').value;
  var initialTerm = parseFloat(document.getElementById('initialTerm').value);
  var commonDifferenceRatio = parseFloat(document.getElementById('commonDifferenceRatio').value);
  var numberOfTerms = parseInt(document.getElementById('numberOfTerms').value);

  var sequence = [];
  var term = initialTerm;

  if (!isNaN(initialTerm) && !isNaN(commonDifferenceRatio) && !isNaN(numberOfTerms)) {
      if (sequenceType === 'arithmetic') {
          for (var i = 0; i < numberOfTerms; i++) {
              sequence.push(term);
              term += commonDifferenceRatio;
          }
      } else if (sequenceType === 'geometric') {
          for (var i = 0; i < numberOfTerms; i++) {
              sequence.push(term);
              term *= commonDifferenceRatio;
          }
      }

      document.getElementById('sequenceresult').innerText = "Sequence: " + sequence.join(', ');
  } else {
      document.getElementById('sequenceresult').innerText = "Please enter valid numbers.";
  }
}
function calculateSampleSize() {
  var populationSize = parseInt(document.getElementById('populationSize').value);
  var confidenceLevel = parseFloat(document.getElementById('confidenceLevel').value);
  var marginOfError = parseFloat(document.getElementById('marginOfError').value);

  if (!isNaN(populationSize) && !isNaN(confidenceLevel) && !isNaN(marginOfError)) {
      if (confidenceLevel <= 0 || confidenceLevel >= 100) {
          document.getElementById('sampleresult').innerText = "Confidence level must be between 0 and 100.";
          return;
      }
      if (marginOfError <= 0 || marginOfError >= 100) {
          document.getElementById('sampleresult').innerText = "Margin of error must be between 0 and 100.";
          return;
      }

      var zScore = getZScore(confidenceLevel);
      var sampleSize = Math.ceil(((zScore * zScore) * (0.25) * (populationSize)) / ((marginOfError / 100) * (populationSize - 1) + (zScore * zScore) * (0.25)));

      document.getElementById('sampleresult').innerText = "Sample Size: " + sampleSize;
  } else {
      document.getElementById('sampleresult').innerText = "Please enter valid numbers.";
  }
}

function getZScore(confidenceLevel) {
  var z;
  if (confidenceLevel == 90) z = 1.645;
  else if (confidenceLevel == 95) z = 1.96;
  else if (confidenceLevel == 99) z = 2.576;
  else z = -1;
  return z;
}

function calculateStatistics() {
  var input = document.getElementById('statisticsnumbers').value;
  var numbers = input.split(',').map(function(item) {
      return parseFloat(item.trim());
  }).filter(function(item) {
      return !isNaN(item);
  });

  if (numbers.length > 0) {
      var mean = calculateMean(numbers);
      var median = calculateMedian(numbers);
      var mode = calculateMode(numbers);
      var variance = calculateVariance(numbers, mean);
      var standardDeviation = Math.sqrt(variance);

      var result = "Mean: " + mean.toFixed(2) + "<br>";
      result += "Median: " + median.toFixed(2) + "<br>";
      result += "Mode: " + mode.join(', ') + "<br>";
      result += "Variance: " + variance.toFixed(2) + "<br>";
      result += "Standard Deviation: " + standardDeviation.toFixed(2);

      document.getElementById('statisticsresult').innerHTML = result;
  } else {
      document.getElementById('statisticsresult').innerText = "Please enter valid numbers.";
  }
}

function calculateMean(numbers) {
  var sum = numbers.reduce(function(acc, val) {
      return acc + val;
  }, 0);
  return sum / numbers.length;
}

function calculateMedian(numbers) {
  numbers.sort(function(a, b) {
      return a - b;
  });
  var middle = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
      return (numbers[middle - 1] + numbers[middle]) / 2;
  } else {
      return numbers[middle];
  }
}

function calculateMode(numbers) {
  var freqMap = {};
  var maxFreq = 0;
  var modes = [];

  numbers.forEach(function(num) {
      freqMap[num] = (freqMap[num] || 0) + 1;
      if (freqMap[num] > maxFreq) {
          maxFreq = freqMap[num];
          modes = [num];
      } else if (freqMap[num] === maxFreq) {
          modes.push(num);
      }
  });

  return modes;
}

function calculateVariance(numbers, mean) {
  var squaredDiffs = numbers.map(function(num) {
      return Math.pow(num - mean, 2);
  });
  return squaredDiffs.reduce(function(acc, val) {
      return acc + val;
  }, 0) / numbers.length;
}

function triangle() {
  var side1 = parseFloat(document.getElementById('side1').value);
  var side2 = parseFloat(document.getElementById('side2').value);
  var side3 = parseFloat(document.getElementById('side3').value);

  if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      alert("Please enter valid numbers for all sides.");
      return;
  }

  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      alert("Side lengths must be positive.");
      return;
  }

  if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
      alert("These side lengths cannot form a triangle.");
      return;
  }

  var perimeter = side1 + side2 + side3;
  var s = perimeter / 2; // semi-perimeter
  var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

  document.getElementById('triangleresult').innerText = "Perimeter: " + perimeter.toFixed(2) + "\nArea: " + area.toFixed(2);
}
function changeShape() {
  var shape = document.getElementById('shape').value;
  var inputsDiv = document.getElementById('inputs');

  while (inputsDiv.firstChild) {
      inputsDiv.removeChild(inputsDiv.firstChild);
  }

  if (shape === 'box') {
      createInput('Length', 'length');
      createInput('Width', 'width');
      createInput('Height', 'height');
  } else if (shape === 'sphere') {
      createInput('Radius', 'radius');
  } else if (shape === 'cylinder') {
      createInput('Radius', 'radius');
      createInput('Height', 'height');
  }
}

function createInput(labelText, inputId) {
  var label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.textContent = labelText;

  var input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('id', inputId);

  var inputsDiv = document.getElementById('inputs');
  inputsDiv.appendChild(label);
  inputsDiv.appendChild(input);
}

function calculateVolume() {
  var shape = document.getElementById('shape').value;
  var volume;

  if (shape === 'box') {
      var length = parseFloat(document.getElementById('length').value);
      var width = parseFloat(document.getElementById('width').value);
      var height = parseFloat(document.getElementById('height').value);
      volume = length * width * height;
  } else if (shape === 'sphere') {
      var radius = parseFloat(document.getElementById('radius').value);
      volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  } else if (shape === 'cylinder') {
      var radius = parseFloat(document.getElementById('radius').value);
      var height = parseFloat(document.getElementById('height').value);
      volume = Math.PI * Math.pow(radius, 2) * height;
  }

  document.getElementById('volumeresult').innerText = "Volume: " + volume.toFixed(2);
}
function area() {
  var shape = document.getElementById('areashape').value;
  var inputsDiv = document.getElementById('areainputs');

  while (inputsDiv.firstChild) {
      inputsDiv.removeChild(inputsDiv.firstChild);
  }

  if (shape === 'rectangle') {
      createInput('Length', 'length');
      createInput('Width', 'width');
  } else if (shape === 'circle') {
      createInput('Radius', 'radius');
  } else if (shape === 'triangle') {
      createInput('Base', 'base');
      createInput('Height', 'height');
  }
}

function createInput(labelText, inputId) {
  var label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.textContent = labelText;

  var input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('id', inputId);

  var inputsDiv = document.getElementById('areainputs');
  inputsDiv.appendChild(label);
  inputsDiv.appendChild(input);
}

function calculateArea() {
  var shape = document.getElementById('areashape').value;
  var area;

  if (shape === 'rectangle') {
      var length = parseFloat(document.getElementById('arealength').value);
      var width = parseFloat(document.getElementById('areawidth').value);
      area = length * width;
  } else if (shape === 'circle') {
      var radius = parseFloat(document.getElementById('arearadius').value);
      area = Math.PI * Math.pow(radius, 2);
  } else if (shape === 'triangle') {
      var base = parseFloat(document.getElementById('areabase').value);
      var height = parseFloat(document.getElementById('areaheight').value);
      area = 0.5 * base * height;
  }

  document.getElementById('arearesult').innerText = "Area: " + area.toFixed(2);
}

function calculateDistance() {
  var distance = parseFloat(document.getElementById('ddistance').value);
  var time = parseFloat(document.getElementById('dtime').value);
  var speed = parseFloat(document.getElementById('dspeed').value);

  if (isNaN(distance) || isNaN(time) || isNaN(speed)) {
      alert("Please enter valid numbers.");
      return;
  }

  var calculatedDistance = time * speed;
  var difference = Math.abs(calculatedDistance - distance);

  document.getElementById('distanceresult').innerHTML = "<p>Calculated Distance: " + calculatedDistance.toFixed(2) + " km</p>" +
                                                  "<p>Difference: " + difference.toFixed(2) + " km</p>";
}