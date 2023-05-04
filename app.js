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

  function autofillFromWarframeMarket() {
    const urlInput = document.getElementById('warframeMarketUrl');
    const url = new URL(urlInput.value);
    const auctionId = url.pathname.split('/')[2];
  
    const apiUrl = `https://api.warframe.market/v1/auctions/${auctionId}`;
    const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  
    fetch(apiUrl, {
      headers: {
        'Authorization': `JWT ${jwtToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error fetching data from warframe.market: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        const attributes = data.auction.item.attributes;
  
        const masteryLevel = attributes.find(attr => attr.name === 'mastery_level').value;
        const modRank = attributes.find(attr => attr.name === 'mod_rank').value;
        const reRolls = attributes.find(attr => attr.name === 're_rolls').value;
  
        const rivenMRInput = document.getElementById('rivenMR');
        const modRankInput = document.getElementById('modRank');
        const rerollsInput = document.getElementById('rerolls');
  
        rivenMRInput.value = masteryLevel;
        modRankInput.value = modRank;
        rerollsInput.value = reRolls;
  
        validateInput();
      })
      .catch(error => {
        console.error(error);
        const errorElement = document.getElementById('error');
        errorElement.textContent = error.message;
        errorElement.style.display = 'block';
      });
  }
