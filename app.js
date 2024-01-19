const noBtn = document.querySelector("#no");

noBtn.addEventListener("mouseover", function (e) {
  const maxX = window.innerWidth - noBtn.clientWidth;
  const maxY = window.innerHeight - noBtn.clientHeight;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
