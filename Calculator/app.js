// To 1. Generate Pin
//To 2. Make the keypad funcation
// TO 3. Make Notifaction work
// TO 4. Make try out funcation
// TOO 5. Make "4" and "C" work on the keypress
// TOO 6. If there is no try left user won"t able to Generate a new pin

  

//Selecators


const generatePinBtn = document.querySelector(".generate-btn");
const generatedPin = document.querySelector(".generatedPin");
const showKeyPadValue = document.querySelector(".showValue");
const removeBtn = document.getElementById("removeBtn");
const submitBtn = document.querySelector(".submit-btn");
const wrongPinNotification = document.querySelector(".wrong-pin");
const correctPinNotification = document.querySelector(".correct-pin");
const tryLeft = document.getElementById("tryLeft");
const actions = document.querySelector(".action-left");

//Generating 4 digits Pin

function generatePin() {
  let randomNumber = Math.floor(Math.random() * 9000 + 1000);
  generatedPin.value = randomNumber;
  generatePinBtn.disabled = true;
//  generatePinBtn.style.backgroundColor = "green";
 
}

//show value on the keypad
function showKeyPadInput(number) {
   let chance = tryLeft.innerHTML;
    console.log(chance);
  if (chance >= 0) {
   
      if (generatedPin.value === "") {
    alert("Please generate a pin first!");
  }
  else {
    showKeyPadValue.value += number;
  }
  if (number === "C") {
    showKeyPadValue.value = "";
  }
    }


}
// one click on "<" remove single digit the last

function removeSinglDigit() {

  if (generatedPin.value === "") {
    alert("Please generate a pin first!");
  } else {
    let currentValue = showKeyPadValue.value;
    showKeyPadValue.value = currentValue.slice(0, -1);
    console.log(currentValue);
  }
  
}
// chack number of chance left!
function checkGeneratedPin() {
  let newPin = generatedPin.value;
  let currentPin = showKeyPadValue.value;
  if (newPin === currentPin) {
   showCorrectNotifaction();
  } else {
    showWrongNotifaction();
    numberOfTry();
    }
}

// check number of chance left!
function numberOfTry() {
  
  let chance = tryLeft.innerText
  if (chance > 0) {
    tryLeft.innerHTML = --chance;
  } else {
     actions.innerHTML = "No try left! please try after 30 minutes";
    submitBtn.disabled = "true";
  }
}



// show notfaction if pin is invalid
function showWrongNotifaction() {
  wrongPinNotification.style.display = "block";
  correctPinNotification.style.display = "none";
  generatePinBtn.style.backgroundColor = "red";
  submitBtn.style.backgroundColor = "red";
  showKeyPadValue.value = "";
}


// hide default notifaction
function showCorrectNotifaction() {
  correctPinNotification.style.display = "block";
  wrongPinNotification.style.display = "none";
  generatePinBtn.style.backgroundColor = "green";
  submitBtn.style.backgroundColor = "green";
  submitBtn.disabled = true;
 
}


//hide default notfaction
function hideNotfication() {
 wrongPinNotification.style.display = "none";
  correctPinNotification.style.display = "none";
}
hideNotfication();

// Events

generatePinBtn.addEventListener("click", generatePin);
removeBtn.addEventListener("click", removeSinglDigit);
submitBtn.addEventListener("click", checkGeneratedPin);
