function InputGroup(props) {
  return (
    <>
      <label htmlFor={ props.input.id }> { props.label } </label>
      <input
        onChange={ props.input.onChange}
        id={ props.input.id }
        placeholder={ props.input.placeholder }
        type={ props.input.type || 'text' }
        value={ props.value }
      />
    </>
  );
}

export default InputGroup;
