import { useState } from "react";
import { StepProps, FormInputField } from "../../types/types";

const Step1 = ({ handleChange, formData }: StepProps) => {
  const inputFields: {
    id: FormInputField;
    type: string;
    name: FormInputField;
    placeholder: string;
    autoComplete: string;
    label: string;
  }[] = [
    {
      id: "name",
      type: "text",
      name: "name",
      placeholder: "e.g. Stephen King",
      autoComplete: "name",
      label: "Name",
    },
    {
      id: "email",
      type: "email",
      name: "email",
      placeholder: "e.g. stephenking@lorem.com",
      autoComplete: "email",
      label: "Email Address",
    },
    {
      id: "tel",
      type: "tel",
      name: "tel",
      placeholder: "e.g. +1 234 567 890",
      autoComplete: "tel",
      label: "Phone Number",
    },
  ];

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const handleValidation = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    const { name, validity, minLength, value } = input;
    let message = "";

    if (validity.valueMissing) {
      message = "This field is required.";
    } else if (name === "email") {
      if (value.length < minLength) {
        message = `Must be at least ${minLength} characters.`;
      } else if (validity.typeMismatch) {
        message = "Please enter a valid email address.";
      }
    } else if (validity.tooShort) {
      message = `Must be at least ${minLength} characters.`;
    }
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  return (
    <fieldset className="step-1">
      <legend>Personal information</legend>
      <h2 id="form-title">Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      {inputFields.map(
        ({ id, type, name, placeholder, autoComplete, label }) => (
          <div className="step-1-input-container" key={id}>
            <input
              id={id}
              type={type}
              name={name}
              placeholder={placeholder}
              autoComplete={autoComplete}
              maxLength={25}
              minLength={5}
              required
              value={formData[name]}
              onChange={handleChange}
              onBlur={handleValidation}
            />
            <label htmlFor={id}>
              {label}
              <span className="err-msg">
                {errors[name as keyof typeof errors]}
              </span>
            </label>
          </div>
        )
      )}
    </fieldset>
  );
};

export default Step1;
