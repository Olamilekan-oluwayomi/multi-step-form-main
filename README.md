# Multi-Step Subscription Form

A responsive, multi-step subscription sign-up form built with React + Vite. Users move through personal info, plan selection, add-ons, and a summary step before confirming, with validation at each step and a final confirmation screen.

## ✨ Features

- **Four-step flow** with a progress indicator (numbered dots on mobile, labeled steps with icons on desktop)
- **Step 1, Personal info** — name, email, and phone fields, each validated on "Next" (required fields, basic email format check)
- **Step 2, Select plan** — choose between Arcade, Advanced, or Pro, with a monthly/yearly billing toggle. Yearly pricing is calculated automatically (10x the monthly rate) and shows a "2 months free" note
- **Step 3, Add-ons** — toggle optional add-ons (Online service, Larger storage, Customizable profile), with pricing that updates based on the monthly/yearly selection. At least one selection isn't required to proceed, but an empty state is validated and flagged
- **Step 4, Summary** — recap of the selected plan and add-ons with a running total, plus a "Change" link that jumps straight back to the plan step
- **Confirmation screen** — a "Thank you" state shown after confirming, replacing the form entirely
- **Step navigation** — Back and Next/Confirm buttons, with the footer pinned to the bottom of the viewport on mobile for easy reach
- **Centralized validation** — all validation logic lives in `App.jsx` and only advances the step when the current one passes

## 🛠️ Tech Stack

- **React** (Vite)
- Plain CSS per component (no CSS framework)
- No backend, form state is held entirely in React state and does not persist after refresh

## 🚀 Getting Started

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## 📁 Project Structure

```
src/
  components/
    steps/
      Step1PersonalInfo.jsx
      Step2SelectPlan.jsx
      Step3AddOns.jsx
      Step4Summary.jsx
    StepFooter.jsx      # Back / Next / Confirm controls
    ThankYou.jsx        # Final confirmation screen
  data/
    pricing.js          # Plan and add-on data (names, icons, pricing)
  App.jsx               # Step state, form state, and validation logic
  App.css
```

## 🧠 How It Works

All form state (personal info, selected plan, billing period, selected add-ons) and the current step live in `App.jsx`. Each step component is a controlled view that reads from and writes back to this shared state through props, there's no separate state management library involved.

Validation is step-specific:

- Step 1 checks that name, email, and phone are filled in, with a basic format check on email
- Step 2 requires a plan to be selected
- Step 3 requires at least one add-on to be selected

Only when the current step's validation passes does `currentStep` advance. On the final step, confirming sets `isSubmitted` to true, which swaps the entire form out for the `ThankYou` screen.

Pricing math lives in `Step2SelectPlan.jsx` and `Step4Summary.jsx`, both of which import their data from a shared `pricing.js` file rather than hardcoding numbers.

## 📌 Possible Future Improvements

- Persist form progress (e.g. to localStorage) so a refresh doesn't lose entered data
- Extract validation logic into a separate hook to keep `App.jsx` leaner
- Add unit tests for the validation functions

## 📄 License

Personal practice project, free to use or adapt.
