import { renderHook, act } from "@testing-library/react";
import { useBookMarksData } from "@/hooks/useBookMarksData";
import { mockDrugsData } from "@/constants/drugs-list";

const STORAGE_KEY = "drug-bookmarks";

describe("useBookMarksData", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("loads bookmarks from localStorage", () => {
    const bookmarks = ["drug-1", "drug-2"];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));

    const { result } = renderHook(() => useBookMarksData());

    // Wait for useEffect
    act(() => {
      jest.runAllTimers?.();
    });

    expect(result.current.bookmarks).toEqual(bookmarks);
    expect(result.current.isLoading).toBe(false);
  });

  it("toggles bookmark (add and remove)", () => {
    const { result } = renderHook(() => useBookMarksData());

    act(() => {
      result.current.toggleBookmark("drug-1");
    });

    expect(result.current.bookmarks).toContain("drug-1");

    act(() => {
      result.current.toggleBookmark("drug-1");
    });

    expect(result.current.bookmarks).not.toContain("drug-1");
  });

  it("clearAllBookmarks removes all bookmarks", () => {
    const { result } = renderHook(() => useBookMarksData());

    act(() => {
      result.current.toggleBookmark("drug-1");
      result.current.toggleBookmark("drug-2");
    });

    expect(result.current.bookmarks.length).toBe(2);

    act(() => {
      result.current.clearAllBookmarks();
    });

    expect(result.current.bookmarks).toEqual([]);
  });

  it("isBookmarked returns correct status", () => {
    const { result } = renderHook(() => useBookMarksData());

    act(() => {
      result.current.toggleBookmark("drug-1");
    });

    expect(result.current.isBookmarked("drug-1")).toBe(true);
    expect(result.current.isBookmarked("drug-2")).toBe(false);
  });

  it("getBookmarkCount returns correct number", () => {
    const { result } = renderHook(() => useBookMarksData());

    act(() => {
      result.current.toggleBookmark("drug-1");
      result.current.toggleBookmark("drug-2");
    });

    expect(result.current.getBookmarkCount()).toBe(2);
  });

  it("bookmarksList returns full drug data from mockDrugsData", () => {
    const bookmarkedId = mockDrugsData[0].id;

    const { result } = renderHook(() => useBookMarksData());

    act(() => {
      result.current.toggleBookmark(bookmarkedId);
    });

    expect(result.current.bookmarksList.length).toBe(1);
    expect(result.current.bookmarksList[0].id).toBe(bookmarkedId);
  });
});
