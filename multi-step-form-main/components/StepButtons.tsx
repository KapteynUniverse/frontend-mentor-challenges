type Props = {
  handleForwardStep: () => void;
  handleBackStep: () => void;
  step: number;
};

const StepButtons = ({ handleForwardStep, handleBackStep, step }: Props) => {
  const isLastStep = step === 4;
  const isSubmit = step === 5;

  return (
    <div className="step-buttons">
      <button
        type={isSubmit ? "submit" : "button"}
        onClick={handleForwardStep}
        className={isLastStep ? "confirm" : ""}
        aria-label={
          isLastStep
            ? "Confirm order"
            : `Go to the next step (Step ${step + 1})`
        }
      >
        <span aria-hidden="true">{isLastStep ? "Confirm" : "Next Step"}</span>
      </button>

      {step > 1 && (
        <button
          type="button"
          onClick={handleBackStep}
          aria-label={`Go to the previous step (Step ${step - 1})`}
        >
          <span aria-hidden="true">Go Back</span>
        </button>
      )}
    </div>
  );
};

export default StepButtons;
