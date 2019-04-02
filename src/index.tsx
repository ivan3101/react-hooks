import React from "react";
import ReactDOM from "react-dom";
import CounterWithClasses from "./counterWithClasses";
import CounterWithHooks from "./counterWithHooks";

ReactDOM.render(
    <div>
        <h1>React Hooks</h1>
        <CounterWithClasses />
        <CounterWithHooks />
    </div>
, document.getElementById("root")
);