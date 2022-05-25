import {ErrorsType, ErrorType} from "hooks/useError";

interface Props {
  errors: ErrorsType,
  removeError: (type: ErrorType) => void;
}

const Error = ({errors, removeError}: Props) => {

  return (
    <>
      {
        errors.map( error => (
          error.display && <p onClick={ () => removeError(error.type)} key={error.type}>{error.message}</p>
        ))
      }
    </>
  )
}

export default Error;