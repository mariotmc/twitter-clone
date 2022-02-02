# Twitter

_Architecture_
Not logged in
    Log in screen (some sort of auth, probably Google)
Logged in
    (3 column layout - navigation + tweet button + logout field (left), main content (middle), search bar + trends/what's happening/who to follow + messages @ bottom (right))
    Home
        Compose tweet markdown
        Feed timeline
    Explore
        Trends (location based)
    Notifications
        All notifications
        Mentions
    Messages
        (2 column layout - History of messages with all people, messages history with selected person (if none selected, create new message button))
        Search bar to filter messages (left column)
    Bookmarks
        Feed of all bookmared tweets        
    Profile
        Personal Profile
        Banner
        Profile Picture
        Name
        Tag
        Bio
        Location
        Joined date
        Following + Followers
        Tweets // Tweets & Replies // Media // Likes
    Display
        Preview of applied changes
        Font size
        Color theme
        Background theme

Save/Retrieve users(theme preferences, following, etc.), content, messages in db (Firebase)
User authentication through Firebase

_TODO_
- Dynamic document title based on route