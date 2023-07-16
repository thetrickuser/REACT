import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const checkName = (name) => name.trim() !== "";
  const checkEmail = (email) => email.includes("@");

  const firstNameInput = useInput(checkName);
  const lastNameInput = useInput(checkName);
  const emailInput = useInput(checkEmail);

  let isFormValid = false;
  if (firstNameInput.isValid && lastNameInput.isValid && emailInput.isValid) {
    isFormValid = true;
  }

  const handleFirstNameChange = (event) => {
    firstNameInput.inputChangeHandler(event.target.value);
  };

  const handleLastNameChange = (event) => {
    lastNameInput.inputChangeHandler(event.target.value);
  };

  const handleEmailChange = (event) => {
    emailInput.inputChangeHandler(event.target.value);
  };

  const handleFirstNameBlur = () => {
    firstNameInput.inputTouchHandler(true);
  };

  const handleLastNameBlur = () => {
    lastNameInput.inputTouchHandler(true);
  };

  const handleEmailBlur = () => {
    emailInput.inputTouchHandler(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    firstNameInput.inputTouchHandler(true);
    lastNameInput.inputTouchHandler(true);
    emailInput.inputTouchHandler(true);

    if (!isFormValid) {
      return;
    }

    console.log(
      "Your name - ",
      firstNameInput.value,
      lastNameInput.value,
      "\nYour Email - ",
      emailInput.value
    );
    firstNameInput.reset();
    lastNameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div
          className={
            !firstNameInput.hasError ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={handleFirstNameChange}
            onBlur={handleFirstNameBlur}
            value={firstNameInput.value}
          />
          {firstNameInput.hasError && <p>First name should not be empty</p>}
        </div>
        <div
          className={
            !lastNameInput.hasError ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={handleLastNameChange}
            onBlur={handleLastNameBlur}
            value={lastNameInput.value}
          />
          {lastNameInput.hasError && <p>Last name should not be empty</p>}
        </div>
      </div>
      <div
        className={
          !emailInput.hasError ? "form-control" : "form-control invalid"
        }
      >
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailInput.value}
        />
        {emailInput.hasError && <p>Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
