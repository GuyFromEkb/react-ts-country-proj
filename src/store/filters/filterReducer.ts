export enum actionTypes {
	SET_SEARCH_FILTER = "SET_SEARCH_FILTER",
	CLEAR_SERACH_FILTER = "CLEAR_SEARCH_FILTER",
	SET_REGION_FILTER = "SET_REGION_FILTER",
	CLEAR_REGION_FILTER = "CLEAR_REGION_FILTER",
}

interface IState {
	search: string;
	region: string[];
}
const initialState: IState = {
	search: "",
	region: [],
};

interface IActionSetSearch {
	type: actionTypes.SET_SEARCH_FILTER;
	payload: string;
}
interface IActionClearSearch {
	type: actionTypes.CLEAR_SERACH_FILTER;
}
interface IActionSetRegion {
	type: actionTypes.SET_REGION_FILTER;
	payload: string[];
}
interface IActionClearRegion {
	type: actionTypes.CLEAR_REGION_FILTER;
}
type ActionType =
	| IActionSetSearch
	| IActionClearSearch
	| IActionSetRegion
	| IActionClearRegion;

const filterReducer = (state = initialState, action: ActionType): IState => {
	switch (action.type) {
		case actionTypes.SET_SEARCH_FILTER:
			return { ...state, search: action.payload };
		case actionTypes.CLEAR_SERACH_FILTER:
			return { ...state, search: "" };
		case actionTypes.SET_REGION_FILTER:
			return { ...state, region: action.payload };
		case actionTypes.CLEAR_REGION_FILTER:
			return { ...state, region: [] };
		default:
			return state;
	}
};

export default filterReducer;
