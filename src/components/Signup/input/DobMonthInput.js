import { useContext } from "react";
import { StateContext } from "../../../App";
import { ArrowDownSymbol } from "../symbols/ArrowDownSymbol";

export const DobMonthInput = () => {
  const { formData, handleChange } = useContext(StateContext);

  return (
    <div id="dob-month">
      <label className="dob-input-label" htmlFor="month">
        Month
      </label>
      <select
        name="month"
        id="month"
        className="dob-input"
        onChange={handleChange}
        value={formData.month || "0"}
      >
        <option className="month-option" value="0" disabled defaultChecked></option>
        <option className="month-option" value="1">
          January
        </option>
        <option className="month-option" value="2">
          February
        </option>
        <option className="month-option" value="3">
          March
        </option>
        <option className="month-option" value="4">
          April
        </option>
        <option className="month-option" value="5">
          May
        </option>
        <option className="month-option" value="6">
          June
        </option>
        <option className="month-option" value="7">
          July
        </option>
        <option className="month-option" value="8">
          August
        </option>
        <option className="month-option" value="9">
          September
        </option>
        <option className="month-option" value="10">
          October
        </option>
        <option className="month-option" value="11">
          November
        </option>
        <option className="month-option" value="12">
          December
        </option>
      </select>
      <ArrowDownSymbol class="white input-arrow-down-symbol" width="22.5px" height="22.5px" />
    </div>
  );
};
