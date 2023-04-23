import { useReducer } from "react";
import { ChangeEvent } from "react";
type State = {
  value: string;
  isTouched: boolean;
};
type Action = {
  type: string;
  value: string;
};
const initialInputState: State = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state: State, action: Action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  return state;
};

const useFormInput = (validateValue: (value: string) => boolean) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" } as Action);
  };
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useFormInput;
