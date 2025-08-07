import { renderHook } from "@testing-library/react";
import { useDrugData } from "@/hooks/useDrugData";
import { mockDrugsData } from "@/constants/drugs-list";
import { useGlobalContext } from "@/providers/GlobalContextProvider";
import { GlobalContextType } from "@/types/global";

jest.mock("@/providers/GlobalContextProvider", () => ({
  useGlobalContext: jest.fn(),
}));

describe("useDrugData", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns all drugs when no search or filters applied", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      searchValue: "",
      filter: [],
      currentPage: 1,
    });

    const { result } = renderHook(() => useDrugData({ itemsPerPage: 9 }));

    expect(result.current.filteredDrugs.length).toBe(mockDrugsData.length);
    expect(result.current.paginatedDrugs.length).toBe(9); // first page with 9 items
    expect(result.current.totalPages).toBe(Math.ceil(mockDrugsData.length / 9));
    expect(result.current.totalItems).toBe(mockDrugsData.length);
  });

  it("filters drugs by search term (case insensitive)", () => {
    const searchTerm = mockDrugsData[0].name.slice(0, 3).toUpperCase(); // take first 3 chars uppercase

    (useGlobalContext as jest.Mock).mockReturnValue({
      searchValue: searchTerm,
      filter: [],
      currentPage: 1,
    });

    const { result } = renderHook(() => useDrugData());

    // Every drug in filteredDrugs should include searchTerm (case insensitive)
    expect(
      result.current.filteredDrugs.every((drug) =>
        drug.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ).toBe(true);
  });

  it("filters drugs by status filter", () => {
    const statusFilter = [mockDrugsData[0].status];

    (useGlobalContext as jest.Mock).mockReturnValue({
      searchValue: "",
      filter: statusFilter,
      currentPage: 1,
    });

    const { result } = renderHook(() => useDrugData());

    expect(
      result.current.filteredDrugs.every((drug) =>
        statusFilter.includes(drug.status)
      )
    ).toBe(true);
  });

  it("applies both search and status filters", () => {
    const searchTerm = mockDrugsData[0].name.slice(0, 3);
    const statusFilter = [mockDrugsData[0].status];

    (useGlobalContext as jest.Mock).mockReturnValue({
      searchValue: searchTerm,
      filter: statusFilter,
      currentPage: 1,
    });

    const { result } = renderHook(() => useDrugData());

    expect(
      result.current.filteredDrugs.every(
        (drug) =>
          drug.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          statusFilter.includes(drug.status)
      )
    ).toBe(true);
  });

  it("paginates results correctly for given currentPage and itemsPerPage", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      searchValue: "",
      filter: [],
      currentPage: 2,
    });

    const itemsPerPage = 5;
    const { result } = renderHook(() => useDrugData({ itemsPerPage }));

    const expectedPaginated = result.current.filteredDrugs.slice(
      itemsPerPage,
      itemsPerPage * 2
    );

    expect(result.current.paginatedDrugs).toEqual(expectedPaginated);
  });

  it("computes totalPages correctly with custom itemsPerPage", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      searchValue: "",
      filter: [],
      currentPage: 1,
    });

    const itemsPerPage = 4;
    const { result } = renderHook(() => useDrugData({ itemsPerPage }));

    expect(result.current.totalPages).toBe(
      Math.ceil(mockDrugsData.length / itemsPerPage)
    );
  });
});
