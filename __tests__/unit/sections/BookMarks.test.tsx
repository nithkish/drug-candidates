import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useBookMarksData } from "@/hooks/useBookMarksData";
import BookMarks from "@/sections/bookmarks/BookMarks";

// Mock the hook and components used inside BookMarks
jest.mock("@/hooks/useBookMarksData");
jest.mock("@/components/error-screen/DefaultErrorScreen", () => ({
  EmptyBookmarksScreen: jest.fn(() => <div>EmptyBookmarksScreen</div>),
}));
jest.mock("@/components/drug-card/DrugCard", () =>
  jest.fn(({ drug }) => <div>DrugCard {drug.id}</div>)
);

describe("BookMarks Component", () => {
  const mockClearAllBookmarks = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders EmptyBookmarksScreen when bookmarksList is empty", () => {
    (useBookMarksData as jest.Mock).mockReturnValue({
      bookmarksList: [],
      clearAllBookmarks: mockClearAllBookmarks,
    });

    render(<BookMarks />);
    expect(screen.getByText("EmptyBookmarksScreen")).toBeInTheDocument();
  });

  it("renders list of bookmarked drugs and Clear All button", () => {
    const mockDrugs = [
      { id: "drug1", name: "Drug One" },
      { id: "drug2", name: "Drug Two" },
    ];

    (useBookMarksData as jest.Mock).mockReturnValue({
      bookmarksList: mockDrugs,
      clearAllBookmarks: mockClearAllBookmarks,
    });

    render(<BookMarks />);

    // Heading and Clear All button
    expect(
      screen.getByRole("region", { name: /bookmarked drugs list/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /bookmarks list/i })
    ).toBeInTheDocument();

    const clearButton = screen.getByRole("button", {
      name: /clear all bookmarks/i,
    });
    expect(clearButton).toBeInTheDocument();

    // DrugCard items
    mockDrugs.forEach(({ id }) => {
      expect(screen.getByText(`DrugCard ${id}`)).toBeInTheDocument();
    });

    // Click clear all button triggers clearAllBookmarks
    fireEvent.click(clearButton);
    expect(mockClearAllBookmarks).toHaveBeenCalledTimes(1);
  });
});
