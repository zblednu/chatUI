const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.length) {
    const yesVal = Math.random();
    const noVal = 1 - yesVal;
    postComment(yesVal, noVal);
    input.value = "";
  }
});

function postComment(toxic, nonToxic) {
  const comment = document.createElement("p");
  comment.textContent = input.value;
  comment.className = "comment";

  const eval = document.createElement("div");
  eval.setAttribute("class", "eval");

  const columnYes = document.createElement("div");
  columnYes.style.height = `${Math.floor(toxic * 100)}%`;
  columnYes.className = "column yes";
  const columnNo = document.createElement("div");
  columnNo.style.height = `${Math.floor(nonToxic * 100)}%`;
  columnNo.className = "column no";

  eval.appendChild(columnYes);
  eval.appendChild(columnNo);

  const message = document.createElement("div");
  message.className = "message";
  message.appendChild(comment);
  message.appendChild(eval);

  const chat = document.querySelector(".chat");
  chat.appendChild(message);
  chat.scroll(0, chat.scrollHeight);
}
