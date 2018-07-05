document.addEventListener("DOMContentLoaded", function() {
  const actions = document.getElementById("actions");
  const buttons = document.querySelectorAll("[data-type]");


  for(let button of buttons) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let data = e.target.dataset.type;

      ws.send(data);
    });
  }

  const ws = new WebSocket('wss://mailruindicate-direction-pjkesroeld.now.sh');

  // function setStatus (val) {
  //   status.innerHTML = val;
  // }

  function printMessage (message) {
    let newAction = document.createElement("div");
    newAction.classList.add("action");
    newAction.innerHTML = message;

    actions.appendChild(newAction);

    newAction.scrollIntoView()
  }

  // ws.onopen = () => setStatus('Online');

  // ws.onclose = () => setStatus('Disconnected');

  ws.onmessage = (resp) => {
    printMessage(resp.data)
  };
});