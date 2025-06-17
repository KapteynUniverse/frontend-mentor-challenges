import { useRef, useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import StepButtons from "./StepButtons";
import SideStepButtons from "./SideStepButtons";
import SubConfirmed from "./steps/SubConfirmed";
import { FormData } from "../types/types";
import React from "react";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    tel: "",
    plan: "Arcade",
    isYearly: false,
    addons: [],
  });
  const formRef = useRef<HTMLFormElement>(null);

  function handleForwardStep() {
    setStep((prev) => prev + 1);
  }

  function handleBackStep() {
    setStep((prev) => prev - 1);
  }

  function handleSideStepClick(step: number) {
    setStep(step);
  }

  function handleValidatedForwardStep() {
    if (formRef.current?.checkValidity()) {
      handleForwardStep();
    } else {
      formRef.current?.reportValidity();
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;

    if (
      name === "Online Service" ||
      name === "Larger Storage" ||
      name === "Customizable Profile"
    ) {
      setFormData((prev) => {
        const addons = checked
          ? [...prev.addons, name]
          : prev.addons.filter((addon) => addon !== name);
        return { ...prev, addons };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  return (
    <>
      <h1 class="sr-only">Multi Step Form</h1>
      {step < 5 ? (
        <form ref={formRef} method="post" aria-labelledby="form-title">
          <SideStepButtons
            handleSideStepClick={(nextStep) => {
              if (step === 1 && !formRef.current?.checkValidity()) {
                formRef.current?.reportValidity();
                return;
              }
              handleSideStepClick(nextStep);
            }}
            activeStep={step}
          />
          {step === 1 && (
            <Step1 handleChange={handleChange} formData={formData} />
          )}
          {step === 2 && (
            <Step2 handleChange={handleChange} formData={formData} />
          )}
          {step === 3 && (
            <Step3 handleChange={handleChange} formData={formData} />
          )}
          {step === 4 && (
            <Step4
              formData={formData}
              handleSideStepClick={handleSideStepClick}
            />
          )}
          <StepButtons
            handleForwardStep={handleValidatedForwardStep}
            handleBackStep={handleBackStep}
            step={step}
          />
        </form>
      ) : (
        <div className="last-step">
          <SideStepButtons
            handleSideStepClick={(nextStep) => handleSideStepClick(nextStep)}
            activeStep={step}
          />
          <SubConfirmed />
        </div>
      )}
    </>
  );
};

export default Form;
