// Defining text characters for the empty and full hearts for you to use later.

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById("modal").hidden = true;
let likes = document.querySelectorAll(".like-glyph").forEach(elem => elem.addEventListener("click",simpleLike));

function simpleLike(event){
  const heart=event.target;
  mimicServerCall("anything")
  .then(function (){
    if(heart.innerText ===EMPTY_HEART){
      heart.innerText = FULL_HEART;
      heart.className = "activate-heart";
    }
    else{
      heart.innerText = EMPTY_HEART;
      heart.className = "";
    }
    })

  .catch(function (error){
    let modelValue = document.getElementById("modal");
    modelValue.className = "";
    modelValue.innerText = error;
    setTimeout(() => modelValue.className = "hidden",3000);
  });
};

//Test doesn't work. Even with solutions to the code

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
