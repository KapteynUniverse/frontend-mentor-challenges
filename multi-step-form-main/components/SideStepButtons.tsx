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
    <ul className="side-step-buttons" role="list">
      {steps.map((step, index) => (
        <li key={index} className="button-container">
          <button
            aria-label={`Go to step ${index + 1}: ${step.desc}`}
            aria-current={
              activeStep === index + 1 ||
              (index === steps.length - 1 && activeStep === 5)
                ? "step"
                : undefined
            }
            className={
              activeStep === index + 1 ||
              (index === steps.length - 1 && activeStep === 5)
                ? "side-step-active"
                : "side-step-passive"
            }
            type="button"
            onClick={() => handleSideStepClick(index + 1)}
          >
            <span className="step-number" aria-hidden="true">
              {index + 1}
            </span>
          </button>
          <div className="step-text-container">
            <p aria-hidden="true" className="step-label">
              {step.label}
            </p>
            <p aria-hidden="true" className="step-desc">
              {step.desc}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SideStepButtons;
