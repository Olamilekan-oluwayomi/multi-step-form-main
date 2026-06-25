import "./Step4Summary.css";
import { plans, addOns } from "../../data/pricing";

function Step4Summary({
  selectedPlan,
  selectedAddOnIds,
  isYearly,
  setCurrentStep,
}) {
  const plan = plans.find((p) => p.id === selectedPlan);
  const billingLabel = isYearly ? "Yearly" : "Monthly";
  const unit = isYearly ? "/yr" : "/mo";

  const planPrice = isYearly ? plan.monthlyPrice * 10 : plan.monthlyPrice;

  const selectedAddOns = selectedAddOnIds.map((id) =>
    addOns.find((a) => a.id === id),
  );
  const addOnsTotal = selectedAddOns.reduce(
    (sum, addOns) =>
      sum + (isYearly ? addOns.yearlyPrice : addOns.monthlyPrice),
    0,
  );

  const total = planPrice + addOnsTotal;

  return (
    <section className="step step-summary">
      <header className="step-header">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </header>

      <div className="summary-card">
        <div className="summary-plan-row">
          <div className="summary-plan-info">
            <p className="summary-plan-name">
              {plan.name} ({billingLabel})
            </p>
            <button
              type="button"
              className="summary-change-link"
              onClick={() => setCurrentStep(2)}
            >
              Change
            </button>
          </div>
          <p className="summary-plan-price">
            ${planPrice}
            {unit}
          </p>
        </div>

        {selectedAddOns.length > 0 && (
          <div className="summary-addons">
            {selectedAddOns.map((addOn) => (
              <div className="summary-addon-row" key={addOn.name}>
                <p className="summary-addon-name">{addOn.name}</p>
                <p className="summary-addon-price">
                  +${isYearly ? addOn.yearlyPrice : addOn.monthlyPrice}
                  {unit}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="summary-total-row">
        <p className="summary-total-label">
          Total ({isYearly ? "per year" : "per month"})
        </p>
        <p className="summary-total-price">
          {isYearly ? "" : "+"}${total}
          {unit}
        </p>
      </div>
    </section>
  );
}

export default Step4Summary;
