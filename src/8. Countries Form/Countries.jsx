import React from "react";
import "./styles.css";
import { COUNTRIES } from "./data";

/*
  “COUNTRIES” is a dictionary-like object
  with the following shape:

  {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
  }
*/

function Countries() {
  const [country, setCountry] = React.useState("");

  const dataCountry = Object.entries(COUNTRIES);
  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor="country">Country:</label>
        <select
          required
          id="country"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="">-- SELECT A OPTION --</option>
          <optgroup label="Countries">
            {dataCountry.map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </optgroup>
        </select>
      </fieldset>

      <p className="country-display">Selected country: {COUNTRIES[country]}</p>

      <button>Submit</button>
    </form>
  );
}

export default Countries;
