import styled from 'styled-components';

const StyledSelect = styled.select`
  background-color: transparent;
  border: 0;
  color: rgb(109 92 83);
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }

  &>option {
    background-color: rgb(169 165 138);
    cursor: pointer;
  }

  &>option:checked {
    background-color: rgb(109 92 83);
    color: rgb(169 165 138);
    cursor: pointer;
  }
`;

function onChangeHandler(e, data, callback) {
  const { selectedIndex } = e.target;
  return callback(data[selectedIndex]);
}

function Select(props) {
  const { selectedKey, defaultMessage, data, onChangeHandler: callback } = props;

  return (
    <StyledSelect
      defaultValue={ selectedKey && selectedKey.key || selectedKey }
      onChange={ (e) => onChangeHandler(e, data, callback) }
    >
      { !selectedKey && <option value=''>{ defaultMessage }</option> }
      { data.map((opt) =>
        <option key={ opt.key } value={ opt.key }>
          { opt.value }
        </option>)
      }
    </StyledSelect>
  );
}

export default Select;
