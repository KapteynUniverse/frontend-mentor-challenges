import { Step4Props } from "../../types/types";

const Step4 = ({ formData, handleSideStepClick }: Step4Props) => {
  const prices = {
    plans: {
      Arcade: formData.isYearly ? 90 : 9,
      Advanced: formData.isYearly ? 120 : 12,
      Pro: formData.isYearly ? 150 : 15,
    },
    addons: {
      "Online Service": formData.isYearly ? 10 : 1,
      "Larger Storage": formData.isYearly ? 20 : 2,
      "Customizable Profile": formData.isYearly ? 20 : 2,
    },
  };

  const selectedPlanPrice =
    prices.plans[formData.plan as keyof typeof prices.plans];

  const selectedAddons = formData.addons.map((addon) => ({
    name: addon,
    price: prices.addons[addon as keyof typeof prices.addons] || 0,
  }));

  const totalPrice =
    selectedPlanPrice +
    selectedAddons.reduce((sum, addon) => sum + addon.price, 0);

  return (
    <fieldset className="step-4">
      <legend id="form-title">Confirm Subscription</legend>
      <h2 id="form-title">Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div>
        <div className="step-4-container">
          <div className="step-4-plan">
            <div className="addon-container">
              <h3>
                {formData.plan} ({!formData.isYearly ? "Monthly" : "Yearly"})
              </h3>
              <button
                className="step-4-button"
                onClick={() => handleSideStepClick(2)}
                aria-label="Click to go step 2 to change plan"
              >
                Change
              </button>
            </div>
            <p>
              ${selectedPlanPrice}
              {!formData.isYearly ? "/mo" : "/yr"}
            </p>
          </div>
          {formData.addons.map((addon: string) => (
            <div className="step-4-addon" key={addon}>
              <p>{addon}</p>
              {addon === "Online Service" ? (
                <p className="addon-price">
                  {!formData.isYearly ? "+$1/mo" : "+$10/yr"}
                </p>
              ) : (
                <p className="addon-price">
                  {!formData.isYearly ? "+$2/mo" : "+$20/yr"}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="step-4-total">
          <p>Total({!formData.isYearly ? "per month" : "per year"})</p>
          <p className="total-price">
            ${totalPrice}
            {!formData.isYearly ? "/mo" : "/yr"}
          </p>
        </div>
      </div>
    </fieldset>
  );
};

export default Step4;
