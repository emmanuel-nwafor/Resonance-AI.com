function clickHere() {
  let userInput = document.querySelector('#userInput');
  let message = document.querySelector('#message');
  
  message.innerHTML = 'Am Resonance your personal AI  ' + userInput.value;
}
