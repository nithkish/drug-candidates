import { useState, useEffect, useCallback, useMemo } from "react";
import { DrugType } from "@/types/drug";
import { mockDrugsData } from "@/constants/drugs-list";

const BOOKMARKS_STORAGE_KEY = "drug-bookmarks";

interface UseBookmarksDataReturn {
  // State
  bookmarks: string[];
  isLoading: boolean;
  bookmarksList: DrugType[];

  // Actions
  toggleBookmark: (id: string) => void;
  clearAllBookmarks: () => void;

  // Utilities
  isBookmarked: (drugId: string) => boolean;
  getBookmarkCount: () => number;
}

export const useBookMarksData = (): UseBookmarksDataReturn => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    try {
      const storedBookmarks = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (storedBookmarks) {
        const parsedBookmarks = JSON.parse(storedBookmarks);
        setBookmarks(parsedBookmarks);
      }
    } catch (error) {
      console.error("Error loading bookmarks from localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save bookmarks to localStorage whenever bookmarks change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks));
        console.log(localStorage.getItem(BOOKMARKS_STORAGE_KEY));
      } catch (error) {
        console.error("Error saving bookmarks to localStorage:", error);
      }
    }
  }, [bookmarks, isLoading]);

  // Toggle bookmark status (add if not bookmarked, remove if bookmarked)
  const toggleBookmark = useCallback((id: string) => {
    setBookmarks((prev) => {
      const isBookmarked = prev.some((bookmark) => bookmark === id);
      if (isBookmarked) {
        return prev.filter((bookmark) => bookmark !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  // Clear all bookmarks
  const clearAllBookmarks = useCallback(() => {
    setBookmarks([]);
  }, []);

  // Check if a drug is bookmarked
  const isBookmarked = useCallback(
    (drugId: string): boolean => {
      return bookmarks.some((bookmark) => bookmark === drugId);
    },
    [bookmarks]
  );

  // Get total number of bookmarks
  const getBookmarkCount = useCallback((): number => {
    return bookmarks.length;
  }, [bookmarks]);

  const bookmarksList = useMemo(() => {
    return mockDrugsData.filter((item) => bookmarks.includes(item.id));
  }, [bookmarks]);

  return {
    // State
    bookmarks,
    isLoading,
    bookmarksList,

    // Actions
    toggleBookmark,
    clearAllBookmarks,

    // Utilities
    isBookmarked,
    getBookmarkCount,
  };
};
