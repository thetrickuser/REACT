import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const nameInput = useInput((name) => name.trim() !== "");
  const emailInput = useInput((email) => email.includes("@"));

  const handleEmailChange = (event) => {
    emailInput.inputChangeHandler(event.target.value);
  };

  const handleNameChange = (event) => {
    nameInput.inputChangeHandler(event.target.value);
  };

  const handleFocusLost = () => {
    nameInput.inputTouchHandler();
  };

  const handleEmailFocusLost = () => {
    emailInput.inputTouchHandler();
  };

  let formIsValid = false;
  if (nameInput.isValid && emailInput.isValid) {
    formIsValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    nameInput.inputTouchHandler();
    emailInput.inputTouchHandler();
    if (!formIsValid) {
      return;
    }
    console.log(nameInput.value);
    console.log(emailInput.value);
    nameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={nameInput.hasError ? "form-control invalid" : "form-control"}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={handleFocusLost}
          onChange={handleNameChange}
          value={nameInput.value}
        />
        {nameInput.hasError && <p>Name must not be empty</p>}
      </div>
      <div
        className={
          emailInput.hasError ? "form-control invalid" : "form-control"
        }
      >
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onBlur={handleEmailFocusLost}
          onChange={handleEmailChange}
          value={emailInput.value}
        />
        {emailInput.hasError && <p>Email is not in correct format</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
