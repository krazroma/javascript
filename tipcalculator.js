// Hide the total amount until calculated
document.getElementById("totalTip").style.display = "none";

// build onclick for the calculate button
document.getElementById("calculate").onclick = function() { calculateTip(); };

// create the calculate tip functuion
function calculateTip()
{
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let peopleAmt = document.getElementById("peopleamt").value;


  // check for 0 or null values
  if (peopleAmt <= 0 || isNaN(peopleAmt))
  {
    alert("You must enter the number of people, must be greater than 0.");
    return;
  }

if(billAmt < 0 || isNaN(billAmt))
{
  alert("You must enter the bill amount, must be greater than 0.");
  return;
}

  // calculate total Tip
  let total = (billAmt * serviceQual) / peopleAmt;
  // let total = Math.round(total, 2);
  total = total.toFixed(2); // two digit decimal number

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
