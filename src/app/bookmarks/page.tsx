import BookMarks from "@/sections/bookmarks/BookMarks";
import React from "react";

// Component renders the Bookmarks section
// Acts as the base component for route /bookmarks
// Open for extension not for modification
function page() {
  return <BookMarks />;
}

export default page;
