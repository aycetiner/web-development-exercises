const form = document.querySelector("form");
const imgInput = document.querySelector("#img_url");
const topTextInput = document.querySelector("#top_text");
const bottomTextInput = document.querySelector("#bottom_text");
const memeOutput = document.querySelector("#meme_output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form is submitted!", imgInput.value, topTextInput);
  const newMemeImg = document.createElement("img");
  const newTopText = document.createElement("p");
  const newBottomText = document.createElement("p");
  const newMeme = document.createElement("div");
  //   const xImg = (newMemeImg.src = imgInput.value);
  newMemeImg.src = imgInput.value;
  newTopText.innerText = topTextInput.value;
  newBottomText.innerText = bottomTextInput.value;
  newMeme.classList.add("new-meme");
  newTopText.classList.add("top-text");
  newBottomText.classList.add("bottom-text");
  if (newMemeImg.getAttribute("src") !== "") {
    newMeme.appendChild(newMemeImg);
    newMeme.appendChild(newTopText);
    newMeme.appendChild(newBottomText);
    memeOutput.appendChild(newMeme);
  }
});

memeOutput.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});
