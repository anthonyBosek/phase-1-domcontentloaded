document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");
  let txt = document.getElementById("text");
  //   txt.textContent = "This is really cool!";
  txt.innerHTML = "This is really cool!";
});
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
