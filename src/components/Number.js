const Number = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
        textAlign: "center"
      }}
    >
      <button value={value} onClick={onClick}>{value}</button>
    </div>
  );
};

export default Number;
