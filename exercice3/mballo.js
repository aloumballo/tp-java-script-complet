const header=document.getElementsByClassName('header');
const datapremier=document.getElementsById('text');
const datasecond="AZERTYUIOPQSDFGHJKLMWXCVBN".split('');
const datatrois="azertyuiopqsdfghjklmwxcvbn".split('');
const dataquatre="0123456789".split('');
const datacinq="!@#$%^&*-_=+\|:;',.>/?~".split('');
const footer=document.getElementById('id');
const generateButton=document.getElementById('id');


////////



function generatePassword() {

    const data = [].concat(
      seconds.checked ? datasecond : [],
      troiss.checked ? datatrois : [],
      quatres.checked ? dataquatre : [],
      cinqs.checked ? datacinq : []
    );
  
    let passwordLength = parseInt(document.getElementById('premiers').value);
    let newPassword = '';
  
    if (data.length === 0) {
      header.innerHTML = "Générateur de MDP";
      alert('Please check at least one criteria');
      return;
    }
  
    for (let i = 0; i < passwordLength; i++) {
      newPassword += data[Math.floor(Math.random() * data.length)];
    }
    datapremier.value = newPassword;
    console.log(passwordLength)
    
    passwordOutput.select();
    document.execCommand('copy');
    generateButton.innerHTML = "Copied !";
    setTimeout(() => {generateButton.innerHTML = "Générer mot de passe"}, 3500);
  
  }