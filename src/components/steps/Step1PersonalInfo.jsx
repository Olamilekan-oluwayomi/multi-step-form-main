import "./Step1PersonalInfo.css";

function Step1PersonalInfo({ personalInfo, setPersonalInfo, errors }) {
  return (
    <section className="step step-personal-info">
      <header className="step-header">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </header>

      <form className="step-form" noValidate>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Stephen King"
            value={personalInfo.name}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, name: e.target.value })
            }
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={personalInfo.email}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, email: e.target.value })
            }
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            value={personalInfo.phone}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, phone: e.target.value })
            }
          />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>
      </form>
    </section>
  );
}

export default Step1PersonalInfo;
