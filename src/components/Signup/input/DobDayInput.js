import { ArrowDownSymbol } from "../symbols/ArrowDownSymbol";

export const DobDayInput = (props) => {
  return (
    <div id="dob-day">
      <label className="dob-input-label" htmlFor="day">
        Day
      </label>
      <select
        name="day"
        id="day"
        className="dob-input"
        onChange={props.handleChange}
        value={props.formData.day || "0"}
      >
        <option className="day-option" value="0" disabled></option>
        <option className="day-option" value="1">
          1
        </option>
        <option className="day-option" value="2">
          2
        </option>
        <option className="day-option" value="3">
          3
        </option>
        <option className="day-option" value="4">
          4
        </option>
        <option className="day-option" value="5">
          5
        </option>
        <option className="day-option" value="6">
          6
        </option>
        <option className="day-option" value="7">
          7
        </option>
        <option className="day-option" value="8">
          8
        </option>
        <option className="day-option" value="9">
          9
        </option>
        <option className="day-option" value="10">
          10
        </option>
        <option className="day-option" value="11">
          11
        </option>
        <option className="day-option" value="12">
          12
        </option>
        <option className="day-option" value="13">
          13
        </option>
        <option className="day-option" value="14">
          14
        </option>
        <option className="day-option" value="15">
          15
        </option>
        <option className="day-option" value="16">
          16
        </option>
        <option className="day-option" value="17">
          17
        </option>
        <option className="day-option" value="18">
          18
        </option>
        <option className="day-option" value="19">
          19
        </option>
        <option className="day-option" value="20">
          20
        </option>
        <option className="day-option" value="21">
          21
        </option>
        <option className="day-option" value="22">
          22
        </option>
        <option className="day-option" value="23">
          23
        </option>
        <option className="day-option" value="24">
          24
        </option>
        <option className="day-option" value="25">
          25
        </option>
        <option className="day-option" value="26">
          26
        </option>
        <option className="day-option" value="27">
          27
        </option>
        <option className="day-option" value="28">
          28
        </option>
        <option className="day-option" value="29">
          29
        </option>
        <option className="day-option" value="30">
          30
        </option>
        <option className="day-option" value="31">
          31
        </option>
      </select>
      <ArrowDownSymbol class="white input-arrow-down-symbol" width="22.5px" height="22.5px" />
    </div>
  );
};
