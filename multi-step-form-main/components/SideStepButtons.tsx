import { handleSideStepClick } from "../types/types";

const steps = [
  { label: "Step 1", desc: "Your info" },
  { label: "Step 2", desc: "Select plan" },
  { label: "Step 3", desc: "Add-ons" },
  { label: "Step 4", desc: "Summary" },
];

const SideStepButtons = ({
  handleSideStepClick,
  activeStep,
}: {
  handleSideStepClick: handleSideStepClick;
  activeStep: number;
}) => {
  return (
    <div className="side-step-buttons">
      {steps.map((step, index) => (
        <div key={index} className="button-container">
          <button
            className={
              activeStep === index + 1 ||
              (index === steps.length - 1 && activeStep === 5)
                ? "side-step-active"
                : "side-step-passive"
            }
            type="button"
            onClick={() => handleSideStepClick(index + 1)}
          >
            <span className="step-number">{index + 1}</span>
          </button>
          <div className="step-text-container">
            <p className="step-label">{step.label}</p>
            <p className="step-desc">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideStepButtons;
