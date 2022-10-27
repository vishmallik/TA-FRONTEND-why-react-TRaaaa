import colors from "../colors.json";
import Color from "./Color";

// function Colors() {
//   return (
//     <>
//       <div className="parent">
//         {colors.gray.map((color) => (
//           <Color key={color} color={color} />
//         ))}
//       </div>

//       {colors.red.map((color) => (
//         <Color key={color} color={color} />
//       ))}
//       {colors.pink.map((color) => (
//         <Color key={color} color={color} />
//       ))}
//       {colors.grape.map((color) => (
//         <Color key={color} color={color} />
//       ))}
//       {colors.violet.map((color) => (
//         <Color key={color} color={color} />
//       ))}
//       {colors.indigo.map((color) => (
//         <Color key={color} color={color} />
//       ))}
//       {colors.blue.map((color) => (
//         <Color key={color} color={color} />
//       ))}
//       {colors.cyan.map((color) => (
//         <Color key={color} color={color} />
//       ))}
//       {colors.teal.map((color) => (
//         <Color key={color} color={color} />
//       ))}
//       {colors.green.map((color) => (
//         <Color key={color} color={color} />
//       ))}
//       {colors.lime.map((color) => (
//         <Color key={color} color={color} />
//       ))}
//       {colors.yellow.map((color) => (
//         <Color key={color} color={color} />
//       ))}
//       {colors.orange.map((color) => (
//         <Color key={color} color={color} />
//       ))}
//     </>
//   );
// }
function getColor() {
  let pallete = [];
  for (let color in colors) {
    pallete.push(color);
  }
  return pallete;
}

function Colors() {
  let color_pallete = getColor();

  return color_pallete.map((elem) => (
    <div className="parent">
      <div className="name">
        {elem.toUpperCase()}
        <span>{`colors.${elem}`}</span>
      </div>
      <div className="pallete">
        {colors[elem].map((color, index) => (
          <Color key={color} color={color} index={index} />
        ))}
      </div>
    </div>
  ));
}
export default Colors;
