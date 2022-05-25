import { useState } from "react";

enum ErrorType {
  GET_INFO_IP,

}

interface Error {
  type: ErrorType;
  message: string;
  display: boolean;
}

export type ErrorsType = Error[];
const initialStateErrors: ErrorsType = [];


const useError = () => {
  const [errors, setErrors] = useState(initialStateErrors);

  const addError = (message: string, type: ErrorType): void => {
    setErrors( (oldErrors) => [
      ...oldErrors,
      {
        message,
        display: true,
        type,
      }
    ]);
  }

  const removeError = (type: ErrorType): void => {
    setErrors( (oldErrors) =>
      oldErrors.map(newError => type === newError.type ? { ...newError, display: false } : newError)
    );
  }

  return [errors, addError, removeError] as const;
}

export { ErrorType };
export default useError;