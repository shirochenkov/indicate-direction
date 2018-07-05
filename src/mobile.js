document.addEventListener("DOMContentLoaded", function() {
  const status = document.getElementById("status");
  const app = document.getElementById("app");
  const buttons = document.querySelectorAll("[data-type]");


  for(let button of buttons) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let data = e.target.dataset.type;

      ws.send(data);
    });
  }

  const ws = new WebSocket('wss://mailruindicate-direction-pjkesroeld.now.sh');

  function setStatus (val) {
    status.innerHTML = val;
  }

  function printMessage (message) {
    app.innerHTML = message;
  }

  ws.onopen = () => setStatus('Online');

  ws.onclose = () => setStatus('Disconnected');

  ws.onmessage = (resp) => {
    printMessage(resp.data)
  };
});