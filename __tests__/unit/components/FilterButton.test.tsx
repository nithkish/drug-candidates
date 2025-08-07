import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FilterButton } from "@/components/filter-button/FilterButton";
import { mockFilterOptions } from "../../__mockdata__/filter";

describe("FilterButton", () => {
  it("renders with default placeholder", () => {
    render(
      <FilterButton
        options={mockFilterOptions}
        selectedFilters={[]}
        onFilterChange={jest.fn()}
      />
    );

    expect(
      screen.getByRole("button", { name: /open filter options/i })
    ).toBeInTheDocument();
    expect(screen.queryByText("0")).not.toBeInTheDocument(); // No filter count
  });

  it("displays selected filter count", () => {
    render(
      <FilterButton
        options={mockFilterOptions}
        selectedFilters={["approved"]}
        onFilterChange={jest.fn()}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /1 filters applied/i })
    ).toBeInTheDocument();
  });

  it("opens popover and shows options", async () => {
    render(
      <FilterButton
        options={mockFilterOptions}
        selectedFilters={[]}
        onFilterChange={jest.fn()}
      />
    );

    const button = screen.getByRole("button", { name: /open filter options/i });
    fireEvent.click(button);

    expect(
      screen.getByRole("dialog", { name: /filter options/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Approved")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
    expect(screen.getByText("Rejected")).toBeInTheDocument();
  });

  it("calls onFilterChange when a filter is toggled", async () => {
    const onFilterChange = jest.fn();

    render(
      <FilterButton
        options={mockFilterOptions}
        selectedFilters={[]}
        onFilterChange={onFilterChange}
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: /open filter options/i })
    );

    const checkbox = screen.getByLabelText("Approved");
    fireEvent.click(checkbox);

    expect(onFilterChange).toHaveBeenCalledWith(["approved"]);
  });

  it("removes a selected filter on second toggle", async () => {
    const onFilterChange = jest.fn();

    render(
      <FilterButton
        options={mockFilterOptions}
        selectedFilters={["approved"]}
        onFilterChange={onFilterChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /filters applied/i }));

    const checkbox = screen.getByLabelText("Approved");
    fireEvent.click(checkbox);

    expect(onFilterChange).toHaveBeenCalledWith([]);
  });

  it("clears all filters when 'Clear all' is clicked", async () => {
    const onFilterChange = jest.fn();

    render(
      <FilterButton
        options={mockFilterOptions}
        selectedFilters={["approved", "pending"]}
        onFilterChange={onFilterChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /filters applied/i }));

    const clearButton = screen.getByRole("button", {
      name: /clear all filters/i,
    });
    fireEvent.click(clearButton);

    expect(onFilterChange).toHaveBeenCalledWith([]);
  });
});
