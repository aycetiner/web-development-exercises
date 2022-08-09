const form = document.querySelector("form");
const imgInput = document.querySelector("#img_url");
const topTextInput = document.querySelector("#top_text");
const bottomTextInput = document.querySelector("#bottom_text");
const memeOutput = document.querySelector("#meme_output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("Form is submitted!", imgInput.value, topTextInput);
  const newMemeImg = document.createElement("img");
  const newX = document.createElement("img");
  const newTopText = document.createElement("p");
  const newBottomText = document.createElement("p");
  const newMeme = document.createElement("div");
  const imgContainer = document.createElement("div");

  newMemeImg.src = imgInput.value;
  newX.src = "https://cdn-icons-png.flaticon.com/512/109/109602.png";
  newTopText.innerText = topTextInput.value;
  newBottomText.innerText = bottomTextInput.value;
  newMeme.classList.add("new-meme");
  newX.classList.add("new-x");
  imgContainer.classList.add("img-container");
  newTopText.classList.add("top-text");
  newBottomText.classList.add("bottom-text");

  if (isValidHttpUrl(newMemeImg.getAttribute("src"))) {
    imgContainer.appendChild(newMemeImg);
    newMeme.appendChild(newTopText);
    newMeme.appendChild(newBottomText);
    newMeme.appendChild(newX);
    newMeme.appendChild(imgContainer);

    memeOutput.appendChild(newMeme);
  }
});

memeOutput.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (error) {
    alert(error, "Not a valid url");
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
