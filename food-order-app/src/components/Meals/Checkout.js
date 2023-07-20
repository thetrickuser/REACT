import React, { useState } from "react";
import styles from "./Checkout.module.css";
import useInput from "../../hooks/use-input";
import Modal from "../UI/Modal";

const Checkout = ({ onConfirm, onCancel, onClose }) => {
  const checkName = (name) => name.trim() !== "";
  const checkPhoneNumber = (phoneNumber) => phoneNumber.length === 10;
  const checkAddress = (address) => address.trim() !== "";

  const nameInput = useInput(checkName);
  const phoneInput = useInput(checkPhoneNumber);
  const addressInput = useInput(checkAddress);
  const [cancelling, setCancelling] = useState(false);

  const isCheckoutFormValid =
    !nameInput.hasError && !phoneInput.hasError && !addressInput.hasError;

  const handleNameChange = (event) => {
    nameInput.inputChangeHandler(event.target.value);
  };

  const handlePhoneChange = (event) => {
    phoneInput.inputChangeHandler(event.target.value);
  };

  const handleAddressChange = (event) => {
    addressInput.inputChangeHandler(event.target.value);
  };

  const handleNameBlur = () => {
    nameInput.inputTouchHandler();
  };

  const handlePhoneBlur = () => {
    phoneInput.inputTouchHandler();
  };

  const handleAddressBlur = () => {
    addressInput.inputTouchHandler();
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    if (isCheckoutFormValid) {
      const userDetails = {
        name: nameInput.value,
        phoneNumber: phoneInput.value,
        address: addressInput.value,
      };
      onConfirm(userDetails);
      nameInput.reset();
      addressInput.reset();
      phoneInput.reset();
    } else {
      alert("Please insert valid data and then click confirm");
    }
  };

  const handleCancel = () => {
    setCancelling(true);
  };

  const handleConfirmCancel = () => {
    nameInput.reset();
    addressInput.reset();
    phoneInput.reset();
    onCancel();
    setCancelling(false);
  };

  const handleModifyOrder = () => {
    setCancelling(false);
  };

  return (
    <React.Fragment>
      <form className={styles.form} onSubmit={handleCheckout}>
        <div className={!nameInput.hasError ? styles.control : styles.invalid}>
          <label>Name</label>
          <input
            type="text"
            id="name"
            value={nameInput.value}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
          />
          {nameInput.hasError && <p>Name cannot be empty</p>}
        </div>
        <div className={!phoneInput.hasError ? styles.control : styles.invalid}>
          <label>Contact Number</label>
          <input
            type="text"
            id="phone"
            value={phoneInput.value}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
          />
          {phoneInput.hasError && (
            <p>Please enter a valid phone number (10 digits)</p>
          )}
        </div>
        <div
          className={!addressInput.hasError ? styles.control : styles.invalid}
        >
          <label>Address</label>
          <input
            type="text"
            id="address"
            value={addressInput.value}
            onChange={handleAddressChange}
            onBlur={handleAddressBlur}
          />
          {addressInput.hasError && <p>Address should not be empty</p>}
        </div>
        <div className={styles.actions}>
          <button className={styles.submit} type="submit">
            Confirm
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
      {cancelling && (
        <Modal onBackdropClick={onClose}>
          <div>Do you want to modify your order?</div>
          <div className={styles.actions}>
            <button onClick={handleModifyOrder}>Modify Order</button>
            <button onClick={handleConfirmCancel}>Cancel Order</button>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Checkout;
