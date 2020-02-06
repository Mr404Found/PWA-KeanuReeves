const container = document.querySelector(".container");

const fruits = [
  { name: "Constantine", image: "images/coffee3.jpg" },
  { name: "John Wick", image: "images/coffee2.jpg" },
  { name: "The Matrix", image: "images/coffee1.jpg" },
  { name: "Speed", image: "images/coffee4.jpg" },
  { name: " chuck", image: "images/coffee5.jpg" },
  { name: " Replicas", image: "images/coffee6.jpg" },
  { name: "Man of Tai Chi", image: "images/coffee7.jpg" },
  { name: "Street Kings", image: "images/coffee8.jpg" },
  { name: "The Watcher", image: "images/coffee9.jpg" }
];

const showFruits = () => {
  let output = "";
  fruits.forEach(
    ({ name, image }) =>
      (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Love</a>
                </div>
                `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showFruits);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
