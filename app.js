function validateInput() {
    const rivenMasteryRank = parseInt(document.getElementById('rivenMR').value);
    const rivenRank = parseInt(document.getElementById('modRank').value);
    const rerolls = parseInt(document.getElementById('rerolls').value);
    
    const rivenMasteryRankError = document.getElementById('rivenMRError');
    const rivenRankError = document.getElementById('rivenRankError');
    const rerollsError = document.getElementById('rerollsError');
  
    if (rivenMasteryRank < 8) {
      rivenMasteryRankError.style.display = 'inline';
    } else {
      rivenMasteryRankError.style.display = 'none';
    }
  
    if (rivenRank < 0 || rivenRank > 8) {
      rivenRankError.style.display = 'inline';
    } else {
      rivenRankError.style.display = 'none';
    }
  
    if (rerolls < 0) {
      rerollsError.style.display = 'inline';
    } else {
      rerollsError.style.display = 'none';
    }
  }
  
  function calculateEndo() {
  const rivenMasteryRank = parseInt(document.getElementById('rivenMR').value);
  const rivenRank = parseInt(document.getElementById('modRank').value);
  const rerolls = parseInt(document.getElementById('rerolls').value);
  const platinumRate = parseInt(document.getElementById('platinumRate').value);

  if (isNaN(rivenMasteryRank) || isNaN(rivenRank) || isNaN(rerolls) || isNaN(platinumRate)) {
    alert('Please enter valid values for all fields.');
    return;
  }

  const endoGained = Math.floor(
    100 * (rivenMasteryRank - 8) +
      22.5 * Math.pow(2, rivenRank) +
      200 * rerolls -
      7
  );

  const platWorth = Math.floor(endoGained / platinumRate);

  document.getElementById('endoGained').value = endoGained;
  document.getElementById('platWorth').value = platWorth;
}
  
function resetForm() {
    document.getElementById("rivenMR").value = "";
    document.getElementById("modRank").value = "";
    document.getElementById("rerolls").value = "";
    document.getElementById("endoGained").value = "";
    document.getElementById("rivenMRError").style.display = "none";
    document.getElementById("rivenRankError").style.display = "none";
    document.getElementById("rerollsError").style.display = "none";
  }

function appDownload(){

}

// Set the date we're counting down to
var countDownDate = new Date("May 5, 2024 09:26:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
