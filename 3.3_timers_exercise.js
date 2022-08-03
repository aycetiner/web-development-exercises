function countDown(time) {
  let timer = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(timer);
      console.log("DONE!");
    } else {
      console.log(time);
    }
  }, 1000);
}

function randomGame() {
  let randNum = 0;
  let counter = 0;
  let randInterval = setInterval(function () {
    randNum = Math.random();
    counter++;
    console.log(randNum);
    if (randNum > 0.75) {
      clearInterval(randInterval);
      console.log(`It took ${counter} times`);
    }
  }, 1000);
}
