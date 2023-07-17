function onChangeHandler(e, data, callback) {
  const { selectedIndex } = e.target;
  return callback(data[selectedIndex]);
}

function Select(props) {
  const { selectedKey, defaultMessage, data, onChangeHandler: callback } = props;

  return (
    <select
      defaultValue={ selectedKey && selectedKey.key || selectedKey }
      onChange={ (e) => onChangeHandler(e, data, callback) }
    >
      { !selectedKey && <option value=''>{ defaultMessage }</option> }
      { data.map((opt) =>
        <option key={ opt.key } value={ opt.key }>
          { opt.value }
        </option>)
      }
    </select>
  );
}

export default Select;
