import { useAppContext } from "../../../Context";

export const FormEmailInput = () => {
  const { formData, handleChange } = useAppContext();

  return (
    <div id="signup-email-input-container" className="signup-input-container">
      <input
        id="email"
        className="form-input"
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
        value={formData.email}
      />
      <label className="form-label" htmlFor="email">
        Email
      </label>
    </div>
  );
};
