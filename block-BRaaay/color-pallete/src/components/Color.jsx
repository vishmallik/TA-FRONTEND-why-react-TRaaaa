function Color(props) {
  let weight = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <div className="color-parent">
      <div className="color" style={{ backgroundColor: props.color }}></div>
      <div className="color-name">
        <span>{weight[props.index]}</span>
        <span>{props.color.toUpperCase()}</span>
      </div>
    </div>
  );
}

export default Color;
