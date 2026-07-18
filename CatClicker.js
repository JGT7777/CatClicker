let clik = 0;
let spacePressed = false;
let dangerLevel = 30;
let stopActive = false;

const countSpan = document.getElementById("count");
const gatiño = document.getElementById("catImage");
const feedButton = document.getElementById("feedButton");
const Stpgat = document.getElementById("stopScreen");
const minusThirty = document.getElementById("minusThirty");

const imagns = [
  "cat/cat1.jpg","cat/cat2.jpg","cat/cat3.jpg","cat/cat4.jpg","cat/cat5.jpg",
  "cat/cat6.jpg","cat/cat7.jpg","cat/cat8.jpg","cat/cat9.jpg","cat/cat10.jpg",
  "cat/cat11.jpg","cat/cat12.jpg","cat/cat13.jpg"
];

function feedCat() {
  clik++;
  countSpan.textContent = clik;

  const index = Math.floor(clik / 50);
  if (index < imagns.length) gatiño.src = imagns[index];

  gatiño.classList.add("pop");
  setTimeout(() => gatiño.classList.remove("pop"), 120);

  if (clik >= dangerLevel) {
    showStpgat();
    dangerLevel += Math.floor(dangerLevel * 0.5);
  }
}

function showStpgat() {
  stopActive = true;
  Stpgat.style.display = "flex";
  setTimeout(() => hideStpgat(), 1500);
}

function hideStpgat() {
  stopActive = false;
  Stpgat.style.display = "none";
}

function playMinusAnimation() {
  minusThirty.classList.add("show");
  setTimeout(() => minusThirty.classList.remove("show"), 1000);
}


feedButton.addEventListener("click", feedCat);

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !spacePressed) {
    spacePressed = true;

    if (stopActive) {
      clik = Math.max(0, clik - 30);
      countSpan.textContent = clik;

      playMinusAnimation();


      hideStpgat();
      return;
    }

    feedCat();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Space") spacePressed = false;
});
