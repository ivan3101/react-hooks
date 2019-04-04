import React from "react";
import ReactDOM from "react-dom";
import CounterWithClasses from "./counterWithClasses";
import CounterWithHooks from "./counterWithHooks";
import FetchWithClasses from "./fetchWithClasses";
import FetchWithHooks from "./fetchWithHooks";

ReactDOM.render(
    <div>
        <h1>React Hooks</h1>
        <CounterWithClasses />
        <CounterWithHooks />
        <FetchWithClasses />
        <FetchWithHooks />
    </div>
, document.getElementById("root")
);