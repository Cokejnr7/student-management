const Spinner = (props) => {
  return (
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui massive text loader">{props.message}</div>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default Spinner;

Spinner.defaultProps = {
  message: "Loading",
};
