const Screen = ({ value }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: 350,
        height: 50,
        textAlign: "right",
        marginBottom: 10,
      }}
    >
      {value}
    </div>
  );
};

export default Screen;
