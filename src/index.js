import React from "react";
import ReactDOM from "react-dom";
import Form from "./form";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <p>Username</p>
      <p>Password</p>

      <form>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />

        <button type="submit" value="submit">
          Submit
        </button>
      </form>
      <Form />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
