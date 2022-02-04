export const FormEmailInput = () => {
  return (
    <div id="signup-email-input-container" className="signup-input-container">
      <input id="email" className="form-input" type="text" name="email" placeholder="Email" required />
      <label className="form-label" htmlFor="email">
        Email
      </label>
    </div>
  );
};
