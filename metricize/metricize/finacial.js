/**
 * get calculator button  
**/
let mortageBtn = document.querySelector('#mortage')
let amortizationBtn = document.querySelector('#amortization')
let expenseBtn = document.querySelector('#expense')
let downBtn = document.querySelector('#down')
let autoBtn = document.querySelector('#auto')
let cashBtn = document.querySelector('#cashBack')
let autoLeaseBtn = document.querySelector('#autoLease')
let interestBtn = document.querySelector('#interest')
let financeBtn = document.querySelector('#finance')
let cdBtn = document.querySelector('#cd')
let incomeBtn = document.querySelector('#income')
let salaryBtn = document.querySelector('#salary')

/** 
 * get calculoator section 
**/
let mortage = document.querySelector('.mortage')
let auto = document.querySelector('.auto')
let tax = document.querySelector('.tax')
let investment = document.querySelector('.investment')


/**
 * get calculator
**/
let mortageCal = document.querySelector('.mortage-calculator')
let amortizationCal = document.querySelector('.amortization-calculator')
let expenseCal = document.querySelector('.expense-calculator')
let downCal = document.querySelector('.down-calculator')
let autoCal = document.querySelector('.autoLoan-calculator')
let cashCal = document.querySelector('.cashBack-calculator')
let autoLeaseCal = document.querySelector('.autoLease-calculator')
let interestCal = document.querySelector('.interest-calculator')
let financeCal = document.querySelector('.finance-calculator')
let cdCal = document.querySelector('.cd-calculator')
let incomeCal = document.querySelector('.incomeTax-calculator')
let salaryCal = document.querySelector('.salary-calculator')


/**
 * calculator functions
 */
mortageBtn.addEventListener("click",function(){
    mortageCal.style.display = 'block'
    mortage.style.display = 'none'
    auto.style.display = 'none'
    tax.style.display = 'none'
    investment.style.display = 'none'
})
amortizationBtn.addEventListener("click",function(){
    amortizationCal.style.display = 'block'
    mortage.style.display = 'none'
    auto.style.display = 'none'
    tax.style.display = 'none'
    investment.style.display = 'none'
})
expenseBtn.addEventListener("click",function(){
    expenseCal.style.display = 'block'
    mortage.style.display = 'none'
    auto.style.display = 'none'
    tax.style.display = 'none'
    investment.style.display = 'none'
})
downBtn.addEventListener("click",function(){
    downCal.style.display = 'block'
    mortage.style.display = 'none'
    auto.style.display = 'none'
    tax.style.display = 'none'
    investment.style.display = 'none'
})
autoBtn.addEventListener("click",function(){
    autoCal.style.display = 'block'
    mortage.style.display = 'none'
    auto.style.display = 'none'
    tax.style.display = 'none'
    investment.style.display = 'none'
})
cashBtn.addEventListener("click",function(){
    cashCal.style.display = 'block'
    mortage.style.display = 'none'
    auto.style.display = 'none'
    tax.style.display = 'none'
    investment.style.display = 'none'
})
autoLeaseBtn.addEventListener("click",function(){
    autoLeaseCal.style.display = 'block'
    mortage.style.display = 'none'
    auto.style.display = 'none'
    tax.style.display = 'none'
    investment.style.display = 'none'
})
interestBtn.addEventListener("click",function(){
    interestCal.style.display = 'block'
    mortage.style.display = 'none'
    auto.style.display = 'none'
    tax.style.display = 'none'
    investment.style.display = 'none'
})
financeBtn.addEventListener("click",function(){
    financeCal.style.display = 'block'
    mortage.style.display = 'none'
    auto.style.display = 'none'
    tax.style.display = 'none'
    investment.style.display = 'none'
})
cdBtn.addEventListener("click",function(){
    cdCal.style.display = 'block'
    mortage.style.display = 'none'
    auto.style.display = 'none'
    tax.style.display = 'none'
    investment.style.display = 'none'
})
incomeBtn.addEventListener("click",function(){
    incomeCal.style.display = 'block'
    mortage.style.display = 'none'
    auto.style.display = 'none'
    tax.style.display = 'none'
    investment.style.display = 'none'
})
salaryBtn.addEventListener("click",function(){
    salaryCal.style.display = 'block'
    mortage.style.display = 'none'
    auto.style.display = 'none'
    tax.style.display = 'none'
    investment.style.display = 'none'
})


function mortageCalculator(){
// formula: c = (r * p) / (1 - (Math.pow((1 + r), (-n))))
function calculateMortgage(p, r, n) {
  r = percentToDecimal(r);
  n = yearsToMonths(n);
  var pmt = (r * p) / (1 - (Math.pow((1 + r), (-n))));
  return parseFloat(pmt.toFixed(2));
}

function percentToDecimal(percent) {
  return (percent / 12) / 100;
}

function yearsToMonths(year) {
  return year * 12;
}
var htmlEl = document.getElementById("outMonthly");

function postPayments(pmt) {
  htmlEl.innerText = "$" + pmt;
}
var btn = document.getElementById("btnCalculate");
btn.onclick = function() {
  var cost = document.getElementById("inCost").value.replace('$', '');
  var downPayment = document.getElementById("inDown").value.replace('$', '');
  var interest = document.getElementById("inInterest").value.replace('%', '');
  var term = document.getElementById("inTerm").value.replace(' years', '');
  
  if (cost == "" && downPayment == "" && interest == "" && term == "") {
    htmlEl.innerText = "Please fill out all fields.";
    return false;
  }
  if (cost < 0 || cost == "" || isNaN(cost)) {
    htmlEl.innerText = "Please enter a valid loan amount.";
    return false;
  }
  if (downPayment < 0 || downPayment == "" || isNaN(downPayment)) {
    htmlEl.innerText = "Please enter a valid down payment.";
    return false;
  }
  if (interest < 0 || interest == "" || isNaN(interest)) {
    htmlEl.innerText = "Please enter a valid interest rate.";
    return false;
  }
  if (term < 0 || term == "" || isNaN(term)) {
    htmlEl.innerText = "Please enter a valid length of loan.";
    return false;
  }
  var amountBorrowed = cost - downPayment;
  var pmt = calculateMortgage(amountBorrowed, interest, term);
  postPayments(pmt);
};

}
mortageCalculator()


  document.getElementById('loan-form').addEventListener('submit', function(e){
    //Hide results
    document.getElementById('results').style.display = 'none';
    
      //Show loader
      document.getElementById('loading').style.display = 'block';
    
      setTimeout(calculateResults, 2000)
    
      e.preventDefault();
    });
    
    //Calculate results
    function calculateResults(){
    
      //Form variables
      const amount = document.getElementById('amount');
      const interest = document.getElementById('interest');
      const years = document.getElementById('years');
      const monthlyPayment = document.getElementById('monthly-payment');
      const totalPayment = document.getElementById('total-payment');
      const totalInterest = document.getElementById('total-interest');
    
      //Calculation variables
      const principal = parseFloat(amount.value);
      const calculatedInterest = parseFloat(interest.value) / 100 /12;
      const calculatedPayments = parseFloat(years.value) * 12;
    
      //Compute monthly payment
      const x = Math.pow(1 + calculatedInterest, calculatedPayments);
      const monthly = (principal*x*calculatedInterest)/(x-1);
    
      if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    
        //Show result
        document.getElementById('results').style.display = 'block';
    
        //Hide loader
        document.getElementById('loading').style.display = 'none';
    
      } else {
        //Hide result
        document.getElementById('results').style.display = 'none';
    
        //Hide loader
        document.getElementById('loading').style.display = 'none';
    
        showError('Please check your numbers');
      }
    
    }
    
    function showError(error){
  
      //Get elements
      const card = document.querySelector('.card');
      const heading = document.querySelector('.heading');
    
      //Create a div
      const errorDiv = document.createElement('div');
    
      //Add a class
      errorDiv.className = 'alert alert-danger';
    
      //Create text node and append to div
      errorDiv.appendChild(document.createTextNode(error));
    
      //Insert error above heading
      card.insertBefore(errorDiv, heading);
    
      //Clear error after 3 seconds
      setTimeout(clearError, 3000);
    }
    function clearError(){
      document.querySelector('.alert').remove();
    }

      
      
      //js output to html
      
      function getValues()
      {
          //button click gets values from inputs
          var balance = parseFloat(document.getElementById("principal").value);
          var interestRate = 
              parseFloat(document.getElementById("interest").value/100.0);
          var terms = parseInt(document.getElementById("terms").value);
          
          //set the div string
          var div = document.getElementById("Result");
          
          //in case of a re-calc, clear out the div!
          div.innerHTML = "";
          
          //validate inputs - display error if invalid, otherwise, display table
          var balVal = validateInputs(balance);
          var intrVal = validateInputs(interestRate);
      
          if (balVal && intrVal)
          {
              //Returns div string if inputs are valid
              div.innerHTML += amort(balance, interestRate, terms);
          }
          else
          {
              //returns error if inputs are invalid
              div.innerHTML += "Please Check your inputs and retry - invalid values.";
          }
      }
      


  
  function expense(){

    /**
     * Amort function:
     * Calculates the necessary elements of the loan using the supplied user input
     * and then displays each months updated amortization schedule on the page
    */
    function amort(balance, interestRate, terms)
    {
        //Calculate the per month interest rate
        var monthlyRate = interestRate/12;
        
        //Calculate the payment
        var payment = balance * (monthlyRate/(1-Math.pow(
            1+monthlyRate, -terms)));
            
        //begin building the return string for the display of the amort table
        var result = "Loan amount: $" + balance.toFixed(2) +  "<br />" + 
            "Interest rate: " + (interestRate*100).toFixed(2) +  "%<br />" +
            "Number of months: " + terms + "<br />" +
            "Monthly payment: $" + payment.toFixed(2) + "<br />" +
            "Total paid: $" + (payment * terms).toFixed(2) + "<br /><br />";
            
        //add header row for table to return string
        result += "<table border='1'><tr><th>Month #</th><th>Balance</th>" + 
            "<th>Interest</th><th>Principal</th>";
        
        /**
         * Loop that calculates the monthly Loan amortization amounts then adds 
         * them to the return string 
         */
        for (var count = 0; count < terms; ++count)
        { 
            //in-loop interest amount holder
            var interest = 0;
            
            //in-loop monthly principal amount holder
            var monthlyPrincipal = 0;
            
            //start a new table row on each loop iteration
            result += "<tr align=center>";
            
            //display the month number in col 1 using the loop count variable
            result += "<td>" + (count + 1) + "</td>";
            
            
            //code for displaying in loop balance
            result += "<td> $" + balance.toFixed(2) + "</td>";
            
            //calc the in-loop interest amount and display
            interest = balance * monthlyRate;
            result += "<td> $" + interest.toFixed(2) + "</td>";
            
            //calc the in-loop monthly principal and display
            monthlyPrincipal = payment - interest;
            result += "<td> $" + monthlyPrincipal.toFixed(2) + "</td>";
            
            //end the table row on each iteration of the loop	
            result += "</tr>";
            
            //update the balance for each loop iteration
            balance = balance - monthlyPrincipal;		
        }
        
        //Final piece added to return string before returning it - closes the table
        result += "</table>";
        
        //returns the concatenated string to the page
        return result;
    }
    
    function validateInputs(value)
    {
        //some code here to validate inputs
        if ((value == null) || (value == ""))
        {
            return false;
        }
        else
        {
            return true;
        }
    }


  //Show error
  }
expense()

function downPayment(){

  (function() {
    var rent = document.getElementById('rent');
    var phoneBill = document.getElementById('phone-bill');
    var internet = document.getElementById('internet');
    var electricity = document.getElementById('electricity');
    var groceries = document.getElementById('groceries');
    var buttonTotal = document.getElementById('button-bt');
    var total = document.getElementById('total');
    var clear = document.getElementById('clear-bt');
    var error = document.getElementById('error');
  
    
    buttonTotal.onclick = function() {
      var rentValue = rent.value;
      var phoneBillValue = phoneBill.value;
      var internetValue = internet.value;
      var electricityValue = electricity.value;
      var groceriesValue = groceries.value;
  
      error.innerHTML = "";
  
      total.innerHTML = "";
  
      if (isNaN(rentValue) || rentValue === "") {
        error.innerHTML += "<li> Rent field must contain numeric value</li>";
      }
  
      if (isNaN(phoneBillValue) || phoneBillValue === "") {
        error.innerHTML += "<li> Phone Bill field must contain numeric value</li>";
      }
  
      if (isNaN(internetValue) || internetValue === "") {
        error.innerHTML += "<li> Internet field must contain numeric value</li>";
      }
  
      if (isNaN(electricityValue) || electricityValue === "") {
        error.innerHTML += "<li> Electricity field must contain numeric value</li>";
      }
  
      if (isNaN(groceriesValue) || groceriesValue === "") {
        error.innerHTML += "<li>  Groceries field must contain numeric value</li>";
      }
  
      if (!isNaN(rentValue) && !isNaN(phoneBillValue) && !isNaN(internetValue) && !isNaN(electricityValue) && !isNaN(groceriesValue) && rentValue !== "" && phoneBillValue !== "" && internetValue !== "" && electricityValue !== "" && groceriesValue !== "") {
  
        var totalExpense = Number(rentValue) + Number(phoneBillValue) + Number(internetValue) + Number(electricityValue) + Number(groceriesValue);
        total.innerHTML = totalExpense;
      }
  
    };
  
    clear.onclick = function() {
      error.innerHTML = "";
      rent.value = "";
      phoneBill.value = "";
      internet.value = "";
      electricity.value = "";
      groceries.value = "";
      total.value = "";
  
    };
  
  }());
  
  
  
  document.getElementById("downPaymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var totalCost = parseFloat(document.getElementById("totalCost").value);
    var downPaymentPercentage = parseFloat(document.getElementById("downPaymentPercentage").value);
    
    if(isNaN(totalCost) || isNaN(downPaymentPercentage)) {
      alert("Please enter valid numbers.");
      return;
    }
    
    var downPaymentAmount = (downPaymentPercentage / 100) * totalCost;
    var remainingBalance = totalCost - downPaymentAmount;
    
    document.getElementById("result").innerHTML = "<p>Down Payment Amount: $" + downPaymentAmount.toFixed(2) + "</p>" + 
                                                  "<p>Remaining Balance: $" + remainingBalance.toFixed(2) + "</p>";
  });
}
downPayment()



  function calculate() {
    var loanAmount = parseFloat(document.getElementById("loanAmount1").value);
    var interestRate = parseFloat(document.getElementById("interestRate1").value);
    var loanTerm = parseInt(document.getElementById("loanTerm1").value);
  
    var monthlyInterestRate = (interestRate / 100) / 12;
    var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
    var totalRepayment = monthlyPayment * loanTerm;
  
    document.getElementById("result1").innerHTML = "Monthly Payment: $" + monthlyPayment.toFixed(2) + "<br>Total Repayment: $" + totalRepayment.toFixed(2);
  }

  function calculate1() {
    var cashback = parseFloat(document.getElementById("cashback").value);
    var interestRate = parseFloat(document.getElementById("interestRate2").value);
    var purchaseAmount = parseFloat(document.getElementById("purchaseAmount2").value);
    var duration = parseInt(document.getElementById("duration2").value);

    var cashBackTotal = (cashback / 100) * purchaseAmount * duration;
    var lowInterestTotal = (interestRate / 100) * purchaseAmount * (duration / 12);

    var result = document.getElementById("result2");
    result.innerHTML = "<p>Cash Back Total: $" + cashBackTotal.toFixed(2) + "</p><p>Low Interest Total: $" + lowInterestTotal.toFixed(2) + "</p>";

    if (cashBackTotal > lowInterestTotal) {
        result.innerHTML += "<p>Recommendation: Choose the Cash Back option.</p>";
    } else if (cashBackTotal < lowInterestTotal) {
        result.innerHTML += "<p>Recommendation: Choose the Low Interest option.</p>";
    } else {
        result.innerHTML += "<p>Both options are equally beneficial.</p>";
    }
}

function autoLease() {
  var vehiclePrice = parseFloat(document.getElementById("vehiclePrice").value);
  var downPayment = parseFloat(document.getElementById("downPayment").value);
  var annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value);
  var leaseTerm = parseInt(document.getElementById("leaseTerm").value);
  var milesPerYear = parseInt(document.getElementById("milesPerYear").value);

  var monthlyLeasePayment = ((vehiclePrice - downPayment) * (1 + (annualInterestRate / 100))) / leaseTerm;
  var totalLeaseCost = monthlyLeasePayment * leaseTerm;
  var totalMilesAllowed = milesPerYear * (leaseTerm / 12);
  var excessMileageCost = 0.15 * (milesPerYear - 12000) * (leaseTerm / 12);

  var result = document.getElementById("result3");
  result.innerHTML = "<p>Monthly Lease Payment: $" + monthlyLeasePayment.toFixed(2) + "</p>";
  result.innerHTML += "<p>Total Lease Cost: $" + totalLeaseCost.toFixed(2) + "</p>";
  result.innerHTML += "<p>Total Miles Allowed: " + totalMilesAllowed + "</p>";
  if (milesPerYear > 12000) {
      result.innerHTML += "<p>Excess Mileage Cost: $" + excessMileageCost.toFixed(2) + "</p>";
  }
}

function interest() {
  var principal = parseFloat(document.getElementById("principal4").value);
  var interestRate = parseFloat(document.getElementById("interestRate4").value);
  var duration = parseInt(document.getElementById("duration4").value);

  var simpleInterest = (principal * interestRate * duration) / 100;
  var compoundInterest = principal * Math.pow((1 + interestRate / 100), duration) - principal;

  var result = document.getElementById("result4");
  result.innerHTML = "<p>Simple Interest: $" + simpleInterest.toFixed(2) + "</p>";
  result.innerHTML += "<p>Compound Interest: $" + compoundInterest.toFixed(2) + "</p>";
}

function finace() {
  var calculationType = document.getElementById("calculationType").value;
  var principal = parseFloat(document.getElementById("principal5").value);
  var interestRate = parseFloat(document.getElementById("interestRate5").value) / 100;
  var duration = parseInt(document.getElementById("duration5").value);

  var result = document.getElementById("result5");
  result.innerHTML = "";

  if (calculationType === "loanPayment") {
      var monthlyInterestRate = interestRate / 12;
      var numPayments = duration * 12;
      var monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numPayments));
      result.innerHTML = "<p>Monthly Payment: $" + monthlyPayment.toFixed(2) + "</p>";
  } else if (calculationType === "futureValue") {
      var futureValue = principal * Math.pow((1 + interestRate), duration);
      result.innerHTML = "<p>Future Value: $" + futureValue.toFixed(2) + "</p>";
  } else if (calculationType === "presentValue") {
      var presentValue = principal / Math.pow((1 + interestRate), duration);
      result.innerHTML = "<p>Present Value: $" + presentValue.toFixed(2) + "</p>";
  }
}

function cd() {
  var principal = parseFloat(document.getElementById("principal6").value);
  var interestRate = parseFloat(document.getElementById("interestRate6").value) / 100;
  var duration = parseInt(document.getElementById("duration6").value);

  var futureValue = principal * Math.pow((1 + interestRate), duration);

  var result = document.getElementById("result6");
  result.innerHTML = "<p>Future Value: $" + futureValue.toFixed(2) + "</p>";
}

function income() {
  var income = parseFloat(document.getElementById("income").value);

  var tax = 0;

  if (income <= 9875) {
      tax = income * 0.1;
  } else if (income <= 40125) {
      tax = 987.5 + (income - 9875) * 0.12;
  } else if (income <= 85525) {
      tax = 4617.5 + (income - 40125) * 0.22;
  } else if (income <= 163300) {
      tax = 14605.5 + (income - 85525) * 0.24;
  } else if (income <= 207350) {
      tax = 33271.5 + (income - 163300) * 0.32;
  } else if (income <= 518400) {
      tax = 47367.5 + (income - 207350) * 0.35;
  } else {
      tax = 156235 + (income - 518400) * 0.37;
  }

  var result = document.getElementById("result7");
  result.innerHTML = "<p>Income Tax: $" + tax.toFixed(2) + "</p>";
}

function salary() {
  var hourlyWage = parseFloat(document.getElementById("hourlyWage").value);
  var hoursPerWeek = parseInt(document.getElementById("hoursPerWeek").value);

  var weeklySalary = hourlyWage * hoursPerWeek;
  var monthlySalary = weeklySalary * 4; // Assuming 4 weeks in a month
  var yearlySalary = monthlySalary * 12;

  var result = document.getElementById("result8");
  result.innerHTML = "<p>Weekly Salary: $" + weeklySalary.toFixed(2) + "</p>";
  result.innerHTML += "<p>Monthly Salary: $" + monthlySalary.toFixed(2) + "</p>";
  result.innerHTML += "<p>Yearly Salary: $" + yearlySalary.toFixed(2) + "</p>";
}