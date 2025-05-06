import thankYouLogo from "/assets/images/icons/icon-thank-you.svg";

const SubConfirmed = () => {
  return (
    <section className="step-5" aria-labelledby="final-title">
      <img src={thankYouLogo} alt="" width={80} height={80} />
      <h2 id="final-title">Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};

export default SubConfirmed;
