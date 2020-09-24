import React from "react";
import "./App.css";
import QuotesWithHooks from "./components/QuotesWithHooks";
import QuotesSimple from "./components/QuotesSimple";

function QuotesApp() {
  return (
    <div className="App">
      <QuotesSimple />
    </div>
  );
}

export default QuotesApp;
