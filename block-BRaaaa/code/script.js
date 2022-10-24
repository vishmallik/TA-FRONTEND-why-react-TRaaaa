let root = document.querySelector(".root");
let input = document.querySelector("input");
let moviesList = [];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    let movie = {
      name: event.target.value,
      isWatched: false,
    };
    moviesList.push(movie);
    event.target.value = "";
    createUI();
  }
});

function createUI() {
  root.innerHTML = "";
  moviesList.forEach((movie) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = movie.name;
    let btn = document.createElement("button");
    btn.innerText = movie.isWatched ? "Watched" : "To Watch";
    btn.addEventListener("click", (event) => {
      movie.isWatched = !movie.isWatched;
      createUI();
    });
    li.append(p, btn);
    root.append(li);
  });
}

createUI();
