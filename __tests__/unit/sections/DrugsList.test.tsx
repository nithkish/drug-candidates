import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DrugsList from "@/sections/drugs-list/DrugsList";
import { useGlobalContext } from "@/providers/GlobalContextProvider";
import { useDrugData } from "@/hooks/useDrugData";
import { ITEMS_PER_PAGE } from "@/constants/api";

jest.mock("@/providers/GlobalContextProvider");
jest.mock("@/hooks/useDrugData");
jest.mock("@/components/search-bar/SearchBar", () => ({
  SearchBar: ({ onSearch }: { onSearch: (v: string) => void }) => (
    <input
      aria-label="Search drugs by name"
      onChange={(e) => onSearch(e.target.value)}
    />
  ),
}));
jest.mock("@/components/filter-button/FilterButton", () => ({
  FilterButton: ({
    options,
    selectedFilters,
    onFilterChange,
  }: {
    options: any;
    selectedFilters: any;
    onFilterChange: (filters: any) => void;
  }) => (
    <button onClick={() => onFilterChange(["approved"])}>Filter Button</button>
  ),
}));
jest.mock("@/components/drug-card/DrugCard", () => ({
  __esModule: true,
  default: ({ drug }: { drug: any }) => <div>{drug.name}</div>,
}));
jest.mock("@/components/error-screen/DefaultErrorScreen", () => ({
  NoResultsScreen: () => <div>No Results</div>,
}));
jest.mock("@/components/pagination/Pagination", () => ({
  __esModule: true,
  default: ({ pageCount }: { pageCount: number }) => (
    <div>Pagination pages: {pageCount}</div>
  ),
}));

describe("DrugsList", () => {
  const setFilter = jest.fn();
  const setSearchValue = jest.fn();
  const setCurrentPage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useGlobalContext as jest.Mock).mockReturnValue({
      filter: [],
      setFilter,
      setSearchValue,
      setCurrentPage,
    });
  });

  it("renders drug cards when paginatedDrugs are present", () => {
    (useDrugData as jest.Mock).mockReturnValue({
      paginatedDrugs: [
        { id: "1", name: "Drug 1" },
        { id: "2", name: "Drug 2" },
      ],
      filteredDrugs: [
        { id: "1", name: "Drug 1" },
        { id: "2", name: "Drug 2" },
      ],
      totalPages: 1,
    });

    render(<DrugsList />);

    expect(screen.getByText("Drug 1")).toBeInTheDocument();
    expect(screen.getByText("Drug 2")).toBeInTheDocument();
    expect(screen.queryByText("No Results")).not.toBeInTheDocument();
  });

  it("renders NoResultsScreen when no drugs are found", () => {
    (useDrugData as jest.Mock).mockReturnValue({
      paginatedDrugs: [],
      filteredDrugs: [],
      totalPages: 0,
    });

    render(<DrugsList />);

    expect(screen.getByText("No Results")).toBeInTheDocument();
  });

  it("calls setSearchValue and setCurrentPage on search input change", () => {
    (useDrugData as jest.Mock).mockReturnValue({
      paginatedDrugs: [],
      filteredDrugs: [],
      totalPages: 0,
    });

    render(<DrugsList />);
    const searchInput = screen.getByLabelText("Search drugs by name");

    fireEvent.change(searchInput, { target: { value: "abc" } });

    expect(setSearchValue).toHaveBeenCalledWith("abc");
    expect(setCurrentPage).toHaveBeenCalledWith(1);
  });

  it("calls setFilter and setCurrentPage when filter button clicked", () => {
    (useDrugData as jest.Mock).mockReturnValue({
      paginatedDrugs: [],
      filteredDrugs: [],
      totalPages: 0,
    });

    render(<DrugsList />);

    const filterBtn = screen.getByText("Filter Button");
    fireEvent.click(filterBtn);

    expect(setFilter).toHaveBeenCalledWith(["approved"]);
    expect(setCurrentPage).toHaveBeenCalledWith(1);
  });

  it("renders PaginationComponent only if filteredDrugs length > ITEMS_PER_PAGE", () => {
    // Case where filteredDrugs length <= ITEMS_PER_PAGE -> no pagination
    (useDrugData as jest.Mock).mockReturnValue({
      paginatedDrugs: [{ id: "1", name: "Drug 1" }],
      filteredDrugs: new Array(ITEMS_PER_PAGE).fill({
        id: "x",
        name: "Drug X",
      }),
      totalPages: 1,
    });

    render(<DrugsList />);
    expect(screen.queryByText(/Pagination pages:/)).not.toBeInTheDocument();

    // Case where filteredDrugs length > ITEMS_PER_PAGE -> pagination shown
    (useDrugData as jest.Mock).mockReturnValue({
      paginatedDrugs: new Array(ITEMS_PER_PAGE).fill({
        id: "x",
        name: "Drug X",
      }),
      filteredDrugs: new Array(ITEMS_PER_PAGE + 1).fill({
        id: "x1",
        name: "Drug X",
      }),
      totalPages: 2,
    });

    render(<DrugsList />);
    expect(screen.getByText("Pagination pages: 2")).toBeInTheDocument();
  });
});
