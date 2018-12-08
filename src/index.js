import "./styles.css";
import moment from "moment";
import { createStore } from "redux";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//console.log(moment().toISOString());

function counter(state = 0, action) {
	switch (action.type) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		default:
			return state;
	}
}

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

function actionCreatorCounter(type) {
	return { type: type };
}

store.dispatch(actionCreatorCounter("increment"));
