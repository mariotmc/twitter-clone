import { useEffect } from "react";

const NotificationsContent = () => {
  useEffect(() => {
    document.title = "Notifications / Twitter";
  }, []);

  return <div>NotificationsContent</div>;
};

export default NotificationsContent;
