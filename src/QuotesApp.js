import React from "react";
import "./App.css";
import QuotesWithHooks from "./components/QuotesWithHooks";
import QuotesSimple from "./components/QuotesSimple";
import Counter from "./components/Counter";

function QuotesApp() {
  return (
    <div className="App">
      <Counter color="primary" />
    </div>
  );
}

export default QuotesApp;
