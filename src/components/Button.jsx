import "./Button.css";

const Button = ({ text, functionOnClick, classes }) => {
  const buttonClasses = classes ? `button ${classes}` : "button";

  return (
    <button className={buttonClasses} onClick={functionOnClick}>
      {text}
    </button>
  );
};

export default Button;
