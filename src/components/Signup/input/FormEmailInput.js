export const FormEmailInput = (props) => {
  return (
    <div id="signup-email-input-container" className="signup-input-container">
      <input
        id="email"
        className="form-input"
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={props.handleChange}
        value={props.formData.email}
      />
      <label className="form-label" htmlFor="email">
        Email
      </label>
    </div>
  );
};
