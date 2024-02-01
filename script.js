const beer = document.querySelector("img[alt=beer");
const snaps = document.querySelector("img[alt=snaps");
const cola = document.querySelector("img[alt=cola");
const fanta = document.querySelector("img[alt=fanta");

beer.addEventListener("click", tjek);

function tjek() {
  console.log(this.alt);
  if (this.alt == "beer" || this.alt == "snaps") {
    console.log("innehåller alkohol");
  } else {
    console.log("alkoholfri");
  }
}
