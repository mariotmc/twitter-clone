import { useAppContext } from "../../../Context";
import HomeContent from "./HomeContent";
import ExploreContent from "./ExploreContent";
import NotificationsContent from "./NotificationsContent";
import MessagesContent from "./MessagesContent";
import BookmarksContent from "./BookmarksContent";
import ProfileContent from "./ProfileContent";
import SettingsContent from "./SettingsContent";

const Content = () => {
  const { content } = useAppContext();

  return (
    <div className="content-container" style={{ width: "43%" }}>
      <div
        className="content-title-container"
        style={{ display: "flex", alignItems: "center", height: "53px" }}
      >
        <h1 style={{ margin: "0 0 0 16px", fontSize: "20px", fontFamily: "inherit" }}>{content}</h1>
      </div>
      {content === "Home" && <HomeContent />}
      {content === "Explore" && <ExploreContent />}
      {content === "Notifications" && <NotificationsContent />}
      {content === "Messages" && <MessagesContent />}
      {content === "Bookmarks" && <BookmarksContent />}
      {content === "Profile" && <ProfileContent />}
      {content === "Settings" && <SettingsContent />}
    </div>
  );
};

export default Content;
