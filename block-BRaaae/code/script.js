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
  let ui = moviesList.map((movie, i) => {
    let li = React.createElement(
      "li",
      {},
      React.createElement("p", {}, movie.name),
      React.createElement(
        "button",
        { id: i, onClick: clickHandler },
        movie.isWatched ? "Watched" : "To Watch"
      )
    );
    return li;
  });
  ReactDOM.render(ui, root);
}
function clickHandler(event) {
  let id = event.target.id;
  moviesList[id].isWatched = !moviesList[id].isWatched;
  createUI();
}

createUI();
