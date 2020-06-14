import React from "react";
import ReactDOM from "react-dom";
import ShoppingList from "./ShoppingList";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <ShoppingList/>
    </div>,
    destination
);