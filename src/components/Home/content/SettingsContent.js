import { useEffect } from "react";

const SettingsContent = () => {
  useEffect(() => {
    document.title = "Your Account / Twitter";
  }, []);

  return <div>SettingsContent</div>;
};

export default SettingsContent;
