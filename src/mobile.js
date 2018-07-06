document.addEventListener("DOMContentLoaded", function() {
  const ws = new WebSocket('wss://mailruindicate-direction-ws-mjmrtjqmqa.now.sh');

  const wrapper = document.querySelector(".actions__wrapper");
  const buttons = document.querySelectorAll("[data-type]");

  for(let button of buttons) {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      let { target } = e;
      let data = target.dataset.type || target.closest("[data-type]").dataset.type;

      ws.send(data);
    });
  }

  ws.onopen = () => {
    wrapper.classList.add("actions__wrapper_connect");
  };

  ws.onclose = () => {
    wrapper.classList.remove("actions__wrapper_connect");
  };
});