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
      createElement("p", {}, movie.name),
      createElement(
        "button",
        { id: i, onClick: clickHandler },
        movie.isWatched ? "Watched" : "To Watch"
      )
    );
    root.append(li);
  });
}
function clickHandler(event) {
  let id = event.target.id;
  moviesList[id].isWatched = !moviesList[id].isWatched;
  createUI();
}

createUI();

function createElement(tagName, attribute = {}, ...childrens) {
  let element = document.createElement(tagName);
  for (let key in attribute) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attribute[key]);
    } else if (key.startsWith("on")) {
      let eventType = key.replace("on", "").toLowerCase();
      element.addEventListener(eventType, attribute[key]);
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
