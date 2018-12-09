import "./styles.css";
import moment from "moment";
import { createStore, combineReducers } from "redux";

import { counter } from "./counter.js";
import { list } from "./list.js";

document.getElementById("app").innerHTML = `
<h1>Hello World!</h1>
<div>
  Hello World.
</div>
`;

//console.log(moment().toISOString());

let store = createStore(combineReducers({ counter, list }));

store.subscribe(() => console.log(store.getState()));

// Action Creator function
function actionCreatorCounter(type) {
	return { type: type };
}

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

store.dispatch({ type: "add", item: "hello" });
store.dispatch({ type: "add", item: "world" });
store.dispatch({ type: "remove", item: "hello" });

store.dispatch(actionCreatorCounter("increment"));
