import { Tooltip } from "@mui/material";

const ExpandIcon = ({ width, height }) => {
  return (
    <Tooltip title="Expand" placement="top">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="expand-icon"
        width={width}
        height={height}
        style={{ fill: "rgb(239, 243, 244)" }}
      >
        <path d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z"></path>
        <path d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z"></path>
      </svg>
    </Tooltip>
  );
};

export default ExpandIcon;
