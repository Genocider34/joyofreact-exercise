import React from "react";

const CORRECT_CODE = "123456";
import "./styles.css";

function App() {
  const [enter, setEnter] = React.useState("");

  function handleSubmit(input) {
    return input === CORRECT_CODE ? alert("Correct") : alert("Incorrect");
  }

  return (
    <>
      <label htmlFor="auth-code">Enter authorization code:</label>
      <div className="row">
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(enter);
          }}
        >
          <input
            value={enter}
            onChange={(event) => setEnter(event.target.value)}
            id="auth-code"
            type="text"
            required={true}
            maxLength={6}
          />
          <button>Validate</button>
        </form>
      </div>
    </>
  );
}

export default App;
