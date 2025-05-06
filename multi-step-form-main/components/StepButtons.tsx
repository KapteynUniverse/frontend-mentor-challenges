type Props = {
  handleForwardStep: () => void;
  handleBackStep: () => void;
  step: number;
};

const StepButtons = ({ handleForwardStep, handleBackStep, step }: Props) => {
  return (
    <div className="step-buttons">
      <button
        // If a change to step === 4, it reloads the page at step 3
        type={step === 5 ? "submit" : "button"}
        onClick={handleForwardStep}
        className={step === 4 ? "confirm" : ""}
        aria-label={step === 4 ? "Confirm order" : "Go to the next step"}
      >
        {step === 4 ? "Confirm" : "Next Step"}
      </button>
      {step > 1 && (
        <button
          type="button"
          onClick={handleBackStep}
          aria-label="Go to the previous step"
        >
          Go Back
        </button>
      )}
    </div>
  );
};

export default StepButtons;
