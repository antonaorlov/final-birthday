const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

function func(){
  window.location.assign("index2.html");
}

function func1(){
  window.location.assign("Shop.html");
}


setTimeout(function(){
    modal.style.display = 'inline'
}, 1000)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('modal-btns-reverse')
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
        <div class="parent">
        <div class="spinner"></div>

<style>
.parent {
    display: flex;
    justify-content: center;
    margin:1rem;
    height: 100vh; /* Adjust the height as needed */
    top:4rem;
 }
 
 .spinner {
    width: 56px;
    height: 56px;
    border: 6.7px solid #000000;
    animation: spinner-kk2y8v 3s infinite;
 }

@keyframes spinner-kk2y8v {
   0% {
      transform: rotate(0deg);
   }

   10%, 15% {
      transform: rotate(-90deg);
   }

   20%, 25% {
      transform: rotate(-180deg);
   }

   30%, 35% {
      transform: rotate(-270deg);
   }

   40%, 50% {
      transform: rotate(-360deg);
   }

   100% {
      transform: rotate(720deg);
   }
}
</style>
</div>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Checking HOTNESS scale...`
    }, 500)
    
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>,<br> You are Hot!!😍
        <p>Happy 19th Birthday 😘 </p>
        <div class="idiot-gif">
            <img src="pirate.gif">
        </div>
    `
    modalCloseBtn.disabled = false
    }, 3000)
  
})