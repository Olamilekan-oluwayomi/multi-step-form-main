import { useState } from "react";
import "./App.css";
import ThankYou from "./components/ThankYou";
import StepFooter from "./components/StepFooter";
import Step1PersonalInfo from "./components/steps/Step1PersonalInfo";
import Step2SelectPlan from "./components/steps/Step2SelectPlan";
import Step3AddOns from "./components/steps/Step3AddOns";
import Step4Summary from "./components/steps/Step4Summary";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State for form data
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // State for plan data
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [selectedAddOnIds, setSelectedAddOnIds] = useState([]);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    addOns: [],
  });

  // Helper to move between steps
  const validateName = (name) => (name.trim() === "" ? "Name is required" : "");

  const validateEmail = (email) => {
    if (email.trim() === "" || !/\S+@\S+\.\S+/.test(email)) {
      return "Email is required";
    }
    return "";
  };

  const validatePhone = (phone) =>
    phone.trim() === "" ? "Phone is required" : "";

  const validatePersonalInfo = (personalInfo) => ({
    name: validateName(personalInfo.name),
    email: validateEmail(personalInfo.email),
    phone: validatePhone(personalInfo.phone),
  });

  const hasErrors = (errors) => Object.values(errors).some((err) => err !== "");

  const handleNextFromStep1 = () => {
    const newErrors = validatePersonalInfo(personalInfo);
    setErrors(newErrors);

    if (!hasErrors(newErrors)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleNextFromStep2 = () => {
    const planErr = selectedPlan ? "" : "Please select a plan";
    setErrors((prev) => ({ ...prev, plan: planErr }));

    if (planErr === "") {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleNextFromStep3 = () => {
    const hasError = !selectedAddOnIds || selectedAddOnIds.length === 0;

    setErrors((prev) => ({
      ...prev,
      addOns: hasError ? "Please select at least one add-on" : "",
    }));

    if (!hasError) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePlainNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === 4) {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="App">
      <div className="steps-indicator-mobile">
        <ul>
          <li className={currentStep === 1 ? "selected" : ""}>1</li>
          <li className={currentStep === 2 ? "selected" : ""}>2</li>
          <li className={currentStep === 3 ? "selected" : ""}>3</li>
          <li className={currentStep === 4 ? "selected" : ""}>4</li>
        </ul>
      </div>

      <div className="app-layout">
        <div className="steps-indicator-desktop">
          <ul>
            <li className={currentStep === 1 ? "selected" : ""}>
              <span className="step-number">1</span>
              <span>
                <p>Step 1</p> <p className="wht">Your Info</p>
              </span>
            </li>
            <li className={currentStep === 2 ? "selected" : ""}>
              <span className="step-number">2</span>
              <span>
                <p>Step 2</p> <p className="wht">Select Plan</p>
              </span>
            </li>
            <li className={currentStep === 3 ? "selected" : ""}>
              <span className="step-number">3</span>
              <span>
                <p>Step 3</p> <p className="wht">Add-ons</p>
              </span>
            </li>
            <li className={currentStep === 4 ? "selected" : ""}>
              <span className="step-number">4</span>
              <span>
                <p>Step 4</p> <p className="wht">Summary</p>
              </span>
            </li>
          </ul>
        </div>

        <div className="content-wrapper">
          {isSubmitted ? (
            <ThankYou />
          ) : (
            <>
              {currentStep === 1 && (
                <Step1PersonalInfo
                  personalInfo={personalInfo}
                  setPersonalInfo={setPersonalInfo}
                  errors={errors}
                />
              )}
              {currentStep === 2 && (
                <Step2SelectPlan
                  selectedPlan={selectedPlan}
                  setSelectedPlan={setSelectedPlan}
                  isYearly={isYearly}
                  setIsYearly={setIsYearly}
                  errors={errors}
                />
              )}
              {currentStep === 3 && (
                <Step3AddOns
                  selectedAddOnIds={selectedAddOnIds}
                  setSelectedAddOnIds={setSelectedAddOnIds}
                  isYearly={isYearly}
                  errors={errors}
                />
              )}
              {currentStep === 4 && (
                <Step4Summary
                  selectedPlan={selectedPlan}
                  selectedAddOnIds={selectedAddOnIds}
                  isYearly={isYearly}
                  setCurrentStep={setCurrentStep}
                />
              )}

              <StepFooter
                currentStep={currentStep}
                onNext={
                  currentStep === 1
                    ? handleNextFromStep1
                    : currentStep === 2
                      ? handleNextFromStep2
                      : currentStep === 3
                        ? handleNextFromStep3
                        : handlePlainNext
                }
                onBack={handleBack}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
