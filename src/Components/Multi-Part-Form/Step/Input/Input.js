import { errorStrings } from "../../../../shared/utility";

export const Input = ({ data, changed, invalid, touched }) => {
  let inputElement = null;

  const inputType = data.config.type;

  switch (data.type) {
    // Add more cases for other type of elements ( textarea, select etc)
    case "input":
      inputElement = (
        <input
          className=""
          id={data.id}
          name={data.id}
          {...data.config}
          onBlur={changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className=""
          id={data.id}
          name={data.id}
          {...data.config}
          onBlur={changed}
        />
      );
  }
  const privacyText = (
    <>
      {data.config.placeholder}
      <a href="/terms">Terms & Services</a>
    </>

  );
  
  return (
    <div className={`form-field ${touched && invalid ? 'invalid' : ''}`}>
      {inputElement}
      <label className={`label ${data.id}`} htmlFor={data.id}>
        {data.config.type !== 'checkbox' ? data.config.placeholder : privacyText}
      </label>
      {touched && invalid ? <span>{errorStrings(inputType)}</span> : null}
    </div>
  );
};
