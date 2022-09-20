import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/rootReducer";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypeSelector;
