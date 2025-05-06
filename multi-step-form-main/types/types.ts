export type FormData = {
  name: string;
  email: string;
  tel: string;
  plan: string;
  isYearly: boolean;
  addons: string[];
};

type handleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;

export type handleSideStepClick = (step: number) => void;

export type StepProps = {
  handleChange: handleChange;
  formData: FormData;
};

export type Step4Props = {
  formData: FormData;
  handleSideStepClick: handleSideStepClick;
};
