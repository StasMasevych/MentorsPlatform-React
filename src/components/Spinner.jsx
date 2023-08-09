import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <div className="spinner-block">
      <img className="" src={spinner} alt="Loading..." />
    </div>
  );
}

export default Spinner;
