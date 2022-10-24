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
  moviesList.forEach((movie, i) => {
    let li = createElement(
      "li",
      {},
      createElement("p", { "data-id": i }, movie.name),
      createElement(
        "button",
        {
          "data-id": i,
          className: "btn",
          addEventListener: clickHandler(i),
        },
        movie.isWatched ? "Watched" : "To Watch"
      )
    );
    root.append(li);
  });
}
function clickHandler(event, i) {
  moviesList[i].isWatched = !moviesList[i].isWatched;
  createUI();
}

createUI();

function createElement(tagName, attribute = {}, ...childrens) {
  let element = document.createElement(tagName);
  for (let key in attribute) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attribute[key]);
    } else {
      element[key] = attribute[key];
    }
  }
  childrens.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}
