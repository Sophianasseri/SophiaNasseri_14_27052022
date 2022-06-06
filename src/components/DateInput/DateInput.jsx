const DateInput = ({ name, content }) => {
  return (
    <>
      <label htmlFor={name}>{content}</label>
      <input type="date" id={name} />
    </>
  );
};

export default DateInput;
