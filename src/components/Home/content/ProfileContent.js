import { useEffect } from "react";
import { auth } from "../../../firebase";

const ProfileContent = () => {
  useEffect(() => {
    document.title = `${auth.currentUser.displayName} / Twitter`;
  }, []);

  return <div>ProfileContent</div>;
};

export default ProfileContent;
