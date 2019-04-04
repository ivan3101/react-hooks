import React from "react";
import ReactDOM from "react-dom";
import CounterWithClasses from "./counterWithClasses";
import CounterWithHooks from "./counterWithHooks";
import FetchWithClasses from "./fetchWithClasses";

ReactDOM.render(
    <div>
        <h1>React Hooks</h1>
        <CounterWithClasses />
        <CounterWithHooks />
        <FetchWithClasses />
    </div>
, document.getElementById("root")
);