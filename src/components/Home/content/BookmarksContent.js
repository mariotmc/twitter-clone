import { useEffect } from "react";

const BookmarksContent = () => {
  useEffect(() => {
    document.title = "Bookmarks / Twitter";
  }, []);

  return <div>BookmarksContent</div>;
};

export default BookmarksContent;
