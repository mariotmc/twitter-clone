import { useAppContext } from "../../../Context";
import { NavHomeIcon } from "../../Icons/NavHomeIcon";
import { NavExploreIcon } from "../../Icons/NavExploreIcon";
import { NavNotificationsIcon } from "../../Icons/NavNotificationsIcon";
import { NavMessagesIcon } from "../../Icons/NavMessagesIcon";
import { NavBookmarksIcon } from "../../Icons/NavBookmarksIcon";
import { NavProfileIcon } from "../../Icons/NavProfileIcon";
import { NavSettingsIcon } from "../../Icons/NavSettingsIcon";
import { TwitterIcon } from "../../LoginScreen/utility/TwitterIcon";

const Navigation = () => {
  const { handleLogout } = useAppContext();

  return (
    <div id="navigation-container" style={{ width: "25%" }}>
      <div className="nav-items">
        <div className="nav-icon-container" style={{ height: "53px" }}>
          <TwitterIcon class="header-icon" />
        </div>

        <div className="nav-item">
          <NavHomeIcon />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <NavExploreIcon />
          <span>Explore</span>
        </div>
        <div className="nav-item">
          <NavNotificationsIcon />
          <span>Notifications</span>
        </div>
        <div className="nav-item">
          <NavMessagesIcon />
          <span>Messages</span>
        </div>
        <div className="nav-item">
          <NavBookmarksIcon />
          <span>Bookmarks</span>
        </div>
        <div className="nav-item">
          <NavProfileIcon />
          <span>Profile</span>
        </div>
        <div className="nav-item">
          <NavSettingsIcon />
          <span>Settings</span>
        </div>
        <button className="button" style={{ display: "block", width: "226px" }}>
          Tweet
        </button>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
};

export default Navigation;
