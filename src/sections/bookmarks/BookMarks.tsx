"use client";
import DrugCard from "@/components/drug-card/DrugCard";
import { EmptyBookmarksScreen } from "@/components/error-screen/DefaultErrorScreen";
import { Button } from "@/components/ui/button";
import { useBookMarksData } from "@/hooks/useBookMarksData";
import { X } from "lucide-react";
import React from "react";

/**
 * BookMarks Section
 *
 * Displays a list of bookmarked drug candidates.
 * If there are no bookmarks, shows an accessible empty state.
 * Allows users to clear all bookmarks with a single action.
 *
 * Accessibility:
 * - The main section uses role="region" and aria-label for screen readers.
 * - The bookmarks list is rendered as a <ul> with each DrugCard in a <li> for semantic grouping.
 * - The "Clear All" button has an accessible label and icon is marked aria-hidden.
 *
 * @returns {JSX.Element} The bookmarks section UI.
 */
function BookMarks() {
  const { bookmarksList, clearAllBookmarks } = useBookMarksData();

  if (bookmarksList.length === 0) return <EmptyBookmarksScreen />;
  return (
    <section
      className="max-w-7xl mx-auto"
      role="region"
      aria-label="Bookmarked drugs list"
    >
      <div className="flex items-center justify-between px-5 pb-3 md:p-3 md:px-16 md:py-2 ">
        <h1
          className="text-2xl font-extrabold py-4 lg:py-2 "
          id="bookmarks-heading"
        >
          Bookmarks List
        </h1>
        <Button
          variant={"outline"}
          className="border-spacing-3 border-blue-500 text-blue-500"
          onClick={clearAllBookmarks}
          aria-label="Clear all bookmarks"
        >
          <X aria-hidden="true" />
          <span className="hidden lg:inline">Clear All</span>
        </Button>
      </div>

      <ul
        className="px-5 pb-3 md:p-3 md:px-16 md:py-2 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        aria-labelledby="bookmarks-heading"
      >
        {bookmarksList?.map((item) => (
          <li key={item.id}>
            <DrugCard drug={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookMarks;
