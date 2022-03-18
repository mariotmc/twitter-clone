import Article from "./Article";
import NewMessageIcon from "../../Icons/NewMessageIcon";
import ExpandIcon from "../../Icons/ExpandIcon";

const Trends = () => {
  return (
    <section style={{ position: "relative", width: "32%" }}>
      <div
        className="header-search-bar"
        style={{
          display: "flex",
          alignItems: "center",
          width: "348px",
          height: "42px",
          margin: "5px auto 0",
          backgroundColor: "rgb(37, 51, 65)",
          borderRadius: "9999px",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="header-icon"
          style={{ width: "44px", height: "19px", marginLeft: "10px", fill: "rgb(136, 153, 166)" }}
        >
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          className="trends-search-bar"
          type="search"
          placeholder="Search Twitter"
          style={{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            color: "#fff",
            fontSize: "15px",
          }}
        />
      </div>

      <section
        className="trends-container"
        style={{
          width: "80%",
          height: "fit-content",
          margin: "20px auto",
          backgroundColor: "rgb(25, 39, 52)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <h3 style={{ margin: "0", fontSize: "20px", fontFamily: "inherit", padding: "12px 16px" }}>
          What's happening
        </h3>
        <Article
          heading="Ukraine conflict"
          title="Russia launches 'full-scale invasion' on Ukraine"
          image="https://pbs.twimg.com/semantic_core_img/1496698017776214016/RBNwIUlF?format=jpg&name=240x240"
        />
        <Article heading="Trending in United States" title="SWIFT" />
        <Article
          heading="TIME"
          title="U.S. deploys forces in response to Putin's Ukraine moves"
          image="https://pbs.twimg.com/media/FMTa3ouX0AAAs5q?format=jpg&name=120x120"
        />
        <Article
          heading="Ukraine conflict"
          title="Global leaders condemn Ukraine's invasion by Russia"
          image="https://pbs.twimg.com/semantic_core_img/1496767440696406022/RYlqefnz?format=jpg&name=240x240"
        />
        <Article heading="Trending in United States" title="Nuclear" />
        <Article
          heading="Bloomberg"
          title="Here are the sanctions Russia is facing over Ukraine"
          image="https://pbs.twimg.com/media/FJYuuMoXsAAMT-p?format=jpg&name=120x120"
        />
        <Article heading="Trending in United States" title="Belarus" />
        <Article
          heading="i newspaper"
          title="People flee Kyiv after Putin declares war and explosions are heard across Ukraine"
          image="https://pbs.twimg.com/media/FMWgel_WYAEHpTZ?format=jpg&name=120x120"
        />
      </section>

      <nav className="trends-nav">
        <ul>
          <li>
            <a href="https://twitter.com/en/tos" target="_blank" rel="noreferrer">
              Terms Of Service
            </a>
          </li>

          <li>
            <a href="https://twitter.com/en/privacy" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
          </li>

          <li>
            <a
              href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
              target="_blank"
              rel="noreferrer"
            >
              Cookie Policy
            </a>
          </li>

          <li>
            <a href="https://help.twitter.com/en/resources/accessibility" target="_blank" rel="noreferrer">
              Accessibility
            </a>
          </li>

          <li>
            <a
              href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
              target="_blank"
              rel="noreferrer"
            >
              Ads info
            </a>
          </li>

          <li>
            <a href="https://about.twitter.com/en" target="_blank" rel="noreferrer">
              About
            </a>
          </li>

          <li>
            <a href="https://status.twitterstat.us/" target="_blank" rel="noreferrer">
              Status
            </a>
          </li>

          <li>
            <a
              href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
              target="_blank"
              rel="noreferrer"
            >
              Twitter for Business
            </a>
          </li>

          <li>
            <a href="https://developer.twitter.com/en" target="_blank" rel="noreferrer">
              Developers
            </a>
          </li>
        </ul>
        <span>&copy; 2022 Twitter, Inc.</span>
      </nav>

      <div
        className="trends-messages"
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: "0px",
          left: "7.5%",
          right: "7.5%",
          height: "53px",
          padding: "0px 16px",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          boxShadow: "rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: "20px", fontWeight: "700" }}>Messages</span>
        <div className="trend-messages-icons" style={{ display: "flex", margin: "0 0 0 auto" }}>
          <div className="message-icon-container" style={{ overflow: "visible" }}>
            <NewMessageIcon width="20" height="20" />
          </div>
          <div className="message-icon-container">
            <ExpandIcon width="20" height="20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
