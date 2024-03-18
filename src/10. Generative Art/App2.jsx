import React from "react";

import GenerativeArt from "./GenerativeArt";
import "./styles.css";
function App2() {
  const [numOfLines, setNumOfLines] = React.useState(5);

  /*
    Accepted values:
      - basic
      - monochrome
      - froot-loops
      - spooky
  */
  const [colorTheme, setColorTheme] = React.useState("basic");

  /*
    Accepted values:
      - circles
      - polygons
  */
  const [shape, setShape] = React.useState("circles");

  return (
    <>
      <GenerativeArt
        numOfLines={numOfLines}
        colorTheme={colorTheme}
        shape={shape}
      />

      <form>
        <fieldset>
          <legend>Controls</legend>
          <div className="row">
            <div className="col">
              <label htmlFor="num-of-lines" className="control-heading">
                Number of Lines:
              </label>
              <input
                onChange={(event) => setNumOfLines(event.target.value)}
                value={numOfLines}
                id="num-of-lines"
                type="range"
                min="1"
                max="15"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="control-heading" htmlFor="color-theme">
                Color Theme:
              </label>
              <select
                value={colorTheme}
                onChange={(event) => setColorTheme(event.target.value)}
                id="color-theme"
              >
                <option value="basic">Basic</option>
                <option value="monochrome">Monochrome</option>
                <option value="froot-loops">Froot Loops</option>
                <option value="spooky">Spooky Night</option>
              </select>
            </div>
            <div className="col">
              <div className="control-heading">Shape:</div>
              <div className="radio-wrapper">
                <div className="radio-option">
                  <input
                    id="circles"
                    value="circles"
                    checked={shape === "circles"}
                    onChange={(event) => setShape(event.target.value)}
                    type="radio"
                  />
                  <label htmlFor="circles">Circles</label>
                </div>
                <div className="radio-option">
                  <input
                    id="polygon"
                    value="polygons"
                    checked={shape === "polygons"}
                    onChange={(event) => setShape(event.target.value)}
                    type="radio"
                  />
                  <label htmlFor="polygon">Polygons</label>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App2;
