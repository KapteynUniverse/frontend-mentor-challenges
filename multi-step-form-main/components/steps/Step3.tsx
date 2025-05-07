import { StepProps } from "../../types/types";
import checkmark from "/assets/images/icons/icon-checkmark.svg";

const Step3 = ({ handleChange, formData }: StepProps) => {
  const addons = [
    {
      id: "online-service",
      name: "Online Service",
      label: "Online service",
      description: "Access to multiplayer games",
      monthlyPrice: "+$1/mo",
      yearlyPrice: "+$10/yr",
    },
    {
      id: "storage",
      name: "Larger Storage",
      label: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: "+$2/mo",
      yearlyPrice: "+$20/yr",
    },
    {
      id: "customizable-profile",
      name: "Customizable Profile",
      label: "Customizable Profile",
      description: "Custom theme on your profile",
      monthlyPrice: "+$2/mo",
      yearlyPrice: "+$20/yr",
    },
  ];

  return (
    <fieldset className="step-3">
      <legend>Add-ons</legend>
      <h2 id="form-title">Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      {addons.map(
        ({ id, name, label, description, monthlyPrice, yearlyPrice }) => (
          <div key={id}>
            <input
              id={id}
              name={name}
              type="checkbox"
              onChange={handleChange}
              checked={formData.addons.includes(name)}
              className="sr-only addon-input"
            />
            <label htmlFor={id}>
              <div className="checkmark" aria-hidden="true">
                <img src={checkmark} alt="" width={12} height={9} />
              </div>
              <div>
                <p>{label}</p>
                <p>{description}</p>
              </div>
              <p className="step-3-price">
                {formData.isYearly ? yearlyPrice : monthlyPrice}
              </p>
            </label>
          </div>
        )
      )}
    </fieldset>
  );
};

export default Step3;
