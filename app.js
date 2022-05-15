const jokeParagraph = document.querySelector("#jokeParagraph");
const submit = document.querySelector("#submit");

submit.addEventListener("click", getDadJoke);

document.addEventListener("DOMContentLoaded", () => submit.click());

async function getDadJoke() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  response = await response.json();
  jokeParagraph.innerText = response.joke;
}
