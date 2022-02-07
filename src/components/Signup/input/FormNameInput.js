export const FormNameInput = (props) => {
  return (
    <div id="signup-name-input-container" className="signup-input-container">
      <input
        id="name"
        className="form-input"
        type="text"
        name="name"
        placeholder="Name"
        required
        onChange={props.handleChange}
        value={props.formData.name}
      />
      <label className="form-label" htmlFor="name">
        Name
      </label>
    </div>
  );
};