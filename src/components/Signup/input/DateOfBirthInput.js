import { useAppContext } from "../../../Context";

export const DateOfBirthInput = () => {
  const { formData } = useAppContext();

  return (
    <div className="signup-input-container">
      <input
        id="dob"
        className="form-input"
        name="dob"
        placeholder="Birth date"
        readOnly
        value={`${formData.day}.${formData.month}.${formData.year}`}
      />
      <label className="form-label" htmlFor="dob">
        Birth date
      </label>
    </div>
  );
};
