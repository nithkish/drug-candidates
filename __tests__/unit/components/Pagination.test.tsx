import { render, screen, fireEvent } from "@testing-library/react";
import PaginationComponent from "@/components/pagination/Pagination";
import { useGlobalContext } from "@/providers/GlobalContextProvider";

jest.mock("@/providers/GlobalContextProvider", () => ({
  useGlobalContext: jest.fn(),
}));

describe("PaginationComponent", () => {
  const mockSetCurrentPage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useGlobalContext as jest.Mock).mockReturnValue({
      currentPage: 1,
      setCurrentPage: mockSetCurrentPage,
    });
  });

  it("renders the current page number", () => {
    render(<PaginationComponent pageCount={5} />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("disables the left arrow when on the first page", () => {
    render(<PaginationComponent pageCount={5} />);
    const leftArrow = screen.getByRole("button", { name: /left/i });
    expect(leftArrow).toBeDisabled();
  });

  it("disables the right arrow when on the last page", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      currentPage: 5,
      setCurrentPage: mockSetCurrentPage,
    });
    render(<PaginationComponent pageCount={5} />);
    const rightArrow = screen.getByRole("button", { name: /right/i });
    expect(rightArrow).toBeDisabled();
  });

  it("calls setCurrentPage with the correct value when the left arrow is clicked", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      currentPage: 2,
      setCurrentPage: mockSetCurrentPage,
    });
    render(<PaginationComponent pageCount={5} />);
    const leftArrow = screen.getByRole("button", { name: /left/i });
    fireEvent.click(leftArrow);
    expect(mockSetCurrentPage).toHaveBeenCalledWith(1);
  });

  it("calls setCurrentPage with the correct value when the right arrow is clicked", () => {
    render(<PaginationComponent pageCount={5} />);
    const rightArrow = screen.getByRole("button", { name: /right/i });
    fireEvent.click(rightArrow);
    expect(mockSetCurrentPage).toHaveBeenCalledWith(2);
  });

  it("does not call setCurrentPage when the left arrow is clicked on the first page", () => {
    render(<PaginationComponent pageCount={5} />);
    const leftArrow = screen.getByRole("button", { name: /left/i });
    fireEvent.click(leftArrow);
    expect(mockSetCurrentPage).not.toHaveBeenCalled();
  });

  it("does not call setCurrentPage when the right arrow is clicked on the last page", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      currentPage: 5,
      setCurrentPage: mockSetCurrentPage,
    });
    render(<PaginationComponent pageCount={5} />);
    const rightArrow = screen.getByRole("button", { name: /right/i });
    fireEvent.click(rightArrow);
    expect(mockSetCurrentPage).not.toHaveBeenCalled();
  });

  it("renders the correct page number when currentPage changes", () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      currentPage: 3,
      setCurrentPage: mockSetCurrentPage,
    });
    render(<PaginationComponent pageCount={5} />);
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
