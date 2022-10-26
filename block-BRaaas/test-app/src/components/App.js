function App() {
  return (
    <>
      <button onClick={clickHandler}>Click Me</button>
      <div>
        <button onClick={handleClick}>How can I help you</button>
      </div>
      <div>
        <button onClick={handleClick2}>Arya</button>
        <button onClick={handleClick2}>John</button>
        <button onClick={handleClick2}>Bran</button>
      </div>
      <div>
        <button onClick={(event) => new handleClick_class(event)}>John</button>
        <button onClick={(event) => new handleClick_class(event)}>Bran</button>
        <button onClick={(event) => new handleClick_class(event)}>Arya</button>
      </div>
      <div>
        {fruits.map((fruit) => (
          <button key={fruit.id} onClick={handleFruit}>
            {fruit.value}
          </button>
        ))}
      </div>
    </>
  );
}

let fruits = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

function handleFruit(event) {
  alert(`Fruit is ${event.target.innerText}`);
}

function clickHandler() {
  alert("Hello React Event");
}
function handleClick() {
  alert("To learn React use https://reactjs.org");
  alert("React and ReactDOM works together");
  alert("Babel helps in writing JSX");
}
function handleClick2(event) {
  let user = event.target.innerText;
  alert(`Hello ${user}`);
}
class handleClick_class {
  constructor(event) {
    let user = event.target.innerText;
    alert(`Hello ${user}`);
  }
}
export default App;
