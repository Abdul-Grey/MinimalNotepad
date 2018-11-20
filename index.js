window.onload = function() {
  var messageSource = document.getElementById('messageSource');
  var message = document.getElementById('message');

  messageSource.addEventListener('keypress', handleKeyEvent);
}

function handleKeyEvent(keyEvent) {
  if ((keyEvent.keyCode < 33 || keyEvent.keyCode > 40) && keyEvent.keyCode != 45 && keyEvent.keyCode != 46) {
    if (keyEvent.keyCode == 8)
      message.innerHTML = message.innerHTML.substr(0, message.innerHTML.length - 1);
    else if (keyEvent.charCode == 0 && keyEvent.keyCode == 13) {
      message.innerHTML += '<br>';
      messageSource.value = "";
    } else
      message.innerHTML = message.innerHTML + keyEvent.key;
  }
}
