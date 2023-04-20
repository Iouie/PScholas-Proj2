import errorGif from "../assets/errorgif.png";
const ErrorPage = () => {
  return (
    <div>
      <img src={errorGif} alt="404" className="error"></img>
    </div>
  );
};

export default ErrorPage;
