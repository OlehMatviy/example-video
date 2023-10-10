import { AppDispatch } from "@app/store/store";
import { useDispatch } from "react-redux";

const useAppSelector: () => AppDispatch = useDispatch;

export default useAppSelector;
