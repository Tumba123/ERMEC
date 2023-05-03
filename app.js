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
  
    if (isNaN(rivenMasteryRank) || isNaN(rivenRank) || isNaN(rerolls)) {
      alert('Please enter valid values for all fields.');
      return;
    }
  
    const endoGained = Math.floor(
      100 * (rivenMasteryRank - 8) +
        22.5 * Math.pow(2, rivenRank) +
        200 * rerolls -
        7
    );
  
    const platWorth = Math.floor(endoGained / 333);
  
    document.getElementById('endoGained').value = endoGained;
    document.getElementById('platWorth').value = platWorth;
  }

  document.getElementById('endoGained').value = endoGained;
  
function resetForm() {
    document.getElementById("rivenMR").value = "";
    document.getElementById("modRank").value = "";
    document.getElementById("rerolls").value = "";
    document.getElementById("endoGained").value = "";
    document.getElementById("rivenMRError").style.display = "none";
    document.getElementById("rivenRankError").style.display = "none";
    document.getElementById("rerollsError").style.display = "none";
  }

  
