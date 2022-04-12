var d = document.getElementById('descr')
function apii(){
  fetch('https://api.github.com/repos/svvictorelias/QrCode')
  .then(resp => resp.json())
  .then(descQR =>
  d.innerHTML = descQR.description)
}
apii()