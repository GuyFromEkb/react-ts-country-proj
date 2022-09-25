import { actionTypes } from "./filterReducer";

const setRegionFilterOptions = (options: string[]) => ({
	type: actionTypes.SET_REGION_FILTER,
	payload: options,
});

const setSeatchFilter = (options: string) => ({
	type: actionTypes.SET_SEARCH_FILTER,
	payload: options,
});
export { setRegionFilterOptions,setSeatchFilter };
