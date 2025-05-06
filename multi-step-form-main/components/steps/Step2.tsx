import { StepProps } from "../../types/types";
import Arcade from "/assets/images/icons/icon-arcade.svg";
import Advanced from "/assets/images/icons/icon-advanced.svg";
import Pro from "/assets/images/icons/icon-pro.svg";

const Step2 = ({ handleChange, formData }: StepProps) => {
  const plans = [
    {
      id: "Arcade",
      label: "Arcade",
      image: Arcade,
      monthly: "$9/mo",
      yearly: "$90/yr",
    },
    {
      id: "Advanced",
      label: "Advanced",
      image: Advanced,
      monthly: "$12/mo",
      yearly: "$120/yr",
    },
    {
      id: "Pro",
      label: "Pro",
      image: Pro,
      monthly: "$15/mo",
      yearly: "$150/yr",
    },
  ];
  return (
    <fieldset className="step-2">
      <legend>Plan</legend>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plan-container">
        {plans.map(({ id, label, image, monthly, yearly }) => (
          <div key={id}>
            <input
              id={id}
              name="plan"
              type="radio"
              onChange={handleChange}
              value={id}
              checked={formData.plan === id}
              className="sr-only plan-input"
            />
            <label htmlFor={id}>
              <img src={image} alt="" width={40} height={40} />
              <div>
                <p>{label}</p>
                <p aria-live="polite">{formData.isYearly ? yearly : monthly}</p>
                {formData.isYearly && <p>2 months free</p>}
              </div>
            </label>
          </div>
        ))}
      </div>
      <fieldset>
        <legend className="sr-only">Billing frequency</legend>
        <input
          id="toggle"
          name="isYearly"
          type="checkbox"
          checked={formData.isYearly}
          onChange={handleChange}
          className="sr-only toggle-input"
          aria-checked={formData.isYearly}
          aria-label={`${
            formData.isYearly
              ? "Checked for yearly billing, uncheck to switch to monthly billing"
              : "Checked for monthly billing, uncheck to switch to yearly billing"
          }`}
        />
        <label htmlFor="toggle" className="toggle-label">
          <span>Monthly</span>
          <div className="toggle-bar">
            <div className="toggle-button"></div>
          </div>
          <span>Yearly</span>
        </label>
      </fieldset>
    </fieldset>
  );
};

export default Step2;
