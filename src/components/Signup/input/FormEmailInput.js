import { useAppContext } from "../../../Context";

export const FormEmailInput = () => {
  const { formData, handleChange, setInvalidBorderColor, signupEmailRef } = useAppContext();

  return (
    <div id="signup-email-input-container" className="signup-input-container">
      <input
        id="email"
        className="form-input"
        type="email"
        name="email"
        placeholder="Email"
        required
        ref={signupEmailRef}
        onChange={handleChange}
        onInvalid={() => setInvalidBorderColor(signupEmailRef)}
        value={formData.email}
      />
      <label className="form-label" htmlFor="email">
        Email
      </label>
    </div>
  );
};
