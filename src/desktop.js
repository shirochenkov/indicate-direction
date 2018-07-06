document.addEventListener("DOMContentLoaded", function() {
  const ws = new WebSocket('wss://mailruindicate-direction-ws-mjmrtjqmqa.now.sh');

  const wrapper = document.querySelector(".actions__wrapper");
  const actions = document.querySelector(".actions");
  const buttons = document.querySelectorAll("[data-type]");


  for(let button of buttons) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let data = e.target.dataset.type;

      ws.send(data);
    });
  }

  function printMessage (message) {
    let newAction = document.createElement("div");
    newAction.innerHTML = message;

    actions.appendChild(newAction);

    newAction.scrollIntoView()
  }

  ws.onopen = () => {
    wrapper.classList.add("actions__wrapper_connect");
  };

  ws.onclose = () => {
    wrapper.classList.remove("actions__wrapper_connect");
  };

  ws.onmessage = (resp) => {
    printMessage(resp.data)
  };
});