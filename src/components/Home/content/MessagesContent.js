import { useEffect } from "react";

const MessagesContent = () => {
  useEffect(() => {
    document.title = "Messages / Twitter";
  }, []);

  return <div>MessagesContent</div>;
};

export default MessagesContent;
