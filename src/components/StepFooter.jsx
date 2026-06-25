import "./StepFooter.css";

function StepFooter({ onNext, onBack, currentStep }) {
  return (
    <footer className="step-footer">
      {currentStep > 1 && (
        <button type="button" onClick={onBack}>
          Go Back
        </button>
      )}

      <button type="button" className="btn-next" onClick={onNext}>
        {currentStep === 4 ? "Confirm" : "Next Step"}
      </button>
    </footer>
  );
}

export default StepFooter;
