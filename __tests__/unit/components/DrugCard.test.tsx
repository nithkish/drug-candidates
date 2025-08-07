import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import DrugCard from "@/components/drug-card/DrugCard";
import { mockDrugsData } from "@/constants/drugs-list";
import { DrugType } from "@/types/drug";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("DrugCard Component", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    jest.clearAllMocks();
  });

  it("renders the DrugCard component with the correct name", () => {
    render(<DrugCard drug={mockDrugsData[0]} />);

    const DrugName = screen.getByText(/aspirin/i);

    expect(DrugName).toBeInTheDocument();
  });

  it("navigates to the correct URL when the card is clicked", () => {
    render(<DrugCard drug={mockDrugsData[0]} />);

    const card = screen.getByTestId("drug-card");
    fireEvent.click(card);

    expect(mockPush).toHaveBeenCalledWith("/drug/1");
  });

  it("does not throw an error when Drug prop is undefined", () => {
    render(<DrugCard drug={undefined as unknown as DrugType} />);

    const DrugName = screen.queryByText(/aspirin/i);

    expect(DrugName).not.toBeInTheDocument();
  });
});
