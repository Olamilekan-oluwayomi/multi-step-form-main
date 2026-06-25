import "./Step2SelectPlan.css";
import { plans } from "../../data/pricing";

function Step2SelectPlan({
  selectedPlan,
  setSelectedPlan,
  isYearly,
  setIsYearly,
  errors,
}) {
  return (
    <section className="step step-select-plan">
      <header className="step-header">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </header>

      {errors.plan && <p className="form-error">{errors.plan}</p>}

      <div className="plan-list">
        {plans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            className={`plan-card ${
              selectedPlan === plan.id ? "selected" : ""
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <img src={plan.icon} alt="" className="plan-icon" />
            <span className="plan-details">
              <span className="plan-name">{plan.name}</span>
              <span className="plan-price">
                {isYearly
                  ? `$${plan.monthlyPrice * 10}/yr`
                  : `$${plan.monthlyPrice}/mo`}
              </span>
              {isYearly && (
                <span className={`plan-discount ${isYearly ? "visible" : ""}`}>
                  2 months free
                </span>
              )}
            </span>
          </button>
        ))}
      </div>

      <div className="billing-toggle">
        <span className={!isYearly ? "active" : ""}>Monthly</span>
        <button
          type="button"
          className={`toggle-switch ${isYearly ? "on" : ""}`}
          onClick={() => setIsYearly((prev) => !prev)}
          aria-label="Toggle billing period"
        >
          <span className="toggle-knob" />
        </button>
        <span className={isYearly ? "active" : ""}>Yearly</span>
      </div>
    </section>
  );
}

export default Step2SelectPlan;
