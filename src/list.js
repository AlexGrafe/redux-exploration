export function list(state = [], action) {
	switch (action.type) {
		case "add":
			return state.concat([action.item]);
		case "remove":
			return state.filter(i => i !== action.item);
		default:
			return state;
	}
	return state;
}
