import React from "react";
import "./styles.css";

function GradientGenerator() {
  const [colors, setColors] = React.useState(["#FFD500", "#FF0040"]);

  const colorStops = colors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

  function addColor() {
    if (colors.length >= 5) {
      alert("There is a maximum of 5 colors");
      return;
    }

    const nextColor = [...colors];
    nextColor.push("#FF0000");
    setColors(nextColor);
  }

  function removeColor() {
    if (colors.length <= 2) {
      alert("There is a minimum of 2 colors");
      return;
    }

    const nextColor = [...colors];
    nextColor.pop();
    setColors(nextColor);
  }

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={removeColor}>Remove color</button>
        <button onClick={addColor}>Add color</button>
      </div>

      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <div className="input-wrapper">
                <input
                  value={color}
                  onChange={(event) => {
                    const nextColor = [...colors];
                    nextColor[index] = event.target.value;
                    setColors(nextColor);
                  }}
                  id={colorId}
                  type="color"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GradientGenerator;
