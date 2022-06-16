const DateInput = ({ name, content, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{content}</label>
      <input className="form-input" type="date" id={name} onChange={onChange} />
    </>
  );
};

export default DateInput;
