import "./Step3AddOns.css";
import { addOns } from "../../data/pricing";

function Step3AddOns({
  selectedAddOnIds,
  setSelectedAddOnIds,
  isYearly,
  errors,
}) {
  const toggleAddOn = (id) => {
    setSelectedAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="step step-add-ons">
      <header className="step-header">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </header>

      {errors.addOns && <p className="form-error">{errors.addOns}</p>}

      <div className="addon-list">
        {addOns.map((addOn) => {
          const isSelected = selectedAddOnIds.includes(addOn.id);
          return (
            <button
              key={addOn.id}
              type="button"
              className={`addon-card ${isSelected ? "selected" : ""}`}
              onClick={() => toggleAddOn(addOn.id)}
            >
              <span className={`addon-checkbox ${isSelected ? "checked" : ""}`}>
                {isSelected && (
                  <svg viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5L4.5 8.5L11 1.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>

              <span className="addon-details">
                <span className="addon-name">{addOn.name}</span>
                <span className="addon-description">{addOn.description}</span>
              </span>

              <span className="addon-price">
                {isYearly
                  ? `+$${addOn.yearlyPrice}/yr`
                  : `+$${addOn.monthlyPrice}/mo`}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Step3AddOns;
