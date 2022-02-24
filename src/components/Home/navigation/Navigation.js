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
  const { setContent, handleLogout } = useAppContext();

  return (
    <div id="navigation-container" style={{ width: "25%" }}>
      <div className="nav-items">
        <div className="nav-icon-container" style={{ height: "49px", paddingLeft: "12px" }}>
          <TwitterIcon class="header-icon" />
        </div>

        <div className="nav-item-container">
          <div className="nav-item" onClick={() => setContent("Home")}>
            <NavHomeIcon />
            <span>Home</span>
          </div>
        </div>

        <div className="nav-item-container">
          <div className="nav-item" onClick={() => setContent("Explore")}>
            <NavExploreIcon />
            <span>Explore</span>
          </div>
        </div>

        <div className="nav-item-container">
          <div className="nav-item" onClick={() => setContent("Notifications")}>
            <NavNotificationsIcon />
            <span>Notifications</span>
          </div>
        </div>

        <div className="nav-item-container">
          <div className="nav-item" onClick={() => setContent("Messages")}>
            <NavMessagesIcon />
            <span>Messages</span>
          </div>
        </div>

        <div className="nav-item-container">
          <div className="nav-item" onClick={() => setContent("Bookmarks")}>
            <NavBookmarksIcon />
            <span>Bookmarks</span>
          </div>
        </div>

        <div className="nav-item-container">
          <div className="nav-item" onClick={() => setContent("Profile")}>
            <NavProfileIcon />
            <span>Profile</span>
          </div>
        </div>

        <div className="nav-item-container">
          <div className="nav-item" onClick={() => setContent("Settings")}>
            <NavSettingsIcon />
            <span>Settings</span>
          </div>
        </div>

        <button
          className="button"
          style={{
            display: "block",
            width: "226px",
            height: "52px",
            marginTop: "20px",
            padding: "0px",
            color: "#fff",
            backgroundColor: "rgb(29, 155, 240)",
            fontWeight: "700",
          }}
        >
          Tweet
        </button>

        <button
          className="button"
          style={{ width: "226px", position: "absolute", bottom: "25px", fontWeight: "700" }}
          onClick={handleLogout}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Navigation;
