import "../../styles/input.scss";

const Input = ({ value, setValue, ...props }) => {

  return (
    <input
      onChange={(event) => setValue(event.target.value)}
      value={value}
      type={props.type}
      placeholder={props.placeholder} />
  )
}

export default Input

